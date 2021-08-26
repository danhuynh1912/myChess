import React, { Component } from 'react';
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';

import '../static/Lesson.css'
import '../static/Friends.css'

import ContactUs from './ContactUs';
import FriendsListHome from './FriendsListHome';

import friend1 from '../static/images/friend1.jpeg';
import friend2 from '../static/images/friend2.jpeg';
import optionfriend from '../static/images/optionfriend.svg';

const info = "This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc."

export default class Lesson extends Component {
    constructor() {
        super();
        this.state = {
            isShowing: false,
            friends: [
                { number: '01', name: 'Loading ...', id: 'HoangAnh', img: 'https://st.quantrimang.com/photos/image/2017/04/08/anh-dai-dien-FB-200.jpg', email: "loading..." },
                { number: '02', name: 'Loading ...', id: 'NgocDung', img: 'https://st.quantrimang.com/photos/image/2017/04/08/anh-dai-dien-FB-200.jpg', email: "Loading..." },
            ]
        }
    }

    componentDidMount() {
        this.props.fetchFriend();
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.friends !== this.props.friends) {
            this.setState({friends: this.props.friends});
        }
    }

    render() {
        const { friends } = this.state;
        debugger;
        return <div className='lesson row'>
            <div className='col-8'>
                <div class="friend-avt row">
                    {friends.length > 0 ? friends.map(item => <div className="col-6">
                        <div className='yourfriends friend-info'>
                            <img className="friend-avtimg" src={item.img} alt="" />
                            <div className='name-id'>
                                <p className='friend-name'>{item.name}</p>
                                <span className='friend-id'>{item.email}</span>
                            </div>
                            <Button id={item.id} type="button">
                                <img src={optionfriend} />
                            </Button>
                            <UncontrolledPopover trigger="legacy" placement="bottom" target={item.id}>
                                <PopoverBody>
                                    <button className="option-button unfriend">Unfriend</button>
                                    <button className="option-button seeprof">See profile</button>
                                </PopoverBody>
                            </UncontrolledPopover>
                        </div>
                    </div>) : <div>Không có bạn</div>}
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