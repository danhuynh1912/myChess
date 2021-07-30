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
    constructor(props) {
        super(props);
        this.state = {
            aiMin: 0,
            aiSec: 0,
            yourMin: 0,
            yourSec: 0
        }
        this.runTime = this.runTime.bind(this);
    }

    componentDidMount() {
        const { aiGames } = this.props;
        this.setState({
            aiMin: aiGames[0].time,
            aiSec: 0,
            yourMin: aiGames[0].time,
            yourSec: 0
        })
    }

    runTime(whiteTurn) {
        clearInterval(this.loop);
        this.loop = setInterval(() => {
            if (whiteTurn) {
                this.setState({
                    aiMin: this.state.aiSec === 0 ? this.state.aiMin - 1 : this.state.aiMin,
                    aiSec: this.state.aiSec === 0 ? 59 : this.state.aiSec - 1
                })
            }
            else {
                this.setState({
                    yourMin: this.state.yourSec === 0 ? this.state.yourMin - 1 : this.state.yourMin,
                    yourSec: this.state.yourSec === 0 ? 59 : this.state.yourSec - 1
                })
            }
        }, 1000)
    }

    render() {
        const { aiGames } = this.props;
        const { aiMin, aiSec, yourMin, yourSec } = this.state;
        return <div className='aiplay'>
            <div className='row'>
                <div className='col-8 center-board'>
                    <Board runTime={this.runTime} />
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
                                <h5>{aiGames.length > 0 && aiMin + (aiSec > 9 ? ":" : ":0") + aiSec}</h5>
                            </div>
                        </div>
                        <div className='time your-time'>
                            <img src={avt} alt="" />
                            <p className='friend-name'>You</p>
                            <div className='time-count'>
                                <h5>{aiGames.length > 0 && yourMin + (yourSec > 9 ? ":" : ":0") + yourSec}</h5>
                            </div>
                        </div>
                        <button className='play-button' onClick={this.runTime} >Play</button>
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