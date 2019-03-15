import React, { Component} from 'react';

import './AuthBar.css';

class AuthBar extends Component {
    render(){
        return (
            <div className = "AuthBar_Container">
                <img className = "MLB_Logo" src = "https://www.mlbstatic.com/team-logos/league-on-dark/1.svg" alt="MLB_Logo" />
                <p className = "Offical_Text"> The Unoffical Site of the Atlanta Braves </p> 
                <img className = "Blank_Profile_Logo" alt="" src = "https://secure.ui.bamstatic.com/bridge/images/headers/default_avatar.png"/>
            </div>
        )
    }
}

export default AuthBar;