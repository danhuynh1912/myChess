import React, { Component } from 'react';
import BackdropFilter from 'react-backdrop-filter';

import MainOption from './MainOption';
import HistoryHome from './HistoryHome';
import ContactUs from './ContactUs';

export default class HomePage extends Component {
    render() {
        return <div className=''>
            <div className='img-intro'>
                <BackdropFilter className='intro-title'  filter={"blur(10px)"}>
                    <h1>The Chess</h1>
                    <p>Every chess master was once a beginner.</p>
                    <button className='intro-button'>Play now</button>
                </BackdropFilter>
            </div>
            <div className='row'>
                <div className='col-8'>
                    <MainOption />
                    <HistoryHome />
                </div>
                <div className='col-4'>
                    <ContactUs />
                </div>
            </div>
        </div>
    }
}