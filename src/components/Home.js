import React, { Component } from 'react';
import '../static/HomeTest.css';

import {
    Switch,
    Route,
} from "react-router-dom";

import Nav from './Nav';
import HomePage from './HomePage';
import PlayWithHuman from './PlayWithHuman';
import Blog from './Blog';
import Lesson from './Lesson';
import ArticlesList from './ArticlesList';

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
                <Route path="/ArticlesList">
                        <ArticlesList />
                    </Route>
                    <Route path="/lesson">
                        <Lesson />
                    </Route>
                    <Route path="/playwithhuman">
                        <PlayWithHuman />
                    </Route>
                    <Route path="/playwithai">
                        <ChoseLevelAiContainer />
                    </Route>
                    <Route path="/gamewithai">
                        <PlayWithAiContainer />
                    </Route>
                    <Route path="/blog">
                        <Blog/>
                    </Route>
                    <Route path="/">
                        <HomePage />
                    </Route>

                    
                </Switch>
            </div>
        </div>
    }
}
