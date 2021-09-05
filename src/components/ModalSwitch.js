import React, { Component } from 'react';

import Home from './Home';
import LoginContainer from '../container/LoginContainer';
import RegisterContainer  from '../container/RegisterContainer';
import Admin from './Admin';

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
            <RegisterContainer />
        </Route>
        <Route exact path="/admin">
            <Admin />
        </Route>
        <Route exact path="/lesson-admin">
            <Admin />
        </Route>
        <Route exact path="/account-admin">
            <Admin />
        </Route>
        <Route exact path="/article-admin">
            <Admin />
        </Route>
        <Route path="/">
            <Home />
        </Route>
    </Switch>
    }
}