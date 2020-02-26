import React from 'react';
import Header from "./components/Header";
import NavSM from "./components/NavSM";
import Card from "./components/Card";
import Contents from "./components/Contents";
import Footer from "./components/Footer";
import SvgBG from "./components/SvgBG";
import Sidebar from "./components/Sidebar";
import {BrowserRouter as Router} from "react-router-dom";

export default class App extends React.Component {
    render() {
        return (
            <div className="ace-wrapper">
                <Router forceRefresh={true}>
                    <Header/>
                    <NavSM/>
                    <Card/>
                    <Contents/>
                    <Sidebar/>
                    <Footer/>
                    <SvgBG/>
                </Router>
            </div>
        )
    }
}


