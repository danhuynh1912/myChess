import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";
import { connect } from 'react-redux';
import { fetchFriend } from '../redux/friend/actions';

import friend1 from '../static/images/friend1.jpeg';
import friend2 from '../static/images/friend2.jpeg';

class FriendListHome extends Component {

    componentDidMount() {
        this.props.fetchFriend();
    }

    render() {
        const {friends} = this.props;
        return <div className='friend'>
            <Link to=''>
                <h5>Friends (3)</h5>
            </Link>
            {/* <div className='friend-avt'>
                { friends.length > 0 && friends.map(item => <div className='friend-info'>
                    <img className="friend-avtimg" src={item.img} alt="" />
                    <div className='name-id'>
                        <p className='friend-name'>{item.name}</p>
                        <span className='friend-id'>{item.email}</span>
                    </div>
                </div>) }
            </div> */}
                
        </div>
    }
}

const mapStateToProps = (state) => ({
    friends:  state.listRequestFriends.friends,
})

const mapDispatchToProps = (dispatch) => ({
    fetchFriend: () => {
        dispatch(fetchFriend());
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(FriendListHome);