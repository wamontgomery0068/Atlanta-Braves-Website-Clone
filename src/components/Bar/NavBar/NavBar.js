import React, { Component} from 'react';
import { Link } from 'react-router-dom';



import './NavBar.css';

class NavBar extends Component {
    state = {
        dropDown: false,
        links: ['Roster']
    };

    render(){
        const { dropDown, links } = this.state;

        const linkMap = links.map((e,i) => {
            return(
                <div className = "dropDown_Container" key = {i}>
                    <div className = "dropDown_Left">
                        <p className = "top_dropDown_Text"> Team Roster </p>
                        <Link className = "Link_Text" to = {`/${e}`} title = "Go to Roster Page"><p className = "bottom_dropDown_Text">{e}</p></Link>
                        <p className = "bottom_bottom_dropDown_Text"> 40 Man Roster </p>
                        <p className = "bottom_bottom_dropDown_Text"> Non-Roster-Invitees</p>
                        <p className = "bottom_bottom_dropDown_Text"> Depth Chart </p>
                        <p className = "bottom_bottom_dropDown_Text"> Coaches </p>
                    </div>
                </div>
            )
        })

        return (
            <div className = "NavBar_Container">
                <div className = "Nav_List_Container">

                    <Link className = "Link_Text" to = "/News">
                        <p className = "DropwDown_Button_Text"> News </p>
                    </Link>

                    <button className = "Nav_DropDown_Button" onClick={()=>this.setState({dropDown: !dropDown})} >
                        <p className = "DropwDown_Button_Text"> Roster </p>
                    </button>

                    <Link className = "Link_Text" to = "/Scores">
                        <p className = "DropwDown_Button_Text"> Scores</p>
                    </Link>

                    <Link className = "Link_Text" to = "/Schedule">
                        <p className = "DropwDown_Button_Text"> Schedule </p>
                    </Link>  

                </div>
                <div className = "Nav_DropDown_Container">
                    {dropDown && <div className="dropDown">{linkMap}</div>}
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