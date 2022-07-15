import React, { Component } from "react";
import CollectionChoosePage from "./CollectionChoosePage"
import CrateCollection from "./CrateCollection"
import TesseractCollection from "./TesseractCollection"
import JsonView from "./JsonView";


export default class MyCollections extends Component{

    constructor(props){
        super(props);
        this.state={
            noOfCrates: 0,
            noOfTesseracts: 0
        }
    }

    setNoOfCrates(noOfCrates){
        this.setState({noOfCrates})
    }

    setNoOfTesseracts(noOfTesseracts){
        this.setState({noOfTesseracts})
    }

    render(){
        return(
        <div>
            <div>
                {this.props.isCollectionsPageSelectionView && <CollectionChoosePage
//                     switchToCollectionsPageTesseractView={()=>this.props.switchToCollectionsPageTesseractView()}
//                     switchToCollectionsPageCrateView={()=>this.props.switchToCollectionsPageCrateView()}
                    noOfCrates={this.state.noOfCrates}
                    noOfTesseracts={this.state.noOfTesseracts}
                    provider={this.props.provider}
                    setNoOfCrates={(i)=>this.setNoOfCrates(i)}
                    setNoOfTesseracts={(i)=>this.setNoOfTesseracts(i)}
                    selectedAddress={this.props.selectedAddress}
                    />}
            </div>
{/*             <div> */}
{/*                 {this.props.isCollectionsPageTesseractView && <TesseractCollection tesseractTokenIds={this.props.tesseractTokenIds} */}
{/*                     switchToCollectionsPageJsonView={()=>this.props.switchToCollectionsPageJsonView()} */}
{/*                     setJsonViewData={(jsonViewData)=>this.props.setJsonViewData(jsonViewData)}/>} */}
{/*             </div> */}
{/*             <div> */}
{/*                 {this.props.isCollectionsPageCrateView && <CrateCollection crateTokenIds={this.props.crateTokenIds} */}
{/*                     switchToCollectionsPageJsonView={()=>this.props.switchToCollectionsPageJsonView()} */}
{/*                     setJsonViewData={(jsonViewData)=>this.props.setJsonViewData(jsonViewData)}/>} */}
{/*             </div> */}
{/*             <div> */}
{/*                 {this.props.isCollectionsPageJsonView && <JsonView jsonViewData={this.props.jsonViewData}/>} */}
{/*             </div> */}
        </div>
        )
    }
}
