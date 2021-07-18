import React, { Component } from 'react';

import '../static/Nav.css';

import homeHome from '../static/images/homeHome.svg';
import humanHome from '../static/images/humanHome.svg';
import aiHome from '../static/images/aiHome.svg';
import seehistory from '../static/images/seehistory.svg';
import logout from '../static/images/logout.svg';

import {
    Link
} from "react-router-dom";

export default class Nav extends Component {
    render() {
        return <div className='navigation'>
            <div className='logo'>
                <h2>ChessApp</h2>
            </div>
            <nav>
                <p className='menu-title'>Menu</p>
                <ul>
                    <li>
                        <Link to="/">
                            <img src={homeHome} alt="" />
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/playwithai">
                            <img src={humanHome} alt=""/>
                            <span>Play with human</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/playwithai">
                            <img src={aiHome} alt="" />
                            <span>Play with AI</span>
                        </Link>
                    </li>
                </ul>
            </nav>
            <nav>
                <p className='menu-title account-menu'>Account</p>
                <ul>
                    <li>
                        <Link to="/profile">
                            <img src={humanHome} alt="" />
                            <span>Profile</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <img src={seehistory} alt="" />
                            <span>History</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/playwithai">
                            <img src={logout} alt=""/>
                            <span>Sign out</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    }
}