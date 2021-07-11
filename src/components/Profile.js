import React, { Component } from 'react';
import '../static/Profile.css';
import avt1 from '../static/images/avt1.jpeg'

import ContactUs from './ContactUs';
import FriendsListHome from './FriendsListHome';

import {
    Link
} from "react-router-dom";

export default class Profile extends Component {
    render() {
        const { aiGames } = this.props;
        return <div className='aiplay'>
            <div className='row'>
                <div className='col-8'>
                    <div className="avatar">
                        <img src={avt1} />
                        <div className="avatar-info">
                            <div className="name-info">
                                <h4>Peter Parker</h4>
                                <p>danhuynh1912@gmail.com</p>
                            </div>
                            <div className="score">
                                <h3>1429</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='article-rightcontent'>
                        <FriendsListHome />
                        <ContactUs />
                    </div>
                </div>
            </div>
        </div>
    }
}