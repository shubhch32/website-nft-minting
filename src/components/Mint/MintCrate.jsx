import React, { Component } from "react";

import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBBtn
} from 'mdb-react-ui-kit';

export default class MintCrate extends Component{
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
                                <p className="font-monospace"><u>Welcome <b>{this.props.selectedAddress}</b></u> </p>
                            </MDBCol>
                        </MDBRow>
                        <p className="font-monospace">Get these limited edition of <b>Crate NFTs</b> by clicking on the Mint button</p>
                        <p className="font-monospace">Open this Crate NFT to receive ROADRUNR NFTs</p>
                        <p className="font-monospace">The Crate Opening will be enabled soon</p>
                        <p className="font-monospace"><b>1 Crate = 1800 IOTX</b></p>
                    </MDBCol>
                    <MDBCol md="7" align ="center">
                        <br/>
                        <MDBRow>
                            <MDBCol align="center">
                                <video width="350" autoplay="true" src="/Videos/Crate.mp4" loop alt="loading..."></video>
                            </MDBCol>
                        </MDBRow>
                        <br/>
                        <MDBRow>
                            <MDBCol align="right" onClick={()=>this.changeNFTCount(-1)}>
                                <MDBBtn className='text-dark' color='light'>-</MDBBtn>
                            </MDBCol>
                            <MDBCol align="center">{this.state.numberOfNFTs}</MDBCol>
                            <MDBCol align="left" onClick={()=>this.changeNFTCount(1)}>
                                <MDBBtn className='text-dark' color='light'>+</MDBBtn>
                            </MDBCol>
                        </MDBRow>
                        <br/>
                        <MDBRow>
                            <MDBCol align="center">
                                <MDBBtn className='d-grid gap-2 col-6 mx-auto' color='blue' onClick={()=>this.props.CrateMintHandler(this.state.numberOfNFTs)}>Mint</MDBBtn>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}