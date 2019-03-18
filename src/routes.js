import React from 'react';
import { Switch, Route } from "react-router-dom";

import Home from './components/Home/Home';
import News from './components/News/News';
import Scores from './components/Scores/Scores';
import Roster from './components/Roster/Roster';
import Schedule from './components/Schedule/Schedule';



export default (
    <Switch>
        <Route path = "/" exact component = {Home} />
        <Route path = "/News" component = {News} />
        <Route path = "/Scores" component = {Scores} />
        <Route path = "/Schedule" component = {Schedule} />
        <Route path = "/Roster" component = {Roster} />
    </Switch>
);