import React, { Component } from 'react';
import '../static/Login.css';
import logo from '../static/images/logo.png'

import ContactUs from './ContactUs';
import FriendsListHome from './FriendsListHome';

import {
    Link
} from "react-router-dom";
import facebook from "../static/images/facebook1.svg";

export default class Login extends Component {
    render() {
        return <div className="login">

            <div className="row">
                <div className="col-6">
                    <div className="form-login">
                        <div style={{display: 'flex'}}>
                            <img src={logo} alt="" style={{width: 40, height: 40, marginTop: 5}}/>
                            <h1>Login</h1>
                        </div>
                        <div className="form">
                            <div className='social'>
                                <a href="#a">
                                    <button>
                                        <img src={facebook} alt="" /><p>Sign in with Facebook</p>
                                    </button>
                                </a>
                            </div>
                            <p className="or-sign-in-email">---------- or sign in with email ----------</p>
                            <b>Account:</b>
                            <input type="text" placeholder="Username or your email" />
                            <b>Password:</b>
                            <input type="password" placeholder="your password" />
                            {/* <div><input type="checkbox"/> <p>Remember me</p></div> */}
                            <div>
                                <input className="inp-cbu" id="rememberAccount" type="checkbox" value="rememberAccount" name='levelai' />
                                <label className="cbu" for="rememberAccount"><span>
                                    <svg width="12px" height="9px" viewbox="0 0 12 9">
                                        <polyline points="1 5 4 8 11 1"></polyline>
                                    </svg></span>
                                </label>
                                <span>Remember me</span>
                            </div>
                            <Link to="/">
                                <button className="button-login">Login</button>
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
