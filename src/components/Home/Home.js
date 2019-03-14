import React, { Component} from 'react';

import AuthBar from '../Bar/AuthBar/AuthBar';
import NavBar from '../Bar/NavBar/NavBar';
import './Home.css';

class Home extends Component {
    render(){
        return (
            <div className = "Home_Container">
                <AuthBar />
                <NavBar />
                <h1> Home Page </h1>
            </div>
        )
    }
}

export default Home;