import React, { Component } from 'react';
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';

import '../static/Lesson.css'
import '../static/Friends.css'

import ContactUs from './ContactUs';
import FriendsListHome from './FriendsListHome';

import friend1 from '../static/images/friend1.jpeg';
import friend2 from '../static/images/friend2.jpeg';
import optionfriend from '../static/images/optionfriend.svg';
import axios from 'axios';

const info = "This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc."

export default class Lesson extends Component {
    constructor() {
        super();
        this.state = {
            isShowing: false,
            friends: [
                // { number: '01', name: 'Lê Hoàng Anh', id: 'HoangAnh', img: friend2, email: "ngocanh@gmail.com" },
                // { number: '02', name: 'Nguyễn Ngọc Dũng', id: 'NgocDung', img: friend1, email: "ngocdung@gmail.com" },
            ],
            user: JSON.parse(localStorage.getItem('list')),
        }
    }

    componentDidMount() {
        this.props.fetchUsers();
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.friends !== this.props.users && prevState.user !== this.props._user){
            this.setState({
                friends: this.props.users,
            });
        }
    }

    onAddFriend = (requestID) => {
        const {user} = this.state;
        axios.post('/api/friend-request-sent', {});
    }

    render() {
        const { friends, user } = this.state;
        let listFiends = [];
        if(friends.length > 0){
            listFiends =  friends.filter(item => item.email !== user.email);
            debugger;
        }
        debugger;
        return <div className='lesson row'>
            <div className='col-8'>
                <div class="friend-avt row">
                    {listFiends.length > 0 && listFiends.map(item => <div className="col-12">
                        <div className='yourfriends friend-info'>
                            <img className="friend-avtimg" src={item.img} alt="" />
                            <div className='name-id'>
                                <p className='friend-name'>{item.name}</p>
                                <span className='friend-id'>{item.email}</span>
                            </div>
                            <div className="list-button">
                                <button className="" onClick={this.onAddFriend(item.playerID)}>Add</button>
                                <button className="">See profile</button>
                            </div>
                        </div>
                    </div>)}
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