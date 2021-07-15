import React, { Component } from 'react';
import '../static/Login.css';
import avt1 from '../static/images/avt1.jpeg'

import ContactUs from './ContactUs';
import FriendsListHome from './FriendsListHome';

import {
    Link
} from "react-router-dom";
import facebook from "../static/images/facebook.svg";
import instagram from "../static/images/instagram.svg";
import github from "../static/images/github.svg";
import twitter from "../static/images/twitter.svg";

export default class Login extends Component {
    render() {
        return <div className="login">

            <div className="row">
                <div className="col-6">
                    <div className="form-login">
                        <h1>Login</h1>
                        <div className="form">
                            <b>Account:</b>
                            <input type="text" placeholder="your email" />
                            <b>Password:</b>
                            <input type="password" placeholder="your password" />
                            <div><input type="checkbox"/> <p>Forgot password ?</p></div>
                            <Link to="/">
                                <button >Login</button>
                            </Link>
                            <p>----------- or connect with -----------</p>
                            <ul className='social'>
                                <a href="#a"><img src={facebook} alt=""/><p>Facebook</p></a>
                                <a href='#a'><img src={instagram} alt=""/><p>Instagram</p></a>
                                <a href='#a'><img src={twitter} alt=""/><p>Apple ID</p></a>
                            </ul>
                            <p>Not registered yet? <Link to="/register">Create an Account</Link></p>
                        </div>
                    </div>
                </div>
                <div className="col-6 login-img"></div>
            </div>
        </div>
    }
}
