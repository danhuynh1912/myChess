import React, { Component } from 'react';
import { Table } from 'reactstrap';
import axios from 'axios';

export default class HistoryHome extends Component {

    async componentDidMount() {
        const history = await axios.get(`/api/get-all-aigame`);
    }

    render() {
        const games = [
            { opponent: 'danhuynh', result: 'win', moves: '26', date: 'Jun 29, 2021' },
            { opponent: 'tuananh297', result: 'lose', moves: '30', date: 'Jun 29, 2021' },
            { opponent: 'doubled2k', result: 'win', moves: '15', date: 'Jun 29, 2021' },
            { opponent: 'danhuynh', result: 'win', moves: '40', date: 'Jun 12, 2021' },
        ]
        return <div className='history-home'>
            <h5>Game history</h5>
            <Table responsive className='table-history'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Opponent</th>
                        <th>Result</th>
                        <th>Moves</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {games.length > 0 && games.map((item, index) => <tr>
                        <td>{index + 1}</td>
                        <td key={index}>{item.opponent}</td>
                        {/* <td key={index}>{item.result}</td> */}
                        <td key={index}>
                            <p className={item.result === 'win'? 'game-result win':'game-result lose'}>
                                {item.result === 'win'? 'W':'L'}
                            </p>
                        </td>
                        <td key={index}>{item.moves}</td>
                        <td key={index}>{item.date}</td>
                    </tr>)}
                </tbody>
            </Table>
        </div>
    }
}