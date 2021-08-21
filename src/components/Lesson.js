import React, { Component } from 'react';

import '../static/Lesson.css'

import ContactUs from './ContactUs';
import FriendsListHome from './FriendsListHome';

const info = "This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc."

export default class Lesson extends Component {

    
    constructor() {
        super();
        this.state = {
            isShowing: false,
            levels: [
                { imgLink: 'https://source.unsplash.com/300x225/?chess', level: 'New to Chess', info: info, show: false },
                { imgLink: 'https://source.unsplash.com/300x225/?chess', level: 'Beginner', info: info, show: false },
                { imgLink: 'https://source.unsplash.com/300x225/?chess', level: 'Intermediate', info: info, show: false },
                { imgLink: 'https://source.unsplash.com/300x225/?chess', level: 'Advanced', info: info, show: false },
            ]
        }
    }

    changeAllToUnshow = (itemShowing) => {
        const { levels } = this.state;
        levels.forEach(item => {
            if( item.show && item !== itemShowing) {
                item.show = false
            }
        })
    }

    showInfomation = (index) => {
        const { levels, showing } = this.state;
        let _showing = showing;
        _showing = true;
        if(!levels[index].show) {
            this.changeAllToUnshow(levels[index].show);
        }
        else {
            _showing = false
        }
        this.setState({
            showing: _showing,
            levels: [
                ...levels.slice(0, index),
                { ...levels[index], show: !levels[index].show },
                ...levels.slice(index + 1)
            ]
        })
    }

    render() {
        const { levels, showing } = this.state;
        return <div className='lesson row'>
            <div className='col-8'>
                <div class={showing? "cards showing row":"cards row"}>

                    { levels.length > 0 && levels.map((item, index) => <div className='col-6'>
                        <div class={item.show? "card show":"card"}>
                            <div class="card__image-holder">
                                <img class="card__image" src={item.imgLink} alt="wave" />
                            </div>
                            <div class="card-title">
                                <a href="#m" class="toggle-info btn" onClick={() => this.showInfomation(index)} >
                                    <span class="left"></span>
                                    <span class="right"></span>
                                </a>
                                <h2>
                                    {item.level}
                                    <small>Image from unsplash.com</small>
                                </h2>
                            </div>
                            <div class="card-flap flap1">
                                <div class="card-description">
                                    {item.info}
                                </div>
                                <div class="card-flap flap2">
                                    <div class="card-actions">
                                        <a href="#m" class="btn">Learn now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>) }
                </div>
            </div>
            <div className='col-4'>
                <div className='article-rightcontent'>
                    <FriendsListHome />
                    <ContactUs />
                </div>
            </div>
        </div>
    }
}