import React, { Component } from 'react';
import '../static/Login.css';
import avt1 from '../static/images/avt1.jpeg'

import ContactUs from './ContactUs';
import FriendsListHome from './FriendsListHome';

import {
    Link
} from "react-router-dom";

export default class Login extends Component {
    render() {
        return <div className="login">

            <div className="row">
                <div className="col-6">
                    <div className="form-login">
                        <h1>Login</h1>
                        <div className="form">
                            <p>Email:</p>
                            <input type="text" placeholder="your email" />
                            <p>Password:</p>
                            <input type="password" placeholder="your password" />
                            <Link to="/">
                                <button >Login</button>
                            </Link>
                            <p>Not registered yet? <Link to="/register">Create an Account</Link></p>
                        </div>
                    </div>
                </div>
                <div className="col-6 login-img"></div>
            </div>
        </div>
    }
}