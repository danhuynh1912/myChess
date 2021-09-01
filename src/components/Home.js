import React, { Component } from 'react';
import '../static/HomeTest.css';

import {
    Switch,
    Route,
} from "react-router-dom";

import Nav from './Nav';
import HomePage from './HomePage';
import PlayWithHuman from './PlayWithHuman';
import Profile from './Profile';
import HistoryContainer from '../container/HistoryContainer';
import FriendContainer from '../container/FriendsContainer';
import UserContainer from '../container/UserContainer';
import BlogContainer from '../container/BlogContainer';
import LessonsContainer from '../container/LessonsContainer';
import ArticlesContainer from '../container/ArticlesContainer';
import RequestFriendContainer from '../container/RequestFriendContainer';

// container

import ChoseLevelAiContainer from '../container/ChoseLevelAiContainer';
import PlayWithAiContainer from '../container/PlayWithAiContainer';

export default class Home extends Component {
    render() {
        return <div className='row home'>
            <div className='col-2 nav-home'>
                <Nav />
            </div>
            <div className='col-10'>
                <Switch>
                    <Route path="/playwithhuman">
                        <PlayWithHuman />
                    </Route>
                    <Route path="/playwithai">
                        <ChoseLevelAiContainer />
                    </Route>
                    <Route path="/gamewithai">
                        <PlayWithAiContainer />
                    </Route>
                    <Route path="/articles">
                        <ArticlesContainer />
                    </Route>
                    <Route path="/lesson">
                        <LessonsContainer />
                    </Route>
                    <Route path="/profile">
                        <Profile />
                    </Route>
                    <Route path="/history">
                        <HistoryContainer />
                    </Route>
                    <Route path="/users">
                        <UserContainer />
                    </Route>
                    <Route path="/friends">
                        <FriendContainer />
                    </Route>
                    <Route path="/requests">
                        <RequestFriendContainer />
                    </Route>
                    <Route path="/blog">
                        <BlogContainer/>
                    </Route>
                    <Route path="/">
                        <HomePage />
                    </Route>
                </Switch>
            </div>
        </div>
    }
}