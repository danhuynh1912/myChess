import React, { Component } from 'react';
import '../static/Login.css';
import logo from '../static/images/logo.png'

import ContactUs from './ContactUs';
import FriendsListHome from './FriendsListHome';

import {
    Link
} from "react-router-dom";
import facebook from "../static/images/facebook.svg";
import google from "../static/images/google.png";

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
                            <b>Account:</b>
                            <input type="text" placeholder="Username or your email" />
                            <b>Password:</b>
                            <input type="password" placeholder="your password" />
                            <div><input type="checkbox"/> <p>Remember</p><a style={{marginLeft: 60}} href="/" alt="">Forgot password ?</a> </div>
                            <Link to="/">
                                <button >Login</button>
                            </Link>
                            <p>----------- or connect with -----------</p>
                            <ul className='social'>
                                <a href="#a"><img src={facebook} alt=""/><p>Facebook</p></a>
                                <a href="#a"><img src={google} alt=""/><p>Google</p></a>
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
