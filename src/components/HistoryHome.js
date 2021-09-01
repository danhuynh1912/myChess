import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchHistory } from '../redux/history/actions';

class HistoryHome extends Component {

    componentDidMount() {
        this.props.fetchHistory();
    }

    render() {
        const {history} = this.props;
        const games = [
            { opponent: 'danhuynh', result: 'win', moves: '26', date: 'Jun 29, 2021' },
            { opponent: 'tuananh297', result: 'lose', moves: '30', date: 'Jun 29, 2021' },
            { opponent: 'doubled2k', result: 'win', moves: '15', date: 'Jun 29, 2021' },
            { opponent: 'danhuynh', result: 'win', moves: '40', date: 'Jun 12, 2021' },
        ]
        return <div className='history-home'>
            <h5>History of the last 4 games</h5>
            <Table responsive className='table-history'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Level</th>
                        <th>Result</th>
                        <th>Times</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {history.length > 0 && history.map((item, index) => {
                        if(index >= history.length - 4)
                        return (
                            <tr>
                                <td></td>
                                <td key={index}>{item.level}</td>
                                {/* <td key={index}>{item.result}</td> */}
                                <td key={index}>
                                    <p className={item.result === true ? 'game-result win':'game-result lose'}>
                                        {item.result === true ? 'W':'L'}
                                    </p>
                                </td>
                                <td key={index}>{item.time} minutes</td>
                                <td key={index}>{new Date(item.createdAt).toLocaleString()}</td>
                            </tr>
                        )
                    } )}
                </tbody>
            </Table>
        </div>
    }
}

const mapStateToProps = (state) => ({
    history: state.history.history,
})

const mapDispatchToProps = (dispatch) => ({
    fetchHistory: () => {
        dispatch(fetchHistory());
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(HistoryHome);