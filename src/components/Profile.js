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
        const m = JSON.parse(localStorage.getItem("list"));
        return <div className='aiplay'>
            <div className='row'>
                <div className='col-8'>
                    <div className="avatar">
                        <img src={m.img} />
                        <div className="avatar-info">
                            <div className="name-info">
                                <h4>{m.name}</h4>
                                <p>{m.email}</p>
                            </div>
                            <div className="score">
                                <h3>Point: {m.point}</h3>
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