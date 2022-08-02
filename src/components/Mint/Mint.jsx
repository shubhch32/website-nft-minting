import React, { Component } from "react";
import { NoWalletDetected } from "../NoWalletDetected";
import { ConnectWallet } from "../ConnectWallet";
import { NetworkErrorMessage } from "../NetworkErrorMessage";
import { ethers, BigNumber } from "ethers";
import MintTesseract from "./MintTesseract";
import MintCrate from "./MintCrate";


import contractAddress from "../../iotex_testnet_contract_metadata/contract_address.json";
import CrateMinter_v1Artifact from "../../iotex_testnet_contract_metadata/CrateMinter_v1.json";
import TesseractMinter_v1Artifact from "../../iotex_testnet_contract_metadata/TesseractMinter_v1.json";

import WalletConnectProvider from "@walletconnect/web3-provider";

const IOTEX_NETWORK_ID = '4690';

export default class Mint extends Component{

    constructor(props){
        super(props);
    }

    render(){

        if (!this.props.selectedAddress) {
            return(
                <ConnectWallet
                    connectWallet={() => this._connectWallet()}
                    networkError={this.props.networkError}
                    dismiss={() => this._dismissNetworkError()}
                    connectToIoPayWallet={this.connectToIoPayWallet}
                />
            );
        }

        return(
            <div>
                <br/>
                <div>
                    {this.props.isTesseractView && <MintTesseract selectedAddress={this.props.selectedAddress} TesseractMintHandler = {this.MintTesseractHandler}/>}
                </div>
                <div>
                    {!this.props.isTesseractView && <MintCrate selectedAddress={this.props.selectedAddress} CrateMintHandler = {this.MintCrateHandler}/>}
                </div>
            </div>
        )
    }

    connectToIoPayWallet = async () => {

        console.log("inside iopay wallet");
        const provider = new WalletConnectProvider({
            rpc: {
                4689: "https://babel-api.mainnet.iotex.io",
                4690: "https://babel-api.testnet.iotex.io",
            },
        });

        console.log("inside iopay wallet");

        //  Enable session (triggers QR Code modal)
        await provider.enable();

        const selectedAddress = provider.accounts[0];
        this.props.setSelectedAddress(provider.accounts[0]);

        provider.on("accountsChanged", (accounts: string[]) => {
          console.log(accounts);
        });

        // Subscribe to chainId change
        provider.on("chainChanged", (chainId: number) => {
          console.log(chainId);
        });

        // Subscribe to session disconnection
        provider.on("disconnect", (code: number, reason: string) => {
            this._stopPollingData();
            this._resetState();
            console.log(code, reason);
        });
        const ethersProvider = await new ethers.providers.Web3Provider(provider);

        this._initialize(selectedAddress, ethersProvider);

    };


    _getMetamaskProvider(){
        let provider = new ethers.providers.Web3Provider(window.ethereum);
        return provider;
    }

    async _connectWallet() {
        // This method is run when the user clicks the Connect. It connects the
        // dapp to the user's wallet, and initializes it.

        // To connect to the user's wallet, we have to run this method.
        // It returns a promise that will resolve to the user's address.
        const [selectedAddress] = await window.ethereum.request({ method: 'eth_requestAccounts' });
        // Once we have the address, we can initialize the application.


        this._initialize(selectedAddress, this._getMetamaskProvider());

        window.ethereum.on("connect", ([newAddress]) => {
            console.log(newAddress);
        });

        // We reinitialize it whenever the user changes their account.
        window.ethereum.on("accountsChanged", ([newAddress]) => {
            this._stopPollingData();
            // `accountsChanged` event can be triggered with an undefined newAddress.
            // This happens when the user removes the Dapp from the "Connected
            // list of sites allowed access to your addresses" (Metamask > Settings > Connections)
            // To avoid errors, we reset the dapp state
            if (newAddress === undefined) {
                return this._resetState();
            }

            this._initialize(newAddress, this._getMetamaskProvider());
        });

        // We reset the dapp state if the network is changed
        window.ethereum.on("chainChanged", ([networkId]) => {
          this._stopPollingData();
          this._resetState();
        });
    }

    _initialize(userAddress, provider) {
        // This method initializes the dapp

        // We first store the user's address in the component's state
        this.props.setSelectedAddress(userAddress);

        // Then, we initialize ethers, fetch the token's data, and start polling
        // for the user's balance.

        // Fetching the token data and the user's balance are specific to this
        // sample project, but you can reuse the same initialization pattern.
        this._initializeEthers(provider);
        this._startPollingData();
    }


    async _initializeEthers(provider) {

        this.props.setProvider(provider);

        const crateMinter_v1_Contract = new ethers.Contract(
                                        contractAddress.CrateMinter_v1.address,
                                        CrateMinter_v1Artifact.abi,
                                        (provider).getSigner()
                                    )

        const tesseractMinter_v1_Contract = new ethers.Contract(
                                        contractAddress.TesseractMinter_v1.address,
                                        TesseractMinter_v1Artifact.abi,
                                        (provider).getSigner()
                                    )

        this.props.setTesseractMinter_v1_Contract(tesseractMinter_v1_Contract);
        this.props.setCrateMinter_v1_Contract(crateMinter_v1_Contract);
    }

    MintCrateHandler = async(numMints) => {
        let MintCost = ethers.utils.formatEther(await this.props.crateMinter_v1_Contract.mintCost());
        await this.props.crateMinter_v1_Contract.mintCrate(BigNumber.from(numMints),{
			value: ethers.utils.parseEther((MintCost*numMints).toString())
		});

    }

    MintTesseractHandler = async(numMints) => {
        let MintCost = ethers.utils.formatEther(await this.props.tesseractMinter_v1_Contract.mintCost());
        await this.props.tesseractMinter_v1_Contract.mintTesseract(BigNumber.from(numMints),{
			value: ethers.utils.parseEther((MintCost*numMints).toString())
		});

    }

      // The next two methods are needed to start and stop polling data. While
      // the data being polled here is specific to this example, you can use this
      // pattern to read any data from your contracts.
      //
      // Note that if you don't need it to update in near real time, you probably
      // don't need to poll it. If that's the case, you can just fetch it when you
      // initialize the app, as we do with the token data.
    _startPollingData() {
//         this._pollDataInterval = setInterval(() => this._updateBalance(), 1000);
//
//         // We run it once immediately so we don't have to wait for it
//         this._updateBalance();
    }

    _stopPollingData() {
        clearInterval(this._pollDataInterval);
        this._pollDataInterval = undefined;
    }

    _dismissNetworkError() {
        this.props.setNetworkError(undefined);
    }

    _checkNetwork() {
        if (window.ethereum.networkVersion === IOTEX_NETWORK_ID) {
          return true;
        }

        this.props.setNetworkError('Please connect Metamask to Localhost:8545');

        return false;
    }
}
