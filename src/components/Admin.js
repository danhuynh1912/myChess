import React, { Component } from 'react';
import '../static/HomeTest.css';
import '../static/Admin.css';

import {
    Switch,
    Route,
} from "react-router-dom";

import NavAdmin from './NavAdmin';
import AdminContentContainer from '../container/AdminContentContainer';
import LessonAdminContainer from '../container/LessonAdminContainer';
import ArticlesAdminContainer from '../container/ArticlesAdminContainer';
import AccountAdminContainer from '../container/AccountAdminContainer';

// container

export default class Admin extends Component {
    render() {
        return <div className='row home'>
            <div className='col-2 nav-home'>
                <NavAdmin />
            </div>
            <div className='col-10'>
                <Switch>
                <Route path="/admin">
                        <AdminContentContainer />
                    </Route>
                    <Route path="/lesson-admin">
                        <LessonAdminContainer />
                    </Route>
                    
                    <Route path="/account-admin">
                        <AccountAdminContainer />
                    </Route>
                    <Route path="/article-admin">
                        <ArticlesAdminContainer />
                    </Route>
                </Switch>
            </div>
        </div>
    }
}