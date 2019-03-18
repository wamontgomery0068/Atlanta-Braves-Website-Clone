import React, { Component} from 'react';

import Background from '../../Images/ATL.jpg';

import './Home.css';

class Home extends Component {
    render(){
        return (
            <div className = "Home_Container">
                <img className = "Background_Image" alt="" src={Background} />
                {/* <div className = "Inner_Container"></div> */}
            </div>
        )
    }
}

export default Home;