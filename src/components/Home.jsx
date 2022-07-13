import React, { Component } from "react";
import HomePage from "./HomePage";
import Mint from "./Mint/Mint";
import MyCollections from "./MyCollections/MyCollections";

import CollectionChoosePage from "./MyCollections/CollectionChoosePage"
import CrateCollection from "./MyCollections/CrateCollection"
import TesseractCollection from "./MyCollections/TesseractCollection"

import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBNavbarLink,
  MDBNavbarItem,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink
} from 'mdb-react-ui-kit';

export default class Home extends Component{

    constructor(props){
        super(props);
        this.state = {
            isHomePage: true,
            isMintPage: false,
            isMyCollectionsPage: false,
            isTesseractView: false,
            selectedAddress: undefined,
            networkError: undefined,
            isCollectionsPageSelectionView: false,
            isCollectionsPageTesseractView: false,
            isCollectionsPageCrateView: false,
            isCollectionsPageJsonView: false,
            jsonViewData: undefined,
            crateTokenIds: [0,1,2,3,4,5,6,7,8,9,10],
            tesseractTokenIds: [0,1,2,3,4,5]
        };
    }

    setSelectedAddress(selectedAddress){
        this.setState({selectedAddress});
    }

    setNetworkError(networkError){
        this.setState({networkError});
    }

    setJsonViewData(jsonViewData){
        this.setState({jsonViewData});
    }

    switchToHomePage(){
        this.setState({
            isHomePage:true,
            isMintPage:false,
            isMyCollectionsPage:false
        })
    }

    switchToMintPage(isTesseractView){
        this.setState({
            isHomePage:false,
            isMintPage:true,
            isMyCollectionsPage:false,
            isTesseractView
        })
    }

    switchToMyCollectionsPage(){
        this.setState({
            isHomePage:false,
            isMintPage:false,
            isMyCollectionsPage:true,
            isCollectionsPageSelectionView: true,
            isCollectionsPageTesseractView: false,
            isCollectionsPageCrateView: false,
            isCollectionsPageJsonView: false
        })
    }

    switchToCollectionsPageSelectionView(){
        this.setState({isCollectionsPageSelectionView: true,
            isCollectionsPageTesseractView: false,
            isCollectionsPageCrateView: false,
            isCollectionsPageJsonView: false,
            isHomePage:false,
            isMintPage:false
        })
    }

    switchToCollectionsPageTesseractView(){
        this.setState({isCollectionsPageSelectionView: false,
            isCollectionsPageTesseractView: true,
            isCollectionsPageCrateView: false,
            isCollectionsPageJsonView: false,
            isHomePage:false,
            isMintPage:false
        })
    }

    switchToCollectionsPageCrateView(){
        this.setState({isCollectionsPageSelectionView: false,
            isCollectionsPageTesseractView: false,
            isCollectionsPageCrateView: true,
            isCollectionsPageJsonView: false,
            isHomePage:false,
            isMintPage:false
        })
    }

    switchToCollectionsPageJsonView(){
        this.setState({isCollectionsPageSelectionView: false,
            isCollectionsPageTesseractView: false,
            isCollectionsPageCrateView: false,
            isCollectionsPageJsonView: true,
            isHomePage:false,
            isMintPage:false
        })
    }

    render(){
     return (
        <div>
            <div>
               <header>
                 <MDBNavbar expand='lg' light bgColor='white' sticky>
                   <MDBContainer fluid>
                     <MDBNavbarToggler
                       aria-controls='navbarExample01'
                       aria-expanded='false'
                       aria-label='Toggle navigation'
                     >
                       <MDBIcon fas icon='bars' />
                     </MDBNavbarToggler>
                     <div className='collapse navbar-collapse' id='navbarExample01'>
                       <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                           <MDBNavbarItem>
                               <MDBNavbarLink type='button' onClick={() => this.switchToHomePage()}>
                               Home
                               </MDBNavbarLink>
                           </MDBNavbarItem>

                           <MDBNavbarItem>
                             <MDBDropdown>
                               <MDBDropdownToggle type='button' tag='a' className='nav-link'>
                                 Mint
                               </MDBDropdownToggle>
                               <MDBDropdownMenu>
                                 <MDBDropdownItem>
                                   <MDBDropdownLink onClick={() => this.switchToMintPage(true)}>Tesseract</MDBDropdownLink>
                                 </MDBDropdownItem>
                                 <MDBDropdownItem>
                                   <MDBDropdownLink onClick={() => this.switchToMintPage(false)}>Crate</MDBDropdownLink>
                                 </MDBDropdownItem>
                               </MDBDropdownMenu>
                             </MDBDropdown>
                           </MDBNavbarItem>

                           <MDBNavbarItem>
                               <MDBNavbarLink type='button' onClick={() => this.switchToMyCollectionsPage()}>
                               My Collection
                               </MDBNavbarLink>
                           </MDBNavbarItem>
                       </MDBNavbarNav>
                     </div>
                   </MDBContainer>
                 </MDBNavbar>
               </header>
            </div>
            <div>
                {this.state.isHomePage && <HomePage />}
            </div>
            <div>
                {this.state.isMintPage && <Mint isTesseractView={this.state.isTesseractView}
                    selectedAddress={this.state.selectedAddress}
                    networkError={this.state.networkError}
                    setSelectedAddress={(i)=>this.setSelectedAddress(i)}
                    setNetworkError={(i)=>this.setNetworkError(i)}/>}
            </div>
            <div>
                {this.state.isMyCollectionsPage && <MyCollections isCollectionsPageSelectionView={this.state.isCollectionsPageSelectionView}
                    isCollectionsPageTesseractView={this.state.isCollectionsPageTesseractView}
                    isCollectionsPageCrateView={this.state.isCollectionsPageCrateView}
                    isCollectionsPageJsonView={this.state.isCollectionsPageJsonView}
                    switchToCollectionsPageCrateView={()=>this.switchToCollectionsPageCrateView()}
                    switchToCollectionsPageTesseractView={()=>this.switchToCollectionsPageTesseractView()}
                    switchToCollectionsPageJsonView={()=>this.switchToCollectionsPageJsonView()}
                    crateTokenIds={this.state.crateTokenIds}
                    tesseractTokenIds={this.state.tesseractTokenIds}
                    setJsonViewData={(jsonViewData)=>this.setJsonViewData(jsonViewData)}
                    jsonViewData={this.state.jsonViewData}/>}
            </div>
        </div>
     );
    }
}