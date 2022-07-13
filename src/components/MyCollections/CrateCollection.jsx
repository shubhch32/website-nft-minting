import React, { Component } from "react";
import {
    MDBContainer,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';
import axios from 'axios';

export default class CrateCollection extends Component{

    constructor(props){
        super(props);
    }

    makeImageComponents(crateTokenIds){
        return(
            <>
                {crateTokenIds.map((crateTokenId)=>(
                    <MDBCol md="4" align="center">
                        <button style={{border:0}} onClick={()=>this.switchToJsonView(crateTokenId)}>
                            <img height="250px" width="330px" src={require('../../Assets/crate.gif')} alt="loading..." />
                            <p>Token #{crateTokenId}</p>
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
                        {this.makeImageComponents(this.props.crateTokenIds)}
                    </MDBRow>
                </MDBContainer>
            </div>
        )
    }

    switchToJsonView(crateTokenId){
        axios.get('http://localhost:8080/authorize/'+crateTokenId)
            .then(response =>
            {
                console.log(response);
                this.props.setJsonViewData(response.data);
                this.props.switchToCollectionsPageJsonView();
            });
    }
}