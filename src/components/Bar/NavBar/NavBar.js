import React, { Component} from 'react';
import { Link } from 'react-router-dom';



import './NavBar.css';

class NavBar extends Component {
    render(){
        return (
            <div className = "NavBar_Container">
                <div className = "Nav_List_Container">
                    <button className = "Nav_DropDown_Button"> News </button>
                    <button className = "Nav_DropDown_Button"> Scores </button>
                    <button className = "Nav_DropDown_Button"> Schedule </button>
                    <button className = "Nav_DropDown_Button"> Roster </button>
                </div>
                <div className = "Nav_DropDown_Container">
                    <div className = "Nav_DropDown"></div>
                    <div className = "Nav_DropDown"></div>
                    <div className = "Nav_DropDown"></div>
                    <div className = "Nav_DropDown"></div>
                </div>
            </div>
        )
    }
}

export default NavBar;
{/* <Link className = "Link_Properties" to = "/news">
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
</Link> */}