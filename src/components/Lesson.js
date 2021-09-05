import React, { Component } from 'react';

import '../static/Lesson.css'

import ContactUs from './ContactUs';
import FriendsListHome from './FriendsListHome';

export default class Lesson extends Component {
    constructor() {
        super();
        this.state = {
            isShowing: false,
            levels: [],
        }
    }

    componentDidMount() {
        this.props.fetchLessons();
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.levels !== this.props.lessons){
            this.setState({
                levels: this.props.lessons,
            })
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
        debugger;
        return <div className='lesson row'>
            <div className='col-8'>
                <div class={showing? "cards showing row":"cards row"}>

                    { levels.length > 0 && levels.map((item, index) => <div className='col-6'>
                        <div class={item.show? "card show":"card"}>
                            <div class="card__image-holder">
                                <img class="card__image" src={item.thumbnail} alt="wave" />
                            </div>
                            <div class="card-title">
                                <a href="#m" class="toggle-info btn" onClick={() => this.showInfomation(index)} >
                                    <span class="left"></span>
                                    <span class="right"></span>
                                </a>
                                <h2>
                                    {item.title}
                                    <small>Image from unsplash.com</small>
                                </h2>
                            </div>
                            <div class="card-flap flap1">
                                <div class="card-description">
                                    {item.content}
                                </div>
                                <div class="card-flap flap2">
                                    <div class="card-actions">
                                        <a href="https://www.chess.com/lessons/playing-the-game" class="btn">Learn now</a>
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