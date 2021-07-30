import React, { Component } from 'react';
import '../static/Blog.css';
import avt from '../static/images/avt1.jpeg';
import friend1 from '../static/images/friend1.jpeg';
import friend2 from '../static/images/friend2.jpeg';
import friend3 from '../static/images/friend3.jpeg';
import like from '../static/images/like.svg';
import comment from '../static/images/comment.svg';
import saved from '../static/images/saved.svg';

import ContactUs from './ContactUs';
import FriendsListHome from './FriendsListHome';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import {
    Link
} from "react-router-dom";

export default class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            user: {
                userId: 'danhuynh',
                avt: avt,
                userName: 'Huỳnh Ngọc Danh'
            }
        }

        this.textInputRef = React.createRef();
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    };

    addBlogFunction = () => {
        const { user } = this.state;
        let content = this.textInputRef.current.value;
        content? this.props.addBlog({ like: 0, comment: [], saved: 0, userId: user.userId, avt: user.avt, userName: user.userName, content: content }):alert('You have to say something!');
        this.toggle();
    } 

    render() {
        // const blogs = [
        //     { like: 123, comment: [1, 2, 3, 4], saved: 10, userId: 'danhuynh', avt: avt, userName: 'Huỳnh Ngọc Danh', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porta lorem mollis aliquam ut porttitor leo. Semper eget duis at tellus. Tortor id aliquet lectus proin nibh nisl condimentum.' },
        //     { like: 56, comment: [1, 2], saved: 11, userId: 'ngocanh', avt: friend2, userName: 'Nguyễn Ngọc Anh', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae suscipit tellus mauris a. Massa enim nec dui nunc mattis enim.' },
        //     { like: 10, comment: [3, 4, 10, 5, 6, 6, 4], saved: 20, userId: 'ngocdung', avt: friend1, userName: 'Nguyễn Ngọc Dũng', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        //     { like: 230, comment: [], saved: 2, userId: 'hieu123', avt: friend3, userName: 'Tống Quang Hiếu', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui sapien eget mi proin. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Tempor orci dapibus ultrices in iaculis nunc sed augue. Justo donec enim diam vulputate ut pharetra sit amet aliquam.' },
        //     { like: 2, comment: [], saved: 1, userId: 'danhuynh', avt: avt, userName: 'Huỳnh Ngọc Danh', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus eget nunc scelerisque viverra mauris in aliquam.' },
        // ]
        const { blogList, addBlog } = this.props
        const { aiGames } = this.props;
        return <div className='aiplay'>
            <div className='row'>
                <div className='col-8'>
                    <div className="blog-list post-blog">
                        <h5>Post Something</h5>
                        <div>

                            <Modal isOpen={this.state.modal} toggle={this.toggle} >
                                <ModalHeader>Create post</ModalHeader>
                                <ModalBody>
                                    <textarea ref={this.textInputRef} className="textinput" rows="4" placeholder="What's on your mind, Danh?" >
                                        
                                    </textarea>
                                </ModalBody>
                                <ModalFooter>
                                    <Button className="postbutton" color="primary" onClick={this.addBlogFunction}>Post</Button>{' '}
                                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                                </ModalFooter>
                            </Modal>
                        </div>
                        <hr />
                        <div className="post-input">
                            <img src={avt} alt="avt" />
                            <Button className="post-button" color="danger" onClick={this.toggle}>What's on your mind?</Button>
                            {/* <input type="text" placeholder="What's on your mind?" /> */}
                        </div>
                    </div>
                    {blogList.length>0 && blogList.map((item) => <div className="blog-list">
                        <div className="user-avt">
                            <img src={item.avt} alt="avt" />
                            <div className="user-name">
                                <h5>{item.userName}</h5>
                                <p>1 hour</p>
                            </div>
                        </div>
                        <div className="user-content">
                            <p>{item.content}</p>
                        </div>
                        <hr />
                        <div className="interactive row">
                            <div className="col-4 react">
                                <img src={like} alt="interactive" />
                                <p>{item.like} Likes</p>
                            </div>
                            <div className="col-4 react comment">
                                <img src={comment} alt="interactive" />
                                <p>{item.comment.length} Comments</p>
                            </div>
                            <div className="col-4 react saved">
                                <img src={saved} alt="interactive" />
                                <p>{item.saved} Saved</p>
                            </div>
                        </div>
                    </div>)}
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