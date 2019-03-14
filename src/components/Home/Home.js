import React, { Component} from 'react';

import NavBar from '../NavBar/NavBar';
import './Home.css';

class Home extends Component {
    render(){
        return (
            <div className = "Home_Container">
                <NavBar />
                <h1> Home Page </h1>
            </div>
        )
    }
}

export default Home;