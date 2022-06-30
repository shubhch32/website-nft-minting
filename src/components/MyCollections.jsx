import React, { Component } from "react";

import {
    MDBTypography
} from 'mdb-react-ui-kit';

export default class MyCollections extends Component{
    render(){
        return(
            <div>
                <>
                    <MDBTypography tag='div' className='display-1 pb-3 mb-3 border-bottom'>
                    MyCollections
                    </MDBTypography>
                </>
            </div>
        )
    }
}
