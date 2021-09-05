import React, { Component, useEffect } from 'react';
import '../static/Profile.css';

import ContactUs from './ContactUs';
import FriendsListHome from './FriendsListHome';

import axios from 'axios';

export default class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            edit: true,
        }
        this.password = React.createRef();
        this.fullName = React.createRef();
    }
    editProfile = () => {
        this.setState({
            edit: !this.state.edit,
        })
        const user = JSON.parse(localStorage.getItem("list"));
        if(!this.state.edit){
            debugger;
            const pw = this.password.current.value === "" ? user.password : this.password.current.value;
            if(this.fullName.current.value !== ""){
                user.name = this.fullName.current.value;
                axios.put('/api/edit-player', {
                    password: pw, 
                    name: this.fullName.current.value, 
                    point: user.point, 
                    email:user.email, 
                    playerID: user.playerID})
            }
            user.password = this.password.current.value;
            localStorage.setItem("list", JSON.stringify(user));
        }
    }

    render() {
        const m = JSON.parse(localStorage.getItem("list"));
        return <div className='aiplay'>
            <div className='row'>
                <div className='col-8'>
                    <div className="avatar">
                        <img src={m.img} alt=""/>
                        <div className="avatar-info">
                            <div className="name-info">
                                <h4>{m.name}</h4>
                                <p>{m.email}</p>
                            </div>
                        </div>
                        {this.state.edit ? (
                            <button style={{marginTop: 300, width: 200}} className='intro-button' onClick={this.editProfile}>Edit Profile</button>
                        ) : (
                            <div style={{marginTop: 300, display: 'block'}}>
                                <div className="update-pro">
                                    <p>Password:</p>
                                    <input type="password" placeholder="your password" ref={this.password}/>
                                    <p>Confirm password</p>
                                    <input type="password" placeholder="your password" />
                                    <p>Name</p>
                                    <input type="text" placeholder="your name" ref={this.fullName} />
                                </div>
                                <button style={{marginTop: 10, width: 200}} className='intro-button' onClick={this.editProfile}>Done</button>
                            </div>
                        )}
                    </div>
                </div>
                <div className='col-4'>
                    <div className='article-rightcontent'>
                        <FriendsListHome />
                        <ContactUs />
                    </div>
                </div>
            </div>
        </div>
    }
}