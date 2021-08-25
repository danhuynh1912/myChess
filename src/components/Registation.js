import React, { Component } from 'react';
import '../static/Login.css';

import {
    Link
} from "react-router-dom";
import axios from 'axios';

export default class Registation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errorMess: '',
        }
        this.email = React.createRef();
        this.password = React.createRef();
        this.fullName = React.createRef();  
    }

    componentDidMount() {
        this.props.fetchUsers();
    }

    register = async () => {
        const userExisted = this.props.users.find(x => x.email = this.email.current.value);
        debugger;
        if(!userExisted){
            await axios.post('/api/create-player', {password: this.password.current.value, name: this.fullName.current.value, point: '0', email: this.email.current.value});
        } else {
            alert("Email đã đăng ký tài khoản trước đó");
        }
    }

    render() {
        return <div className="login">

            <div className="row">
                <div className="col-6">
                    <div className="form-login">
                        <h1>Registration</h1>
                        <div className="form">
                            <p>Email:</p>
                            <input type="text" placeholder="your email" ref={this.email} />
                            <p>Password:</p>
                            <input type="password" placeholder="your password" ref={this.password} />
                            <p>Confirm password</p>
                            <input type="password" placeholder="your password" />
                            <p>Full Name</p>
                            <input type="text" placeholder="your name" ref={this.fullName} />
                            <Link onClick={this.register} to="/register">
                                <button className="regis-button">Registation</button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-6 login-img"></div>
                </div>
        </div>
        </div>
    }
}