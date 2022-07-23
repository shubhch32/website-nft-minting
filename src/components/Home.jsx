import React, { Component } from "react";
import HomePage from "./HomePage";
import Mint from "./Mint/Mint";
import MyCollections from "./MyCollections/MyCollections";


import {
  MDBNavbar,
  MDBCollapse,
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
            navbarExpanded: false,
            isMintPage: false,
            isMyCollectionsPage: false,
            isTesseractView: false,
            selectedAddress: undefined,
            provider: undefined,
            networkError: undefined,
            isCollectionsPageSelectionView: false,
            isCollectionsPageTesseractView: false,
            isCollectionsPageCrateView: false,
            isCollectionsPageJsonView: false,
            jsonViewData: undefined,
            tesseractMinter_v1_Contract: undefined,
            crateMinter_v1_Contract: undefined
        };
    }

    setSelectedAddress(selectedAddress){
        this.setState({selectedAddress});
    }

    setProvider(provider){
        this.setState({provider});
    }

    setNetworkError(networkError){
        this.setState({networkError});
    }

    setJsonViewData(jsonViewData){
        this.setState({jsonViewData});
    }

    setTesseractMinter_v1_Contract(tesseractMinter_v1_Contract){
        this.setState({tesseractMinter_v1_Contract});
    }

    setCrateMinter_v1_Contract(crateMinter_v1_Contract){
        this.setState({crateMinter_v1_Contract});
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

    toggleNavbar (expand) {
        this.setState({
            ...this.state,
            navbarExpanded: expand
        });
    }

    render(){
        const { navbarExpanded } = this.state;
        return (
            <div>
                <div>
                <header>
                    <MDBNavbar expand='lg' light bgColor='white' sticky>
                        <div className='container px-3 px-lg-1'>
                            <MDBContainer fluid className='px-0'>
                                <MDBNavbarToggler
                                    aria-expanded='false'
                                    aria-label='Toggle navigation'
                                    onClick={()  => this.toggleNavbar(!navbarExpanded)}
                                >
                                    <MDBIcon fas icon='bars' />
                                </MDBNavbarToggler>
                                <MDBCollapse navbar show={navbarExpanded} className='nav-wrap px-2 mx-1 px-lg-0 mx-lg-0'>
                                    <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                                        <MDBNavbarItem>
                                            <MDBNavbarLink type='button' onClick={() => this.switchToHomePage()}>
                                                Home
                                            </MDBNavbarLink>
                                        </MDBNavbarItem>

                                        <MDBNavbarItem>
                                            <MDBDropdown>
                                                <MDBDropdownToggle type='button' tag='a' className='nav-link'>
                                                    <b>Mint</b>
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
                                {/* </div> */}
                                </MDBCollapse>
                            </MDBContainer>
                        </div>
                    </MDBNavbar>
                </header>
                </div>
                <div className='px-3'>
                    {this.state.isHomePage && <HomePage />}
                </div>
                <div className='px-3'>
                    {this.state.isMintPage && <Mint isTesseractView={this.state.isTesseractView}
                        selectedAddress={this.state.selectedAddress}
                        networkError={this.state.networkError}
                        setSelectedAddress={(i)=>this.setSelectedAddress(i)}
                        setNetworkError={(i)=>this.setNetworkError(i)}
                        setProvider={(i)=>this.setProvider(i)}
                        setTesseractMinter_v1_Contract={(i)=>this.setTesseractMinter_v1_Contract(i)}
                        setCrateMinter_v1_Contract={(i)=>this.setCrateMinter_v1_Contract(i)}
                        tesseractMinter_v1_Contract={this.state.tesseractMinter_v1_Contract}
                        crateMinter_v1_Contract={this.state.crateMinter_v1_Contract}
                        />}
                </div>
                <div className='px-3'>
                    {this.state.isMyCollectionsPage && <MyCollections isCollectionsPageSelectionView={this.state.isCollectionsPageSelectionView}
    //                     isCollectionsPageTesseractView={this.state.isCollectionsPageTesseractView}
    //                     isCollectionsPageCrateView={this.state.isCollectionsPageCrateView}
    //                     isCollectionsPageJsonView={this.state.isCollectionsPageJsonView}
    //                     switchToCollectionsPageCrateView={()=>this.switchToCollectionsPageCrateView()}
    //                     switchToCollectionsPageTesseractView={()=>this.switchToCollectionsPageTesseractView()}
    //                     switchToCollectionsPageJsonView={()=>this.switchToCollectionsPageJsonView()}
                        provider={this.state.provider}
                        selectedAddress={this.state.selectedAddress}
    //                     setJsonViewData={(jsonViewData)=>this.setJsonViewData(jsonViewData)}
    //                     jsonViewData={this.state.jsonViewData}
                        />}
                </div>
            </div>
     );
    }
}
