import React, { Component } from 'react';
import '../static/Login.css';
// import '../static/ChoseLevelAi.css';

import {
    Link
} from "react-router-dom";
import facebook from "../static/images/facebook1.svg";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: undefined,
        }
        this.email = React.createRef();
        this.password = React.createRef();  
    }
    
    componentDidMount(){
        this.props.fetchUsers();
    }

    checkLogin = () => {
        const user1 = this.props.users.find(item => item.email === this.email.current.value && item.password === this.password.current.value);
        this.setState({user: user1});
        debugger;
        if(user1){
            localStorage.setItem("list", JSON.stringify(user1));
        } else {
            alert(" Wrong username or password !")
        }
    }

    render() {
        const {user} = this.state;
        debugger;
        const checkHref = user && user.point === 1 ? "/admin" : "/"
        return <div className="login">
            <div className="row">
                <div className="col-6">
                    <div className="form-login">
                        <div style={{display: 'flex'}}>
                            <h1>Login</h1>
                        </div>
                        <div className="form">
                            <div className='social'>
                                <a href="#a">
                                    <button style={{display:'flex'}}>
                                        <img style={{width: 40  }} src={facebook} alt="" /><p>Sign in with Facebook</p>
                                    </button>
                                </a>
                            </div>
                            <p className="or-sign-in-email">---------- or sign in with email ----------</p>
                            <b>Account:</b>
                            <input type="text" placeholder="Username or your email" ref={this.email} />
                            <b>Password:</b>
                            <input type="password" placeholder="your password" ref={this.password} />
                            {/* <div><input type="checkbox"/> <p>Remember me</p></div> */}
                            <div>
                                <input className="inp-cbu" id="rememberAccount" type="checkbox" value="rememberAccount" name='levelai' />
                                <label className="cbu" for="rememberAccount"><span>
                                    <svg width="12px" height="9px" viewbox="0 0 12 9">
                                        <polyline points="1 5 4 8 11 1"></polyline>
                                    </svg></span>
                                </label>
                                <span>Remember me</span>
                            </div>
                            <a onClick={this.checkLogin} href={user !== undefined ? checkHref : "/login"}>
                                <button className="button-login">Login</button>
                            </a>
                            <p>Not registered yet? <Link to="/register">Create an Account</Link></p>
                            {user === undefined && <p>B???n ch??a nh???p t??i kho???n ho???c m???t kh???u</p> }
                        </div>
                    </div>
                </div>
                <div className="col-6 login-img"></div>
            </div>
        </div>
    }
}
