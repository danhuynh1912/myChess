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
        }
        this.title = React.createRef();
        this.link = React.createRef();
        this.content = React.createRef();
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

    toggleUpdate = () => {
        this.setState({
            modalUpdate: !this.state.modalUpdate
        })
    };

    addArticles = () => {
        
    }

    deleteArticles = () => {
    }


    render() {
        const games = [
            { level: 'Level 1', result: 'win', moves: '26', date: 'Jun 29, 2021' },
            { level: 'Level 3', result: 'lose', moves: '30', date: 'Jun 29, 2021' },
            { level: 'Level 3', result: 'win', moves: '15', date: 'Jun 29, 2021' },
            { level: 'Level 2', result: 'win', moves: '40', date: 'Jun 12, 2021' },
        ]
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
                                    <img src={updateAdmin} onClick={this.toggleUpdate} />
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
                            <Input type="Title" name="Title" id="Title" placeholder="Title" ref={this.title} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Link</Label>
                            <Input type="Link" name="Link" id="Link" placeholder="Link" ref={this.link} />
                        </FormGroup>
                       
                        <FormGroup>
                            <Label for="exampleText">Content</Label>
                            <Input type="Content" name="Content" id="Content" ref={this.content} />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button className="postbutton" color="primary" onClick={this.addBlogFunction}>Post</Button>{' '}
                    <Button color="secondary" onClick={this.toggleAdd}>Cancel</Button>
                </ModalFooter>
            </Modal>



            <Modal isOpen={this.state.modalUpdate} toggle={this.toggleUpdate} >
                <ModalHeader>Update</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">Title</Label>
                            <Input type="Title" name="Title" id="Title" placeholder="Title" ref={this.title} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Link</Label>
                            <Input type="Link" name="Link" id="Link" placeholder="Link" ref={this.link} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleText">Content</Label>
                            <Input type="Content" name="Content" placeholder="Content" id="Content" ref={this.content} />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button className="postbutton" color="primary" onClick={this.addArticles}>Post</Button>{' '}
                    <Button color="secondary" onClick={this.toggleUpdate}>Cancel</Button>
                </ModalFooter>
            </Modal>


           
        </div>
    }
}