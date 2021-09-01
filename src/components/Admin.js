import React, { Component } from 'react';
import '../static/HomeTest.css';
import '../static/Admin.css';

import {
    Switch,
    Route,
} from "react-router-dom";

import NavAdmin from './NavAdmin';
import AdminContent from './AdminContent';
import LessonAdmin from './LessonAdmin';
import ArticleAdmin from './ArticleAdmin';
import AccountAdmin from './AccountAdmin';

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
                        <AdminContent />
                    </Route>
                    <Route path="/lesson-admin">
                        <LessonAdmin />
                    </Route>
                    
                    <Route path="/account-admin">
                        <AccountAdmin />
                    </Route>
                    <Route path="/article-admin">
                        <ArticleAdmin />
                    </Route>
                </Switch>
            </div>
        </div>
    }
}