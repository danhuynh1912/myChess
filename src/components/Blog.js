import React, { Component } from 'react';
import BackdropFilter from 'react-backdrop-filter';
import { nanoid } from 'nanoid'
import '../static/Blog.css';
import avt from '../static/images/avt1.jpeg';
import like from '../static/images/like.svg';
import likedImg from '../static/images/liked.svg';
import deleteBlog from '../static/images/delete.svg';
import saved from '../static/images/saved.svg';

import ContactUs from './ContactUs';
import FriendsListHome from './FriendsListHome';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import axios from 'axios';

export default class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            modalRemove: false,
            user: {
                userId: 'danhuynh',
                avt: avt,
                userName: 'Huỳnh Ngọc Danh'
            },
            blogList : [],
            playerList: [],
            hoverLike: {
                type: '',
                id: -1
            },
        }
        this.textInputRef = React.createRef();
    }

    componentDidMount(){
        this.props.fetchBlog();
        this.props.fetchUsers();
        this.props.fetchFriend();
        debugger;
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.blogList !== this.props.blogList){
            this.setState({
                blogList: this.props.blogList,
            })
        }
    }

    hoverToggle = (type, id) => {
        setTimeout(() => {
            this.setState({
                hoverLike: {
                    type: type,
                    id: id
                },
            })
        }, 1000)
    };

    hoverToggleOff = () => {
        this.setState({
            hoverLike: {
                type: '',
                id: -1
            },
        })
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    };

    toggleRemove = () => {
        this.setState({
            modalRemove: !this.state.modalRemove
        })
    };

    addBlogFunction = () => {
        const {blogList} = this.state;
        let content = this.textInputRef.current.value;
        this.setState({

        })
        const m = JSON.parse(localStorage.getItem("list"));
        content ? axios.post("/api/create-blog", {content: content, image: "", playerID: m.playerID}) : alert("You have to say something !");
        blogList.push({ 
            blogID: blogList.length + 1,
            playerID: m.playerID,
            content: content,
            image: null,
            createdAt: "2021-08-29T12:37:14.000Z",
            updatedAt: "2021-08-29T12:37:14.000Z",
            reactData: [],
        })
        this.toggle();
    }

    likedCount = (item) => {
        // const { liked } = this.props;
        // let count=0;
        // for(let i=0; i<liked.length; i++) {
        //     if(liked[i].blogId === item.blogId) count++;
        // }
        // return count;

    }

    disLikeBlogFunction = (blogId, youDislike) => {
        const {blogList} = this.state;
        const m = JSON.parse(localStorage.getItem("list"));
        if(!youDislike){
            debugger;
            axios.post('/api/react-blog/0', {playerID: m.playerID, blogID: blogId});
            let blog = blogList.find(item => item.blogID === blogId);
            console.log(blog);
            const removeIndex = blog.reactData.findIndex(item1 => item1.Reacts.playerID === m.playerID && item1.Reacts.blogID === blogId && item1.Reacts.like === true);
            removeIndex !== -1 && blog.reactData.splice(removeIndex, 1);
            blog.reactData.push({
                playerID: m.playerID,
                name: "Dũng",
                img: m.img,
                Reacts: {
                    playerID: m.playerID,
                    blogID: blogId,
                    like: false,
                    "createdAt": "2021-08-31T06:10:04.000Z",
                    "updatedAt": "2021-08-31T06:10:04.000Z"
                }
            })
            this.setState({
                blogList,
            })
        } else {
            axios.delete(`/api/unreact-blog?playerID=${m.playerID}&blogID=${blogId}`);
            let blog = blogList.find(item => item.blogID === blogId);
            console.log(blog);
            const removeIndex = blog.reactData.findIndex(item1 => item1.Reacts.playerID === m.playerID && item1.Reacts.blogID === blogId && item1.Reacts.like === false);
            removeIndex !== -1 && blog.reactData.splice(removeIndex, 1);
            debugger;
            this.setState({
                blogList,
            })
        }
    }

    likeBlogFunction = (blogId, youLike) => {
        const {blogList} = this.state;
        const m = JSON.parse(localStorage.getItem("list"));
        debugger;
        if(!youLike){
            axios.post('/api/react-blog/1', {playerID: m.playerID, blogID: blogId});
            let blog = blogList.find(item => item.blogID === blogId);
            console.log(blog);
            const removeIndex = blog.reactData.findIndex(item1 => item1.Reacts.playerID === m.playerID && item1.Reacts.blogID === blogId && item1.Reacts.like === false);
            removeIndex !== -1 && blog.reactData.splice(removeIndex, 1);
            blog.reactData.push({
                playerID: m.playerID,
                name: m.name,
                img: m.img,
                Reacts: {
                  playerID: m.playerID,
                  blogID: blogId,
                  like: true,
                  "createdAt": "2021-08-31T06:10:04.000Z",
                  "updatedAt": "2021-08-31T06:10:04.000Z"
                }
              })
            this.setState({
                blogList,
            })
        } else {
            axios.delete(`/api/unreact-blog?playerID=${m.playerID}&blogID=${blogId}`);
            let blog = blogList.find(item => item.blogID === blogId);
            console.log(blog);
            const removeIndex = blog.reactData.findIndex(item1 => item1.Reacts.playerID === m.playerID && item1.Reacts.blogID === blogId && item1.Reacts.like === true);
            removeIndex !== -1 && blog.reactData.splice(removeIndex, 1);
            this.setState({
                blogList,
            })
        }
    }

    checkIfLiked = (blogId) => {
        
        // const { liked } = this.props;
        // let count = 0;
        // for(let i=0; i<liked.length; i++) {
        //     if(liked[i].blogId === blogId && liked[i].liker === this.state.userId) {
        //         count ++;
        //     };
        // }
        // if(count > 0) {
        //     return true
        // }
        // else {
        //     return false
        // }
    }

    removeBlog = (blogID) => {
        axios.delete("/api/delete-blog", {data: {blogID: blogID}});
        const {blogList} = this.state;
        const indexRemove = blogList.findIndex(item => item.blogID === blogID);
        indexRemove !== -1 && blogList.splice(indexRemove, 1);
        this.setState({blogList: blogList});
    }

    render() {
        const { users, friends } = this.props;
        const { blogList, hoverLike} = this.state;
        console.log(blogList);
        const m = JSON.parse(localStorage.getItem("list"));
        debugger;
        return <div className='aiplay'>
            <div className='row'>
                <div className='col-8'>
                    <div className="blog-list post-blog">
                        <h5>Post Something</h5>
                        <div>
                            <Modal isOpen={this.state.modal} toggle={this.toggle} >
                                <ModalHeader>Create post</ModalHeader>
                                <ModalBody>
                                    <textarea ref={this.textInputRef} className="textinput" rows="4" placeholder="What's on your mind?" >
                                    </textarea>
                                </ModalBody>
                                <ModalFooter>
                                    <Button className="postbutton" color="primary" onClick={this.addBlogFunction}><a href="/blog" alt="#" style={{color: "white"}}>Post</a></Button>{' '}
                                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                                </ModalFooter>
                            </Modal>
                        </div>
                        <hr />
                        <div className="post-input">
                            <img src={m.img} alt="avt" />
                            <Button className="post-button" color="danger" onClick={this.toggle}>What's on your mind?</Button>
                            {/* <input type="text" placeholder="What's on your mind?" /> */}
                        </div>
                    </div>
                    {blogList.length > 0 && blogList.map((item, index) => {
                        console.log(item.blogID);
                        const x1 = item.reactData.filter(item => item.Reacts.like === true)
                        const x2 = item.reactData.filter(item => item.Reacts.like === false)
                        debugger;
                        const youLike = x1.find(f => f.playerID === m.playerID);
                        const youDislike = x2.find(f => f.playerID === m.playerID);
                        if(friends.find(m => m.playerID === item.playerID) || m.playerID === item.playerID){
                            return (
                                <div className="blog-list">
                            <div className="user-avt">
                                <img src={users.find(m => m.playerID === item.playerID) && users.find(m => m.playerID === item.playerID).img} alt="avt" />
                                <div className="user-name">
                                    {users.find(m => m.playerID === item.playerID) && <h5>{users.find(m => m.playerID === item.playerID).name}</h5>}
                                    {users.find(m => m.playerID === item.playerID) && <p>{users.find(m => m.playerID === item.playerID).createdAt}</p>}
                                </div>
                                <div className="list-button">
                                    <img style={{width: 20, height: 20, borderRadius: 0, cursor: 'pointer'}} onClick={this.toggleRemove} src={deleteBlog}/>
                                    <Modal isOpen={this.state.modalRemove} toggle={this.toggleRemove} >
                                        <ModalHeader>Create post</ModalHeader>
                                        <ModalBody>
                                            <p>Ban co chac muon xoa?</p>
                                        </ModalBody>
                                        <ModalFooter>
                                            <Button className="postbutton" color="primary" onClick={() => this.removeBlog(item.blogID)}><a href="/blog" alt="#" style={{color: "white"}}>Ok</a></Button>{' '}
                                            <Button color="secondary" onClick={this.toggleRemove}>Cancel</Button>
                                        </ModalFooter>
                                    </Modal>
                                </div>
                            </div>
                            <div className="user-content">
                                <p>{item.content}</p>
                            </div>
                            <hr />
                            <div className="interactive row">
                                <div className="col-4">
                                    <div className="react" onMouseLeave={this.hoverToggleOff} onMouseEnter={() => this.hoverToggle('like', item.blogID)} onClick={() => this.likeBlogFunction(item.blogID, youLike)}>
                                        <img src={youLike ? likedImg : like} alt="interactive" />
                                        <p>{x1.length} Likes</p>
                                        {x1.length > 0 && <BackdropFilter filter={"blur(10px)"} className={`show-like${hoverLike.type === 'like' && hoverLike.id === item.blogID ? " showup" : ""}`}>
                                            {users.length > 0 && x1.map(item => {
                                                return (
                                                    <div className="user-like">
                                                        <img className="friend-avtimg" src={users.find(m => m.playerID === item.Reacts.playerID).img} alt="" />
                                                        <div className="name-user">{users.find(m => m.playerID === item.Reacts.playerID).name}</div>
                                                    </div>
                                                )
                                            })}
                                        </BackdropFilter>
                                        }
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="react comment" onMouseLeave={this.hoverToggleOff} onMouseEnter={() => this.hoverToggle('dislike', item.blogID)} onClick={() => this.disLikeBlogFunction(item.blogID, youDislike)}>
                                        <img src={youDislike ? likedImg:like} alt="interactive" />
                                        <p>{x2.length} Dislikes</p>
                                        {x2.length > 0 && <div className={`show-like${hoverLike.type === 'dislike' && hoverLike.id === item.blogID ? " showup" : ""}`}>
                                            {users.length > 0 && x2.map(item => {
                                                return (
                                                    <div className="user-like">
                                                        <img className="friend-avtimg" src={users.find(m => m.playerID === item.Reacts.playerID).img} alt="" />
                                                        <div className="name-user">{users.find(m => m.playerID === item.Reacts.playerID).name}</div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        }
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="react saved">
                                        <img src={saved} alt="interactive" />
                                        <p>{item.saved} Saved</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                            )
                        } else return null;
                    } )}
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