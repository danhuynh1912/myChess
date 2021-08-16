import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";

import friend1 from '../static/images/friend1.jpeg';
import friend2 from '../static/images/friend2.jpeg';

export default class Home extends Component {
    render() {
        const friends = [
            {number: '01', id: 'Lê Hoàng Anh', name: 'Hoang Anh', img: friend2},
            {number: '02', id: 'Nguyễn Ngọc Dũng', name: 'Ngoc Dung', img: friend1},
        ];
        return <div className='friend'>
            <Link to=''>
                <h5>Friends (3)</h5>
            </Link>
            <div className='friend-avt'>
                { friends.length > 0 && friends.map(item => <div className='friend-info'>
                    <p className='friend-number'>{item.number}</p>
                    <img className="friend-avtimg" src={item.img} alt="" />
                    <div className='name-id'>
                        <p className='friend-name'>{item.name}</p>
                        <span className='friend-id'>{item.id}</span>
                    </div>
                </div>) }
            </div>
                
        </div>
    }
}