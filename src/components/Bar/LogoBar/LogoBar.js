import React, { Component} from 'react';
import { Link } from 'react-router-dom';

import './LogoBar.css';

class LogoBar extends Component {
    render(){
        return (
            <div className = "LogoBar_Container">
                <Link to = "/">
                    <img className = "Tomahawk_Logo" alt="" src = "http://www.mlbstatic.com/mlb.com/builds/site-core/f457317af052a355307a55ec74e6730331d8d9dc_1552504434/images/logos/team-primary-on-dark/144.svg" title = "Home" />
                </Link>
                <img className = "Braves_Logo" alt="" src = "https://content.mlb.com/documents/9/0/4/266006904/ATL_url.svg" />
            </div>
        )
    }
}

export default LogoBar;