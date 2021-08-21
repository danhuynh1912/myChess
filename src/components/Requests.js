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
                { number: '01', name: 'Lê Hoàng Anh', id: 'HoangAnh', img: friend2, email: "ngocanh@gmail.com" },
                { number: '02', name: 'Nguyễn Ngọc Dũng', id: 'NgocDung', img: friend1, email: "ngocdung@gmail.com" },
            ]
        }
    }

    render() {
        const { friends } = this.state;
        return <div className='lesson row'>
            <div className='col-8'>
                <div class="friend-avt row">
                    {friends.length > 0 && friends.map(item => <div className="col-3">
                        <div className="card">
                            <img className="card-img-top request-avt" src={item.img} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title res-name">{item.name}</h5>
                                <a href="#" className="btn btn-primary twobtn confirm">Confirm</a>
                                <a href="#" className="btn btn-primary twobtn delete-res">Delete</a>
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