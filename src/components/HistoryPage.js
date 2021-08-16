import React, { Component } from 'react';
import { Table } from 'reactstrap';

import ContactUs from './ContactUs';
import FriendsListHome from './FriendsListHome';

import '../static/History.css';

export default class History extends Component {
    render() {
        const games = [
            { level: 'Level 1', result: 'win', moves: '26', date: 'Jun 29, 2021' },
            { level: 'Level 3', result: 'lose', moves: '30', date: 'Jun 29, 2021' },
            { level: 'Level 3', result: 'win', moves: '15', date: 'Jun 29, 2021' },
            { level: 'Level 2', result: 'win', moves: '40', date: 'Jun 12, 2021' },
        ]
        return <div className='lesson row'>
            <div className='col-8'>
                <div className="game-list">
                    <Table responsive className='table-history history-page'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Level</th>
                                <th>Result</th>
                                <th>Moves</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {games.length > 0 && games.map((item, index) => <tr>
                                <td>{index + 1}</td>
                                <td key={index}>{item.level}</td>
                                {/* <td key={index}>{item.result}</td> */}
                                <td key={index}>
                                    <p className={item.result === 'win' ? 'game-result win' : 'game-result lose'}>
                                        {item.result === 'win' ? 'W' : 'L'}
                                    </p>
                                </td>
                                <td key={index}>{item.moves}</td>
                                <td key={index}>{item.date}</td>
                            </tr>)}
                        </tbody>
                    </Table>
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