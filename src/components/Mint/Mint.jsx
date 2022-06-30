import React, { Component } from "react";
import { NoWalletDetected } from "../NoWalletDetected";
import { ConnectWallet } from "../ConnectWallet";
import { NetworkErrorMessage } from "../NetworkErrorMessage";
import { ethers } from "ethers";
import MintTesseract from "./MintTesseract";
import MintCrate from "./MintCrate";

// This is the Hardhat Network id, you might change it in the hardhat.config.js.
// If you are using MetaMask, be sure to change the Network id to 1337.
// Here's a list of network ids https://docs.metamask.io/guide/ethereum-provider.html#properties
// to use when deploying to other networks.
const HARDHAT_NETWORK_ID = '31337';

export default class Mint extends Component{

    constructor(props){
        super(props);
    }

    render(){
        if (window.ethereum === undefined) {
            return <NoWalletDetected />;
        }

        if (!this.props.selectedAddress) {
            return(
                <ConnectWallet
                      connectWallet={() => this._connectWallet()}
                      networkError={this.props.networkError}
                      dismiss={() => this._dismissNetworkError()}
                 />
            );
        }

        return(
            <div>
                <br/>
                <div>
                    {this.props.isTesseractView && <MintTesseract selectedAddress={this.props.selectedAddress}/>}
                </div>
                <div>
                    {!this.props.isTesseractView && <MintCrate selectedAddress={this.props.selectedAddress}/>}
                </div>
            </div>
        )
    }

    async _connectWallet() {
        // This method is run when the user clicks the Connect. It connects the
        // dapp to the user's wallet, and initializes it.

        // To connect to the user's wallet, we have to run this method.
        // It returns a promise that will resolve to the user's address.
        const [selectedAddress] = await window.ethereum.request({ method: 'eth_requestAccounts' });

        // Once we have the address, we can initialize the application.

        // First we check the network for hardhat connection
//         if (!this._checkNetwork()) {
//             return;
//         }

        this._initialize(selectedAddress);

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

          this._initialize(newAddress);
        });

        // We reset the dapp state if the network is changed
        window.ethereum.on("chainChanged", ([networkId]) => {
          this._stopPollingData();
          this._resetState();
        });
    }

    _initialize(userAddress) {
        // This method initializes the dapp

        // We first store the user's address in the component's state
        this.props.setSelectedAddress(userAddress);

        // Then, we initialize ethers, fetch the token's data, and start polling
        // for the user's balance.

        // Fetching the token data and the user's balance are specific to this
        // sample project, but you can reuse the same initialization pattern.
        this._initializeEthers();
        this._startPollingData();
    }

    async _initializeEthers() {
        // We first initialize ethers by creating a provider using window.ethereum
        this._provider = new ethers.providers.Web3Provider(window.ethereum);

        // Then, we initialize the contract using that provider and the token's
        // artifact. You can do this same thing with your contracts.
//         this._token = new ethers.Contract(
//           contractAddress.Token,
//           TokenArtifact.abi,
//           this._provider.getSigner(0)
//         );
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
        if (window.ethereum.networkVersion === HARDHAT_NETWORK_ID) {
          return true;
        }

        this.props.setNetworkError('Please connect Metamask to Localhost:8545');

        return false;
    }
}
