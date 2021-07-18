import React, { Component } from 'react';
import '../static/HomeTest.css';

import {
    Switch,
    Route,
} from "react-router-dom";

import Nav from './Nav';
import HomePage from './HomePage';
import PlayWithHuman from './PlayWithHuman';
<<<<<<< HEAD
import Blog from './Blog';
=======
import Lesson from './Lesson';
>>>>>>> 078cf9d85c6c2c129f3a11e55a0b510b6e66628d

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
<<<<<<< HEAD
                    {/* <Route path="/playwithhuman">
=======
                    <Route path="/lesson">
                        <Lesson />
                    </Route>
                    <Route path="/playwithhuman">
>>>>>>> 078cf9d85c6c2c129f3a11e55a0b510b6e66628d
                        <PlayWithHuman />
                    </Route> */}
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
