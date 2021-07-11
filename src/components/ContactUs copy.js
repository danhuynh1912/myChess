import React, { Component } from 'react';

import facebook from '../static/images/facebook.svg';
import instagram from '../static/images/instagram.svg';
import github from '../static/images/github.svg';
import twitter from '../static/images/twitter.svg';

export default class ContactUs extends Component {

    render() {
        return <div className='contact'>
            <h5>Contact</h5>
            <div className='social'>
                <a href="#a"><img src={facebook} alt=""/></a>
                <a href='#a'><img src={instagram} alt=""/></a>
                <a href='#a'><img src={github} alt=""/></a>
                <a href='#a'><img src={twitter} alt=""/></a>
            </div>
                
        </div>
    }
}