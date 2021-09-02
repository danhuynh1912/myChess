import React, { Component } from 'react';
import { Table } from 'reactstrap';


import removeAdmin from '../static/images/removeAdmin.svg';

import '../static/History.css';

import axios from 'axios';

export default class LessonAdmin extends Component {
    constructor(props) {
        super();
        this.state = {
            modalAdd: false,
            modalUpdate: false,
            users: [],
        }
    }

    toggleAdd = () => {
        this.setState({
            modalAdd: !this.state.modalAdd
        })
    };

    toggleUpdate = () => {
        this.setState({
            modalUpdate: !this.state.modalUpdate
        })
    };

    componentDidMount() {
        this.props.fetchUsers();
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.users !== this.props.users) {
            this.setState({
                users: this.props.users,
            })
        }
    }

    deleteAccount = (playerID) => {
        axios.delete("/api/delete-player", {data: {playerID: playerID}})
        const {users} = this.state;
        const indexremove = users.findIndex(item => item.playerID === playerID)
        users.splice(indexremove, 1);
        this.setState({
            users,
        })
    }


    render() {
        const games = [
            { level: 'Level 1', result: 'win', moves: '26', date: 'Jun 29, 2021' },
            { level: 'Level 3', result: 'lose', moves: '30', date: 'Jun 29, 2021' },
            { level: 'Level 3', result: 'win', moves: '15', date: 'Jun 29, 2021' },
            { level: 'Level 2', result: 'win', moves: '40', date: 'Jun 12, 2021' },
        ]
        const {users} = this.state;
        const userList = users.filter(item => item.point === 0);
        return <div className='lesson row'>
            <div className='col-8'>
                <div className="game-list">
                    <Table responsive className='table-history history-page'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userList.length > 0 && userList.map((item, index) => <tr>
                                <td></td>
                                <td key={index}>{item.email}</td>
                                <td key={index}>{item.password}</td>
                                <td key={index}>{item.name}</td>
                                <td key={index} className="action-admin">
                                    <img alt="" src={removeAdmin} onClick={() => this.deleteAccount(item.playerID)} />
                                </td>
                            </tr>)}
                            
                        </tbody>
                    </Table>
                </div>
            </div>


        </div>
    }
}