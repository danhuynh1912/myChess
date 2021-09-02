import React, { Component } from 'react';
import { Table } from 'reactstrap';

import ContactUs from './ContactUs';
import FriendsListHome from './FriendsListHome';

import addAdmin from '../static/images/addAdmin.svg';
import removeAdmin from '../static/images/removeAdmin.svg';
import updateAdmin from '../static/images/updateAdmin.svg';

import '../static/History.css';
import axios from 'axios';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class LessonAdmin extends Component {
    constructor(props) {
        super();
        this.state = {
            modalAdd: false,
            modalUpdate: false,
            articles: [],
            newsID: '',
        }
        this.title = React.createRef();
        this.link = React.createRef();
        this.content = React.createRef();
        this.img = React.createRef();
    }

    toggleAdd = () => {
        this.setState({
            modalAdd: !this.state.modalAdd
            
        })
    };

    componentDidMount() {
        this.props.fetchArticles();
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.articles !== this.props.articles){
            this.setState({
                articles: this.props.articles,
            })
        }
    }

    toggleUpdate = (newsID) => {
        this.setState({
            modalUpdate: !this.state.modalUpdate,
            newsID: newsID,
        })
    };

    addArticles = () => {
        axios.post('/api/save-article', {
            title: this.title.current.value, 
            link: this.link.current.value, 
            img: 'https://scontent.fhan5-2.fna.fbcdn.net/v/t1.15752-9/239953567_1016892239083688_6455115937789524183_n.png?_nc_cat=102&ccb=1-5&_nc_sid=ae9488&_nc_ohc=gsOgaWf30BAAX8OgLb-&_nc_ht=scontent.fhan5-2.fna&oh=64f102a393dd5aa6c2d6dab9026393f2&oe=614B8FA4', 
            content: this.content.current.value
        })
        const {articles} = this.state;
        articles.push({
            title: this.title.current.value,
            content: this.content.current.value,
            link: this.link.current.value,
        })
        debugger;
        this.setState({
            articles,
        })
    }

    editArticle = () => {
        const {newsID} = this.state;
        debugger;
        axios.post("/api/edit-articles", {
            newsID: newsID,
            title: this.title.current.value, 
            link: this.link.current.value, 
            img: 'https://scontent.fhan5-2.fna.fbcdn.net/v/t1.15752-9/239953567_1016892239083688_6455115937789524183_n.png?_nc_cat=102&ccb=1-5&_nc_sid=ae9488&_nc_ohc=gsOgaWf30BAAX8OgLb-&_nc_ht=scontent.fhan5-2.fna&oh=64f102a393dd5aa6c2d6dab9026393f2&oe=614B8FA4', 
            content: this.content.current.value
        })
        const {articles} = this.state;
        articles.find(item => item.newsID === newsID).title = this.title.current.value;
        articles.find(item => item.newsID === newsID).link = this.link.current.value;
        articles.find(item => item.newsID === newsID).content = this.content.current.value;
        debugger;
        this.setState({
            articles,
        })
    }

    deleteArticles = (newsID) => {
        axios.delete('/api/delete-article', {data: {newsID: newsID}})
        const {articles} = this.state;
        const indexremove = articles.findIndex(item => item.newsID === newsID)
        articles.splice(indexremove, 1);
        this.setState({
            articles,
        })
    }


    render() {
        const {articles} = this.state;
        return <div className='lesson row'>
            <div className='col-8'>
                <div className="game-list">
                    <Table responsive className='table-history history-page'>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Link</th>
                                <th>Content</th>
                            </tr>
                        </thead>
                        <tbody>
                            {articles.length > 0 && articles.map((item, index) => <tr>
                                <td key={index}>{item.title}</td>
                                <td key={index}>{item.link}</td>
                                <td key={index}>{item.content}</td>
                                <td key={index} className="action-admin">
                                    <img alt="" src={updateAdmin} onClick={() => this.toggleUpdate(item.newsID)} />
                                    <img alt="" src={removeAdmin} onClick={() => this.deleteArticles(item.newsID)} />
                                </td>
                            </tr>)}
                            <tr>
                                <th className="action-admin">
                                    <img src={addAdmin} onClick={this.toggleAdd} />
                                </th>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>


            <Modal isOpen={this.state.modalAdd} toggle={this.toggleAdd} >
                <ModalHeader>Add</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">Title</Label>
                            <Input type="Title" name="Title" id="Title" placeholder="Title" innerRef={this.title} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Link</Label>
                            <Input type="Link" name="Link" id="Link" placeholder="Link" innerRef={this.link} />
                        </FormGroup>
                       
                        <FormGroup>
                            <Label for="exampleText">Content</Label>
                            <Input type="Content" name="Content" id="Content" innerRef={this.content} />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button className="postbutton" color="primary" onClick={this.addArticles}>Post</Button>{' '}
                    <Button color="secondary" onClick={this.toggleAdd}>Cancel</Button>
                </ModalFooter>
            </Modal>



            <Modal isOpen={this.state.modalUpdate} toggle={this.toggleUpdate} >
                <ModalHeader>Update</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">Title</Label>
                            <Input type="Title" name="Title" id="Title" placeholder="Title" innerRef={this.title} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Link</Label>
                            <Input type="Link" name="Link" id="Link" placeholder="Link" innerRef={this.link} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleText">Content</Label>
                            <Input type="Content" name="Content" placeholder="Content" innerRef={this.content} />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button className="postbutton" color="primary" onClick={this.editArticle}>Post</Button>{' '}
                    <Button color="secondary" onClick={this.toggleUpdate}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    }
}