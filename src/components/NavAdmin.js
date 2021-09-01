import React, { Component } from 'react';

import '../static/Nav.css';

import lessonHome from '../static/images/lessonHome.svg';
import article from '../static/images/article.svg';
import logout from '../static/images/logout.svg';
import lessonHomeActive from '../static/images/lessonHomeActive.svg';
import articleActive from '../static/images/articleActive.svg';
import users from '../static/images/users.svg';
import usersActive from '../static/images/usersActive.svg';

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
        localStorage.setItem("list", JSON.stringify({playerID: -1}));
    }

    render() {
        const pathname = window.location.pathname;
        console.log(pathname);
        return <div className='navigation'>
            <div className='logo'>
                <h2>Admin</h2>
            </div>
            <nav>
                <p className='menu-title'>Menu</p>
                <ul>
                <li className={pathname === "/admin"? "nav-active":""} onClick={() => this.activePage(pathname)}>
                        <Link to="/admin">
                            <img src={pathname === "/admin"? lessonHomeActive:lessonHome} alt="" />
                            <span>Admin</span>
                        </Link>
                    </li>
                    <li className={pathname === "/lesson-admin"? "nav-active":""} onClick={() => this.activePage(pathname)}>
                        <Link to="/lesson-admin">
                            <img src={pathname === "/lesson-admin"? lessonHomeActive:lessonHome} alt="" />
                            <span>Lesson</span>
                        </Link>
                    </li>
                    <li className={pathname === "/article-admin"? "nav-active":""} onClick={() => this.activePage(pathname)}>
                        <Link to="/article-admin">
                            <img src={pathname === "/article-admin"? articleActive:article} alt="" />
                            <span>Article</span>
                        </Link>
                    </li>
                    <li className={pathname === "/account-admin"? "nav-active":""} onClick={() => this.activePage(pathname)}>
                        <Link to="/account-admin">
                            <img src={pathname === "/account-admin"? usersActive:users} alt="" />
                            <span>Account</span>
                        </Link>
                    </li>
                </ul>
            </nav>
            <nav>
                <p className='menu-title account-menu'>Account</p>
                <ul>
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