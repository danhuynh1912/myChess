import React, { Component } from 'react';

import Home from './Home';
import Login from './Login';
import LoginContainer from '../container/LoginContainer';
import Registation  from './Registation';

import {
    Switch,
    Route,
} from "react-router-dom";

export default class ModalSwitch extends Component {
    render() {
        return <Switch>
        <Route exact path="/login">
            <LoginContainer />
        </Route>
        <Route path="/register">
            <Registation />
        </Route>
        <Route path="/">
            <Home />
        </Route>
    </Switch>
        
    }
}