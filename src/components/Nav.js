import React, { Component } from 'react';

import '../static/Nav.css';

import homeHome from '../static/images/homeHome.svg';
import homeActive from '../static/images/homeActive.svg';
import humanHome from '../static/images/humanHome.svg';
import humanHomeActive from '../static/images/humanHomeActive.svg';
import aiHome from '../static/images/aiHome.svg';
import aiHomeActive from '../static/images/aiHomeActive.svg';
import lessonHome from '../static/images/lessonHome.svg';
import article from '../static/images/article.svg';
import seehistory from '../static/images/seehistory.svg';
import logout from '../static/images/logout.svg';
import lessonHomeActive from '../static/images/lessonHomeActive.svg';
import articleActive from '../static/images/articleActive.svg';
import seehistoryActive from '../static/images/seehistoryActive.svg';
import friends from '../static/images/friends.svg';
import friendsActive from '../static/images/friendsActive.svg';
import users from '../static/images/users.svg';
import usersActive from '../static/images/usersActive.svg';
import blog from '../static/images/blog.svg';
import requests from '../static/images/requests.svg';
import requestsActive from '../static/images/requestsActive.svg';

import {
    Link
} from "react-router-dom";

export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: ""
        }
    }

    activePage(value){
        this.setState({
            currentPage: value
        })
    }

    clearStorage = () => {
        localStorage.removeItem("list");
    }

    render() {
        debugger;
        const pathname = window.location.pathname;
        console.log(pathname);
        return <div className='navigation'>
            <div className='logo'>
                <h2>ChessApp</h2>
            </div>
            <nav>
                <p className='menu-title'>Menu</p>
                <ul>
                    <li className={pathname === "/"? "nav-active":""} onClick={() => this.activePage(pathname)}>
                        <Link to="/">
                            <img src={pathname === "/"? homeActive:homeHome} alt="" />
                            <span>Home</span>
                        </Link>
                    </li>
                    <li className={pathname === "/playwithai"? "nav-active":""} onClick={() => this.activePage(pathname)}>
                        <Link to="/playwithai">
                            <img src={pathname === "/playwithai"? aiHomeActive:aiHome} alt="" />
                            <span>Play with AI</span>
                        </Link>
                    </li>
                    <li className={pathname === "/blog"? "nav-active":""} onClick={() => this.activePage(pathname)}>
                        <Link to="/blog">
                            <img src={pathname === "/blog"? blog:blog} alt="" />
                            <span>Blog</span>
                        </Link>
                    </li>
                    <li className={pathname === "/lesson"? "nav-active":""} onClick={() => this.activePage(pathname)}>
                        <Link to="/lesson">
                            <img src={pathname === "/lesson"? lessonHomeActive:lessonHome} alt="" />
                            <span>Lesson</span>
                        </Link>
                    </li>
                    <li className={pathname === "/articles"? "nav-active":""} onClick={() => this.activePage(pathname)}>
                        <Link to="/articles">
                            <img src={pathname === "/articles"? articleActive:article} alt="" />
                            <span>Article</span>
                        </Link>
                    </li>
                    <li className={pathname === "/friends"? "nav-active":""} onClick={() => this.activePage(pathname)}>
                        <Link to="/friends">
                            <img src={pathname === "/friends"? friendsActive:friends} alt="" />
                            <span>Friends</span>
                        </Link>
                    </li>
                    <li className={pathname === "/users"? "nav-active":""} onClick={() => this.activePage(pathname)}>
                        <Link to="/users">
                            <img src={pathname === "/users"? usersActive:users} alt="" />
                            <span>Users</span>
                        </Link>
                    </li>
                    <li className={pathname === "/requests"? "nav-active":""} onClick={() => this.activePage(pathname)}>
                        <Link to="/requests">
                            <img src={pathname === "/requests"? requestsActive:requests} alt="" />
                            <span>Friend requests</span>
                        </Link>
                    </li>
                </ul>
            </nav>
            <nav>
                <p className='menu-title account-menu'>Account</p>
                <ul>
                    <li className={pathname === "/profile"? "nav-active":""} onClick={() => this.activePage(pathname)}>
                        <Link to="/profile">
                            <img src={pathname === "/profile"? humanHomeActive:humanHome} alt="" />
                            <span>Profile</span>
                        </Link>
                    </li>
                    <li className={pathname === "/history"? "nav-active":""} onClick={() => this.activePage(pathname)}>
                        <Link to="/history">
                            <img src={pathname === "/history"? seehistoryActive:seehistory} alt="" />
                            <span>History</span>
                        </Link>
                    </li>
                    <li>
                        <Link onClick={this.clearStorage} to="/login">
                            <img src={logout} alt=""/>
                            <span>Sign out</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    }
}