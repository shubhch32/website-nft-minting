import React, { Component } from "react";

import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBBtn
} from 'mdb-react-ui-kit';

export default class MintTesseract extends Component{
    constructor(props){
        super(props);
        this.state = {
            numberOfNFTs: 1
        };
    }

    changeNFTCount(i){
        if((this.state.numberOfNFTs+i)>0 && (this.state.numberOfNFTs+i)<=20){
            this.setState({numberOfNFTs:this.state.numberOfNFTs+i});
        }
    }

    render(){
        return(
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="5" align="center">
                        <br/><br/><br/>
                        <MDBRow>
                            <MDBCol>
                                <p className="font-monospace"><u>Welcome <b>{this.props.selectedAddress}</b></u></p>
                            </MDBCol>
                        </MDBRow>
                        <p className="font-monospace">Get these limited edition of <b>Tesseract NFTs</b> by clicking on the Mint button</p>
                        <p className="font-monospace">Fuse this Tesseract NFT with a <b>MachineFi NFT</b> to mint ROADRUNR NFTs</p>
                        <p className="font-monospace">The Fusion will be enabled soon</p>
                        </MDBCol>
                    <MDBCol md="7" align ="center">
                        <br/>
                        <MDBRow>
                            <MDBCol align="center">
                                <video width="350" autoplay="true" src="/Videos/Tesseract.mp4" loop alt="loading..."></video>
                            </MDBCol>
                        </MDBRow>
                        <br/>
                        <MDBRow>
                            <MDBCol align="right" md="5" onClick={()=>this.changeNFTCount(-1)}>
                                <MDBBtn className='text-dark' color='light'>-</MDBBtn>
                            </MDBCol>
                            <MDBCol align="center" md="2">{this.state.numberOfNFTs}</MDBCol>
                            <MDBCol align="left" md="5" onClick={()=>this.changeNFTCount(1)}>
                                <MDBBtn className='text-dark' color='light'>+</MDBBtn>
                            </MDBCol>
                        </MDBRow>
                        <br/>
                        <MDBRow>
                            <MDBCol md="2"/>
                            <MDBCol md="8" align="center">
                                <MDBBtn className='d-grid gap-2 col-6 mx-auto' color='blue' onClick={()=>this.props.TesseractMintHandler(this.state.numberOfNFTs)}>Mint</MDBBtn>
                            </MDBCol>
                            <MDBCol md="2"/>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}