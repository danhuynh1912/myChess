import React, { Component } from 'react';
import { Table } from 'reactstrap';

import ContactUs from './ContactUs';
import FriendsListHome from './FriendsListHome';

import '../static/History.css';
import axios from 'axios';

import deleteBlog from '../static/images/delete.svg';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class History extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [],
            modal: false
        }
    }

    componentDidMount() {
        this.props.fetchHistory();
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    };

    removeHistory = (gameID) => {
        axios.delete("/api/delete-aigame", {data: {gameID: gameID}})
        const {history} = this.state;
        const indexRemove = history.findIndex(item => item.gameID === gameID);
        indexRemove !== -1 && history.splice(indexRemove, 1);
        this.setState({history: history});
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.history !== this.props.history) {
            this.setState({history: this.props.history});
        }
    }

    render() {
        const m = JSON.parse(localStorage.getItem("list"));
        const {history} = this.state;
        const historyUser = history.filter(item => item.playerID === m.playerID)
        debugger;
        return <div className='lesson row'>
            <div className='col-8'>
                <div className="game-list">
                    <Table responsive className='table-history history-page'>
                        <thead>
                            <tr>
                                <th>Number</th>
                                <th>Level</th>
                                <th>Result</th>
                                <th>Time</th>
                                <th>Date</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {historyUser.length > 0 && historyUser.map((item, index) => <tr>
                                <td>{index + 1}</td>
                                <td key={index}>{item.level}</td>
                                {/* <td key={index}>{item.result}</td> */}
                                <td key={index}>
                                    <p className={item.result === true ? 'game-result win' : 'game-result lose'}>
                                        {item.result === true ? 'W' : 'L'}
                                    </p>
                                </td>
                                <td key={index}>{item.time} minutes </td>
                                <td key={index}>{new Date(item.createdAt).toLocaleString()}</td>
                                <td>
                                    <div className="list-button">
                                        <img style={{width: 20, height: 20, borderRadius: 0, cursor: 'pointer'}} onClick={this.toggle} src={deleteBlog}/>
                                        <Modal isOpen={this.state.modal} toggle={this.toggle} >
                                            <ModalHeader>Delete history</ModalHeader>
                                            <ModalBody>
                                                <p>Bạn có chắc chắn muốn xóa trận đấu này?</p>
                                            </ModalBody>
                                            <ModalFooter>
                                                <Button className="postbutton" color="primary" onClick={() => this.removeHistory(item.gameID)}><a href="/friends" alt="#" style={{color: "white"}}>Ok</a></Button>{' '}
                                                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                                            </ModalFooter>
                                        </Modal>
                                    </div>
                                </td>
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