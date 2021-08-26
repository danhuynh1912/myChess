import React, { Component } from 'react';

import '../static/Lesson.css'
import '../static/Friends.css'

import ContactUs from './ContactUs';
import FriendsListHome from './FriendsListHome';

import friend1 from '../static/images/friend1.jpeg';
import friend2 from '../static/images/friend2.jpeg';

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

    render() {
        const { friends } = this.state;
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
                                <a href="#" className="btn btn-primary twobtn confirm">Confirm</a>
                                <a href="#" className="btn btn-primary twobtn delete-res">Delete</a>
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