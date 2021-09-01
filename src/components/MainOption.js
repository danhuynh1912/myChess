import React, { Component } from 'react';

import option1 from '../static/images/vsAi.jpg';
import option2 from '../static/images/vshuman.jpeg';
import option3 from '../static/images/history.jpg';
import option4 from '../static/images/learnChess.jpg';

import {
    Link
} from "react-router-dom";

export default class Home extends Component {
    render() {
        const mainOptions = [
            {title: 'Ai', thump: option1, route: 'playwithai'},
            {title: 'History', thump: option3, route: 'history'},
            {title: 'Lesson', thump: option4, route: 'lesson'},
        ]
        return <div className='main-option'>
            <h5>Option</h5>
            <div className='row option-main'>
                { mainOptions.length > 0 && mainOptions.map(item => <div className='col-3'>
                    <div className='an-option'>
                        <Link to={`/${item.route}`}>
                            <img src={item.thump} alt=""/>
                            <p>{item.title}</p>
                        </Link>
                    </div>
                </div> )}
            </div>
        </div>
    }
}