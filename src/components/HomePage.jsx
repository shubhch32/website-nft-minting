import React, { Component } from "react";

import {
    MDBContainer,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';

export default class HomePage extends Component{
    render(){
        return(
            <div>
                <br/>
                <br/>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="8">
                            <p className="font-monospace"><u>Earn While Driving</u></p>
                            <p className="font-monospace">Earn $SDT Tokens for each mile that you already drive.
                                Purchase Tesseract or Crate NFTs to get ROADRUNR NFTs (Body, Wheel and Engine NFTs).
                                The ROADRUNR NFTs come with reward earning attributes which let you earn more rewards for driving.</p>
                            <p className="font-monospace">Fuse Tesseract NFTs with MachineFi NFT to mint ROADRUNR NFTs. Note: this fusion
                                will result in the burning of the Tesseract NFT and the MachineFi NFT will remain as it is. The fusion will be enabled soon.</p>
                            <p className="font-monospace">Open Crate NFTs to get ROADRUNR NFTs. Opening of CRATE NFTs will be enabled soon.</p>
                            <p className="font-monospace">We recommend you to purchase Tesseract NFTs if you already own a MachineFi NFT
                                since Tesseract NFTs are priced at a discount.</p>
                            <p className="font-monospace"><u>Purchasing Limit</u></p>
                            <p className="font-monospace">One can purchase a maximum of 20 Tesseract NFTs and 20 CRATE NFTs. The reward earning attributes
                                get stacked with more ROADRUNR NFTs. Thus, if you hold 2 Engine NFTs, your earnings will roughly be twice of the earnings
                                from a single Engine NFT.</p>
                        </MDBCol>
                    </MDBRow>

                </MDBContainer>
            </div>
        )
    }
}
