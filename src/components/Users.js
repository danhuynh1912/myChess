import React, { Component } from 'react';

import '../static/Lesson.css'
import '../static/Friends.css'

import ContactUs from './ContactUs';
import FriendsListHome from './FriendsListHome';


export default class Lesson extends Component {
    constructor() {
        super();
        this.state = {
            isShowing: false,
            user: JSON.parse(localStorage.getItem('list')),
        }
    }

    componentDidMount() {
        this.props.fetchUsers();
        this.props.fetchFriend();
        this.props.fetchListRequestFriends();
        this.props.fecthListReceivedFriend();
        debugger;
    }

    onAddFriend = (requestID, item) => {
        debugger;
        this.props.senRequestFriend(requestID);
        this.props.addReceviedFriends(item);
        this.forceUpdate();
    }

    render() {
        const { user } = this.state;
        const { friends, users, listReceivedFriends, listRequestFriends } = this.props;
        debugger;
        let listUsers = [];
        if(users.length > 0){
            listUsers =  users.filter(item => item.email !== user.email && item.point === 0);
        }
        debugger;
        return <div className='lesson row'>
            <div className='col-8'>
                <div>Người chơi cùng</div>
                <div class="friend-avt row">
                    {listUsers.length > 0 && listUsers.map(item => {
                        if(listReceivedFriends.find(m => m.playerID === item.playerID)) {
                            return null;
                        } else
                        return (
                            <div className="col-12">
                            <div className='yourfriends friend-info'>
                            <img className="friend-avtimg" src={item.img} alt="" />
                            <div className='name-id'>
                                <p className='friend-name'>{item.name}</p>
                                <span className='friend-id'>{item.email}</span>
                            </div>
                            <div className="list-button" style={{display: 'flex'}}>
                                {listRequestFriends.find(m => m.playerID === item.playerID) && <div style={{color: '#5b78e2', marginTop: 10}}>Chờ bạn xác nhận</div>}
                                {
                                    !listRequestFriends.find(m => m.playerID === item.playerID) && 
                                    (
                                        friends.find(m => m.playerID === item.playerID) ? 
                                        <div style={{color: '#5b78e2', marginTop: 10}}>Đã là bạn bè</div> : 
                                        <button onClick={() => this.onAddFriend(item.playerID, item)}>Add</button>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                        )
                    } )}
                </div>
                <div>Danh sách lời mời kết bạn</div>
                <div class="friend-avt row">
                    {listReceivedFriends.length > 0 && listReceivedFriends.map(item => <div className="col-12">
                        <div className='yourfriends friend-info'>
                            <img className="friend-avtimg" src={item.img} alt="" />
                            <div className='name-id'>
                                <p className='friend-name'>{item.name}</p>
                                <span className='friend-id'>{item.email}</span>
                            </div>
                            <div className="list-button" style={{display: 'flex'}}>
                                <div style={{color: '#5b78e2', marginTop: 10}}>Đã gửi lời mời kết bạn</div>
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