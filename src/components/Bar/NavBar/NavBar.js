import React, { Component} from 'react';
import { Link } from 'react-router-dom';



import './NavBar.css';

class NavBar extends Component {
    render(){
        return (
            <div className = "NavBar_Container">
                <div className = "Nav_List_Container">
                    <button className = "Nav_DropDown_Button">
                        <p className = "DropwDown_Button_Text"> News </p>
                    </button>
                    <Link className = "Link_Text" to = "/scores">
                        <p className = "DropwDown_Button_Text"> Scores</p>
                    </Link>
                    <button className = "Nav_DropDown_Button">
                        <p className = "DropwDown_Button_Text"> Schedule </p>
                    </button>
                    <button className = "Nav_DropDown_Button">
                        <p className = "DropwDown_Button_Text"> Roster </p>
                    </button>
                </div>
                <div className = "Nav_DropDown_Container">
                    <div className = "Nav_DropDown_1"></div>
                    <div className = "Nav_DropDown_2"></div>
                    <div className = "Nav_DropDown_3"></div>
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