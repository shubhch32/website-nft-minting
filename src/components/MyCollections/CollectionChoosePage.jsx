import React, { Component } from "react";
import {ethers, BigNumber} from "ethers";
import {
    MDBContainer,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';

import contractAddress from "../../iotex_testnet_contract_metadata/contract_address.json"
import CrateMinter_v1Artifact from "../../iotex_testnet_contract_metadata/CrateMinter_v1.json"
import TesseractMinter_v1Artifact from "../../iotex_testnet_contract_metadata/TesseractMinter_v1.json"

export default class CollectionChoosePage extends Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.getNFTCounts();
    }

    getNFTCounts = async() => {
        let crateMinter_v1_Contract = new ethers.Contract(
                                    contractAddress.CrateMinter_v1.address,
                                    CrateMinter_v1Artifact.abi,
                                    (this.props.provider)
                                );

        let tesseractMinter_v1_Contract = new ethers.Contract(
                                    contractAddress.TesseractMinter_v1.address,
                                    TesseractMinter_v1Artifact.abi,
                                    (this.props.provider)
                                );
        const numCrate = (await crateMinter_v1_Contract.CrateCount(this.props.selectedAddress)).toNumber();
        const numTesseract = (await tesseractMinter_v1_Contract.TesseractCount(this.props.selectedAddress)).toNumber();
        this.props.setNoOfCrates(numCrate);
        this.props.setNoOfTesseracts(numTesseract);
    }

    render(){
//         this.getNFTCounts();
        return(
            <div>
                <br/>
                <br/>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="6" align="center">
                            <br/>
                            <MDBRow>
                                <MDBCol align="center">
                                    <p><b><u>Crates</u></b></p>
                                    <video width="350" autoplay="true" loop src="/Videos/Crate.mp4"></video>
{/*                                     <img height="300px" width="400px" src={require('../../Assets/Crate.mp4')} alt="loading..." /> */}
                                    <p>Count = {this.props.noOfCrates}</p>
{/*                                     <button style={{border:0}} onClick={()=>this.props.switchToCollectionsPageCrateView()}> */}
{/*                                     </button> */}
                                </MDBCol>
                            </MDBRow>
                            <br/>
                        </MDBCol>
                        <MDBCol md="6" align="center">
                            <br/>
                            <MDBRow>
                                <MDBCol align="center">
                                    <p><b><u>Tesseracts</u></b></p>
                                    <video width="350" autoplay="true" loop src="/Videos/Tesseract.mp4"></video>
{/*                                     <img height="300px" width="400px" src={require('../../Assets/tesseract.gif')} alt="loading..." /> */}
                                    <p>Count = {this.props.noOfTesseracts}</p>
{/*                                     <button style={{border:0}} onClick={()=>this.props.switchToCollectionsPageTesseractView()}> */}
{/*                                     </button> */}
                                </MDBCol>
                            </MDBRow>
                            <br/>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        )
    }
}