import React, { Component } from "react";
import {
    MDBContainer,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';
import axios from 'axios';

export default class TesseractCollection extends Component{

    constructor(props){
        super(props);
    }

    makeImageComponents(tesseractTokenIds){
        return(
            <>
                {tesseractTokenIds.map((tesseractTokenId)=>(
                    <MDBCol md="4" align="center">
                        <button style={{border:0}} onClick={()=>this.switchToJsonView(tesseractTokenId+3000)}>
                            <video width="350" autoplay="true" loop src="/Videos/Tesseract.mp4"></video>
                            <p>Token #{tesseractTokenId}</p>
                        </button>
                    </MDBCol>
                ))}
            </>
        )
    };

    render(){
        return(
            <div>
                <MDBContainer>
                    <MDBRow>
                        {this.makeImageComponents(this.props.tesseractTokenIds)}
                    </MDBRow>
                </MDBContainer>
            </div>
        )
    }

    switchToJsonView(tesseractTokenId){
        axios.get('http://localhost:8080/authorize/'+tesseractTokenId)
            .then(response =>
            {
                console.log(response);
                this.props.setJsonViewData(response.data);
                this.props.switchToCollectionsPageJsonView();
            });
    }
}