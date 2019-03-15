import React, { Component} from 'react';
import { Link } from 'react-router-dom';



import './NavBar.css';

class NavBar extends Component {
    render(){
        return (
            <div className = "NavBar_Container">
                <Link className = "Link_Properties" to = "/news">
                    <p className = "Link_Text"> News </p>
                </Link>
                <Link className = "Link_Properties" to = "scores">
                    <p className = "Link_Text"> Scores </p>
                </Link>
                <Link className = "Link_Properties" to = "/schedule">
                    <p className = "Link_Text"> Schedule </p>
                </Link>
                <Link className = "Link_Properties" to = "/roster">
                    <p className = "Link_Text"> Roster </p>
                </Link>
            </div>
        )
    }
}

export default NavBar;