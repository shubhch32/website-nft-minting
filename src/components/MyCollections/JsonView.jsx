import React, { Component } from "react";


export default class JsonView extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
        <div>
            <pre>
                <code>
                    {JSON.stringify(this.props.jsonViewData,0,2)}
                </code>
            </pre>
        </div>
        )
    }
}
