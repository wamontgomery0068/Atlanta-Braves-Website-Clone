import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import routes from "./routes";

import AuthBar from "./components/Bar/AuthBar/AuthBar";
import LogoBar from "./components/Bar/LogoBar/LogoBar";
import NavBar from './components/Bar/NavBar/NavBar';


import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className = "App_Container">
          <AuthBar />
          <LogoBar />
          <NavBar />
          {routes}
        </div>
      </Router>
    )
  }
}

export default App;
