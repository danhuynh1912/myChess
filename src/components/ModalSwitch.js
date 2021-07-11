import React, { Component } from 'react';

import Home from './Home';

import {
    Switch,
    Route,
} from "react-router-dom";

export default class ModalSwitch extends Component {
    render() {
        return <Switch>
        <Route path="/">
            <Home />
        </Route>
    </Switch>
        
    }
}