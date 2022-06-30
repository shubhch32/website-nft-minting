import logo from './logo.svg';
import React, { Component } from "react";
import './App.css';
import Button from '@mui/material/Button';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./components/Home";

class App extends Component{
    render(){
        return (

              <div>
                <Routes>
                  <Route path="/" element = {<Home />} />
                </Routes>
              </div>

        );
    }
}

export default App;
