import React, { Component} from 'react';

import AuthBar from '../Bar/AuthBar/AuthBar';
import LogoBar from "../Bar/LogoBar/LogoBar";
import NavBar from '../Bar/NavBar/NavBar';

import './Home.css';

class Home extends Component {
    render(){
        return (
            <div className = "Home_Container">
                <AuthBar />
                <LogoBar />
                <NavBar />
            </div>
        )
    }
}

export default Home;