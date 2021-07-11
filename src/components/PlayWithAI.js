import React, { Component } from 'react';
import '../static/PlayWithHuman.css';

import opponentAvatar from '../static/images/opponentAvatar.jpeg'
import avt from '../static/images/avt.jpg'
import seehistory from '../static/images/seehistory.svg'
import setup from '../static/images/setup.svg'
import back1 from '../static/images/back1.svg'

import Board from './Board';

import {
    Link
} from "react-router-dom";

export default class PlayWithAI extends Component {
    render() {
        const { aiGames } = this.props;
        return <div className='aiplay'>
            <div className='row'>
                <div className='col-8 center-board'>
                    <Board />
                </div>
                <div className='col-4'>
                    <div className='setup-game'>
                        <div className='time opponent-time'>
                            <img src={opponentAvatar} alt="" />
                            <div>
                                <p className='friend-name'>Computer</p>
                                <span>{aiGames.length > 0 && aiGames[0].level}</span>
                            </div>
                            <div className='time-count'>
                                <h5>{ aiGames.length > 0 && aiGames[0].time + ":00" }</h5>
                            </div>
                        </div>
                        <div className='time your-time'>
                            <img src={avt} alt="" />
                            <p className='friend-name'>You</p>
                            <div className='time-count'>
                                <h5>{ aiGames.length > 0 && aiGames[0].time + ":00" }</h5>
                            </div>
                        </div>
                        <button className='play-button'>Play</button>
                        <div className='three-option'>
                            <div className='anoption'>
                                <img src={setup} width='23px' alt="" />
                                <Link to=''>Game setup</Link>
                            </div>
                            <div className='anoption'>
                                <img src={seehistory} width='23px' alt="" />
                                <Link to=''>See history</Link>
                            </div>
                            <div className='anoption'>
                                <img src={back1} width='23px' alt="" />
                                <Link to=''>Back</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}