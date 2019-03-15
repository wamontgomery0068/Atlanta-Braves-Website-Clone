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
        <Route path = "/news" component = {News} />
        <Route path = "/scores" component = {Scores} />
        <Route path = "/schedule" component = {Schedule} />
        <Route path = "/roster" component = {Roster} />
    </Switch>
);