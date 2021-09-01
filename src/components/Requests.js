import React, { Component } from 'react';

import '../static/Lesson.css'
import '../static/Friends.css'

import ContactUs from './ContactUs';
import FriendsListHome from './FriendsListHome';
import axios from 'axios';

export default class Requests extends Component {
    constructor() {
        super();
        this.state = {
            isShowing: false,
            friends: [
                
            ]
        }
    }

    componentDidMount() {
        this.props.fetchListRequestFriends();
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.friends !== this.props.listRequestFriends && this.props.fetchListRequestFriends.length> 0) {
            this.setState({
                friends: this.props.listRequestFriends,
            })
        }
    }

    confirmRequest = (playerID) => {
        const m = JSON.parse(localStorage.getItem("list"));
        axios.put("/api/accept-request", {requesterID: playerID, receiverID: m.playerID});
        this.props.acceptFriend(playerID);
    }

    render() {
        const m = this.props.listRequestFriends;
        debugger;
        return <div className='lesson row'>
            <div className='col-8'>
                <div class="friend-avt row">
                    {m.length > 0 ? m.map(item => <div className="col-3">
                        <div className="card">
                            <img className="card-img-top request-avt" src={item.img} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title res-name">{item.name}</h5>
                                <button onClick={() => this.confirmRequest(item.playerID)} className="btn btn-primary twobtn confirm">
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </div>) : <div style={{margin: 50, fontSize: 30}}>Không có lời mời kết bạn nào </div>}
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