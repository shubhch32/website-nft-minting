import React, { Component } from "react";
import CollectionChoosePage from "./CollectionChoosePage"
import CrateCollection from "./CrateCollection"
import TesseractCollection from "./TesseractCollection"
import JsonView from "./JsonView";


export default class MyCollections extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
        <div>
            <div>
                {this.props.isCollectionsPageSelectionView && <CollectionChoosePage
                    switchToCollectionsPageTesseractView={()=>this.props.switchToCollectionsPageTesseractView()}
                    switchToCollectionsPageCrateView={()=>this.props.switchToCollectionsPageCrateView()}/>}
            </div>
            <div>
                {this.props.isCollectionsPageTesseractView && <TesseractCollection tesseractTokenIds={this.props.tesseractTokenIds}
                    switchToCollectionsPageJsonView={()=>this.props.switchToCollectionsPageJsonView()}
                    setJsonViewData={(jsonViewData)=>this.props.setJsonViewData(jsonViewData)}/>}
            </div>
            <div>
                {this.props.isCollectionsPageCrateView && <CrateCollection crateTokenIds={this.props.crateTokenIds}
                    switchToCollectionsPageJsonView={()=>this.props.switchToCollectionsPageJsonView()}
                    setJsonViewData={(jsonViewData)=>this.props.setJsonViewData(jsonViewData)}/>}
            </div>
            <div>
                {this.props.isCollectionsPageJsonView && <JsonView jsonViewData={this.props.jsonViewData}/>}
            </div>
        </div>
        )
    }
}
