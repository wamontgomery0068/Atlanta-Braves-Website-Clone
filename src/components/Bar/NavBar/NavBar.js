import React, { Component} from 'react';
// import { Link } from 'react-router-dom';

import './NavBar.css';

class NavBar extends Component {
    render(){
        return (
            <div className = "NavBar_Container">
                <p className = "Link_Text"> News </p>
                <p className = "Link_Text"> Scores </p>
                <p className = "Link_Text"> Schedule </p>
                <p className = "Link_Text"> Roster </p>
            </div>
        )
    }
}

export default NavBar;