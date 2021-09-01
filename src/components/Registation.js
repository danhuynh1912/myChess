import React, { Component } from 'react';
import '../static/Login.css';

import axios from 'axios';

export default class Registation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errorMess: '',
            avt: '',
            checkRegistration: false,
        }
        this.email = React.createRef();
        this.password = React.createRef();
        this.fullName = React.createRef();

    }

    componentDidMount() {
        this.props.fetchUsers();
    }

    register = async () => {
        const {users} = this.props;
        const {avt} = this.state;
        const userExisted = users.find(x => x.email === this.email.current.value);
        debugger;
        if(!userExisted){
            if(this.password.current.value === "" || this.fullName.current.value === "" || this.email.current.value === "" || avt === ""){
                alert("Vui lòng điền đẩy đủ thông tin !")
                debugger;
            } else {
                await axios.post('/api/create-player', {password: this.password.current.value, name: this.fullName.current.value, point: '0', email: this.email.current.value, img: avt});
                this.setState({
                    checkRegistration: !this.state.checkRegistration,
                })
                debugger;
            }
        } else {
            debugger;
            alert("Email already exists");
        }
    }

    chooAvt = (avt) => {
        debugger;
        const img1 = "https://scontent.fhan5-4.fna.fbcdn.net/v/t1.15752-9/239994221_1022719505149104_804675937965311139_n.png?_nc_cat=104&ccb=1-5&_nc_sid=ae9488&_nc_ohc=-WiZdQTjdcwAX9H-CEA&_nc_ht=scontent.fhan5-4.fna&oh=5bf22e236bb082c29c98a55c1f51031a&oe=6151A0D1";
        const img2 = "https://scontent.fhan5-4.fna.fbcdn.net/v/t1.15752-9/240110693_940926196637774_8006876956981199064_n.png?_nc_cat=104&ccb=1-5&_nc_sid=ae9488&_nc_ohc=DyGlmBZ2cYUAX_q07hk&_nc_oc=AQkYNY_oo7LeOXB1VfDe2YeOTJ-9cCgQQ0L5e7uFQkssKFb7RWguGGtSE5FCgbik3lM&_nc_ht=scontent.fhan5-4.fna&oh=fbf5dbdb58cc92a1c55c194f57016923&oe=615135CD";
        const img3 = "https://scontent.fdad3-1.fna.fbcdn.net/v/t1.15752-9/240131038_1199165703916500_3301871190143405340_n.png?_nc_cat=103&ccb=1-5&_nc_sid=ae9488&_nc_ohc=saI9-AGy5lIAX9fgZsd&_nc_ht=scontent.fdad3-1.fna&oh=7db1bac95b65b83e4a2a9a3c9908b0be&oe=6151B85B";
        const img4 = "https://scontent.fhan5-4.fna.fbcdn.net/v/t1.15752-9/238405878_928609134677803_7194962119232415794_n.png?_nc_cat=107&ccb=1-5&_nc_sid=ae9488&_nc_ohc=nnKc7JDCdbcAX91RovF&_nc_ht=scontent.fhan5-4.fna&oh=18b5ccdbb65e0e6f3412de416d5a5092&oe=6151BAD1";
        const img5 = "https://scontent.fhan5-4.fna.fbcdn.net/v/t1.15752-9/238002020_369050568183731_3529397907655343901_n.png?_nc_cat=107&ccb=1-5&_nc_sid=ae9488&_nc_ohc=Qct9nvnJ7i4AX-MrDff&_nc_ht=scontent.fhan5-4.fna&oh=4a4965bb80d350ae881bfc1d59eb2add&oe=6154331A";
        switch(avt){
            case 0: {
                return (
                    this.setState({avt: img1})
                )
            }
            case 1: {
                return (
                    this.setState({avt: img2})
                )
            }
            case 2: {
                return (
                    this.setState({avt: img3})
                )
            }
            case 3: {
                return (
                    this.setState({avt: img4})
                )
            }
            case 4: {
                return (
                    this.setState({avt: img5})
                )
            }
            default: return (
                this.setState({avt: ''})
            );
        }
    }

    render() {
        const img1 = "https://scontent.fhan5-4.fna.fbcdn.net/v/t1.15752-9/239994221_1022719505149104_804675937965311139_n.png?_nc_cat=104&ccb=1-5&_nc_sid=ae9488&_nc_ohc=-WiZdQTjdcwAX9H-CEA&_nc_ht=scontent.fhan5-4.fna&oh=5bf22e236bb082c29c98a55c1f51031a&oe=6151A0D1";
        const img2 = "https://scontent.fhan5-4.fna.fbcdn.net/v/t1.15752-9/240110693_940926196637774_8006876956981199064_n.png?_nc_cat=104&ccb=1-5&_nc_sid=ae9488&_nc_ohc=DyGlmBZ2cYUAX_q07hk&_nc_oc=AQkYNY_oo7LeOXB1VfDe2YeOTJ-9cCgQQ0L5e7uFQkssKFb7RWguGGtSE5FCgbik3lM&_nc_ht=scontent.fhan5-4.fna&oh=fbf5dbdb58cc92a1c55c194f57016923&oe=615135CD";
        const img3 = "https://scontent.fdad3-1.fna.fbcdn.net/v/t1.15752-9/240131038_1199165703916500_3301871190143405340_n.png?_nc_cat=103&ccb=1-5&_nc_sid=ae9488&_nc_ohc=saI9-AGy5lIAX9fgZsd&_nc_ht=scontent.fdad3-1.fna&oh=7db1bac95b65b83e4a2a9a3c9908b0be&oe=6151B85B";
        const img4 = "https://scontent.fhan5-4.fna.fbcdn.net/v/t1.15752-9/238405878_928609134677803_7194962119232415794_n.png?_nc_cat=107&ccb=1-5&_nc_sid=ae9488&_nc_ohc=nnKc7JDCdbcAX91RovF&_nc_ht=scontent.fhan5-4.fna&oh=18b5ccdbb65e0e6f3412de416d5a5092&oe=6151BAD1";
        const img5 = "https://scontent.fhan5-4.fna.fbcdn.net/v/t1.15752-9/238002020_369050568183731_3529397907655343901_n.png?_nc_cat=107&ccb=1-5&_nc_sid=ae9488&_nc_ohc=Qct9nvnJ7i4AX-MrDff&_nc_ht=scontent.fhan5-4.fna&oh=4a4965bb80d350ae881bfc1d59eb2add&oe=6154331A";
        const arrImg = [img1, img2, img3, img4, img5];
        const {checkRegistration} = this.state;
        debugger;
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
                            <div>Choose Avatar</div>
                            <div class="col-sm-6">
                            <div class="card h-100">
                                <div class="card-body row">
                                    <h5 class="fw-600">Choose Avatar</h5>
                                    <hr class="style-1 mb-4" />
                                    {arrImg.map((item, index) => <label class="card-radio-btn col-6" >
                                        <input type="radio" name="demo" class="card-input-element d-none" value={item} />
                                        <button onClick={() => this.chooAvt(index)}><img style={{width: 50, height: 50, margin: 10}} src={item} alt="#" /></button>
                                        <div class="card card-body timecount">
                                            <button onClick={() => this.chooAvt(index)}><img style={{width: 50, height: 50, margin: 10}} src={item} alt="#" /></button>
                                        </div>
                                    </label>) }
                                </div>
                            </div>
                        </div>
                            <a onClick={this.register} href={checkRegistration === true ? "/login" : "/register"}>
                                <button className="regis-button">Registation</button>
                            </a>
                           
                        </div>
                    </div>
                </div>
                <div className="col-6 login-img"></div>
            </div>
        </div>
    }
}