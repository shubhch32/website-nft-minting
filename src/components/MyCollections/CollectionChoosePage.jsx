import React, { Component } from "react";
import {
    MDBContainer,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';

export default class CollectionChoosePage extends Component{

    constructor(props){
        super(props);
    }

    render(){
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