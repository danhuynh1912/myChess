import React, { Component } from 'react';
import { Table } from 'reactstrap';

import ContactUs from './ContactUs';
import FriendsListHome from './FriendsListHome';

import {
    Link
} from "react-router-dom";

import friend1 from '../static/images/friend1.jpeg';
import friend2 from '../static/images/friend2.jpeg';

import '../static/History.css';


export default class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    
    componentDidMount() {
        this.props.fetchUsers();
        this.props.fetchArticles();
        this.props.fetchLessons();
    }
   
    render() {
        const {users, articles, lessons} = this.props;
        const usersUser = users.filter(item => item.point === 0);
        debugger;
        const friends = [
            { pass: 'danhcon', id: 'Lê Hoàng Anh', email: 'danh@gmail.com', img: friend2, point: 1200 },
            { pass: 'condanh', id: 'Nguyễn Ngọc Dũng', email: 'tranganh@gmail.com', img: friend1, point: 2399 },
        ];
        const lessons1 = [
            { title: 'title 1', link: 'win' },
            { title: 'title 3', link: 'lose' },
            { title: 'title 3', link: 'win' },
            { title: 'title 2', link: 'win' },
        ]
        return <div className='lesson row'>
            <div className='col-8'>
                <div className="row three-cards">
                    <div className="col-4">
                        <div className="cards-admin card-account">
                            <h2>{users && users.length}</h2>
                            <p>Accounts</p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="cards-admin card-lesson">
                            <h2>{lessons && lessons.length}</h2>
                            <p>Lessons</p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="cards-admin card-article">
                            <h2>{articles && articles.length}</h2>
                            <p>Articles</p>
                        </div>
                    </div>
                </div>
                <div className="game-list">
                    <h5>Account</h5>
                    <Table responsive className='table-history history-page'>
                        <thead>
                            <tr>
                                <th>Avt</th>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usersUser.length > 0 && usersUser.map((item, index) => <tr>
                                <td><img src={item.img} width="30px" /></td>
                                <td key={index}>{item.name}</td>
                                {/* <td key={index}>{item.result}</td> */}
                                <td key={index}>{item.email}</td>
                            </tr>)}
                        </tbody>
                    </Table>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="game-list">
                            <h5>Lesson</h5>
                            <Table responsive className='table-history history-page'>
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Link</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {lessons.length > 0 && lessons.map((item, index) => {
                                        if(index >= 4) {
                                            return null; 
                                        } else
                                        return (
                                            <tr>
                                            <td key={index}>{item.title}</td>
                                            {/* <td key={index}>{item.result}</td> */}
                                            <td key={index}>{item.content}</td>
                                        </tr>
                                        )
                                    } )}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="game-list">
                            <h5>Article</h5>
                            <Table responsive className='table-history history-page'>
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Link</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {articles && articles.length > 0 && articles.map((item, index) => {
                                        if(index >= 4) {
                                            return null;
                                        }
                                        return (
                                            <tr>
                                            <td key={index}>{item.title}</td>
                                            {/* <td key={index}>{item.result}</td> */}
                                            <td key={index}>{item.link}</td>
                                        </tr>
                                        )
                                    })}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    }
}