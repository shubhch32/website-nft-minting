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
                                    <button style={{border:0}} onClick={()=>this.props.switchToCollectionsPageCrateView()}>
                                        <img height="300px" width="400px" src={require('../../Assets/crate.gif')} alt="loading..." />
                                        <p>Crates</p>
                                    </button>
                                </MDBCol>
                            </MDBRow>
                            <br/>
                        </MDBCol>
                        <MDBCol md="6" align="center">
                            <br/>
                            <MDBRow>
                                <MDBCol align="center">
                                    <button style={{border:0}} onClick={()=>this.props.switchToCollectionsPageTesseractView()}>
                                        <img height="300px" width="400px" src={require('../../Assets/tesseract.gif')} alt="loading..." />
                                        <p>Tesseracts</p>
                                    </button>
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