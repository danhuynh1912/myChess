import React, { Component } from 'react';
import '../static/Login.css';
import avt1 from '../static/images/avt1.jpeg'

import ContactUs from './ContactUs';
import FriendsListHome from './FriendsListHome';

import {
    Link
} from "react-router-dom";

export default class Registation extends Component {
    render() {
        return <div className="login">

            <div className="row">
                <div className="col-6">
                    <div className="form-login">
                        <h1>Registration</h1>
                        <div className="form">
                            <p>Email:</p>
                            <input type="text" placeholder="your email" />
                            <p>Password:</p>
                            <input type="password" placeholder="your password" />
                            <p>Confirm password</p>
                            <input type="password" placeholder="your password" />
                            <p>Full Name</p>
                            <input type="text" placeholder="your name" />
                            <Link to="/login">
                                <button className="regis-button">Registation</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}