import React, { Component } from 'react';

import '../static/ChoseLevelAi.css';

import ContactUs from './ContactUs';

import {
    Link
} from "react-router-dom";

import level1 from '../static/images/level1.svg';
import level2 from '../static/images/level2.svg';
import level3 from '../static/images/level3.svg';
import choseTime from '../static/images/choseTime.svg';

export default class ChoseLevelAi extends Component {
    constructor(props) {
        super(props);
        this.game = { time: '', level: '', winner: '', date: '' };
    }

    componentDidMount() {
        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        this.game.date = `${date}-${month}-${year}`;
    }

    getTime = (time) => {
        this.game.time = time;
        console.log(this.game);
        console.log(this.props.aiGames);
    }

    getLevel = (lv) => {
        this.game.level = lv;
        console.log(this.game);
    }

    render() {
        const { addGame } = this.props;
        const levels = [
            { level: 'Level 1', img: level1, value: 'lv1', id: 'cap-opt-1', classParent: 'level-1', classChild: 'level-title-1'},
            { level: 'Level 2', img: level2, value: 'lv2', id: 'cap-opt-2', classParent: 'level-2', classChild: 'level-title-2'},
            { level: 'Level 3', img: level3, value: 'lv3', id: 'cap-opt-3', classParent: 'level-3', classChild: 'level-title-3'}
        ]
        const times = [
            { time: '10', value: 'demo1' },
            { time: '15', value: 'demo2' },
            { time: '20', value: 'demo3' },
            { time: '30', value: 'demo4' },
        ]
        return <div className='lesson row'>
            <div className='col-8'>

                <div class="row">
                    <div class="col-sm-6">
                        <div class="card h-100">
                            <div class="card-body">
                                <h5 class="fw-600">Level</h5>
                                <hr class="style-1 mb-4" />
                                { levels.length > 0 && levels.map((item, index) => <div className={"level " + item.classParent}>
                                    <img src={item.img} />
                                    <div className={"level-title " + item.classChild}>
                                        <p>{item.level}</p>
                                    </div>
                                    <input className="inp-cbx" id={item.id} type="radio" value={item.value} name='levelai' onClick={() => this.getLevel(item.level)} />
                                    <label className="cbx" for={item.id}><span>
                                        <svg width="12px" height="9px" viewbox="0 0 12 9">
                                            <polyline points="1 5 4 8 11 1"></polyline>
                                        </svg></span>
                                    </label>
                                </div>) }
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card h-100">
                            <div class="card-body row">
                                <h5 class="fw-600">Time</h5>
                                <hr class="style-1 mb-4" />
                                { times.length > 0 && times.map((item, index) => <label class="card-radio-btn col-6" >
                                    <input type="radio" name="demo" class="card-input-element d-none" value={item.value} />
                                    <div class="card card-body timecount"  onClick={() => this.getTime(item.time)}>
                                        <div class="content_head">{item.time}</div>
                                        <div class="content_sub">minute</div>
                                        <img src={choseTime} />
                                    </div>
                                </label>) }
                                <div className="col-12">
                                    <Link to='/gamewithai'>
                                        <button className="letsplay" onClick={() => addGame(this.game)}>Play</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='col-4'>
                <div className='article-rightcontent'>
                    <ContactUs />
                </div>
            </div>
        </div>
    }
}