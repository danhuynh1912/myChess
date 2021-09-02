import React, { Component } from 'react';
import { Table } from 'reactstrap';

import ContactUs from './ContactUs';
import FriendsListHome from './FriendsListHome';

import addAdmin from '../static/images/addAdmin.svg';
import removeAdmin from '../static/images/removeAdmin.svg';
import updateAdmin from '../static/images/updateAdmin.svg';

import '../static/History.css';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';

export default class LessonAdmin extends Component {
    constructor(props) {
        super();
        this.state = {
            modalAdd: false,
            modalUpdate: false,
            lesson: [],
            lessonID: '',
        }
        this.title = React.createRef();
        this.content = React.createRef();
        this.content1 = React.createRef();
    }

    componentDidMount() {
        this.props.fetchLessons();
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.lessons !== this.props.lessons){
            this.setState({
                lesson: this.props.lessons,
            })
        }
    }

    toggleAdd = () => {
        this.setState({
            modalAdd: !this.state.modalAdd
        })
    };

    toggleUpdate = (lessonID) => {
        this.setState({
            modalUpdate: !this.state.modalUpdate,
            lessonID: lessonID,
        })
    };

    addLesson = () => {
        axios.post('/api/create-lesson', {title: this.title.current.value, content: this.content.current.value, thumbnail: 'https://source.unsplash.com/300x225/?chess'})
        const {lesson} = this.state;
        lesson.push({
            title: this.title.current.value,
            content: this.content.current.value,
            thumbnail: 'https://source.unsplash.com/300x225/?chess',
        })
        debugger;
        this.setState({
            lesson,
        })
    }

    editLesson = () => {
        const {lessonID} = this.state;
        debugger;
        axios.put('/api/edit-lesson', {lessonID: lessonID ,title: this.title.current.value, content: this.content.current.value, thumbnail: 'https://source.unsplash.com/300x225/?chess'})
        const {lesson} = this.state;
        lesson.find(item => item.lessonID === lessonID).title = this.title.current.value;
        lesson.find(item => item.lessonID === lessonID).content = this.content.current.value;
        debugger;
        this.setState({
            lesson,
        })
    }

    deleteLesson = (lessonID) => {
        axios.delete('/api/delete-lesson', {data: {lessonID: lessonID}})
        const {lesson} = this.state;
        const indexremove = lesson.findIndex(item => item.lessonID === lessonID)
        lesson.splice(indexremove, 1);
        this.setState({
            lesson,
        })
    }
    
    render() {
        const {lesson} = this.state;
        return <div className='lesson row'>
            <div className='col-8'>
                <div className="game-list">
                    <Table responsive className='table-history history-page'>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Content</th>
                                <th>Image</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lesson.length > 0 && lesson.map((item, index) => <tr>
                                <td key={index}>{item.title}</td>
                                <td key={index}>{item.content}</td>
                                <td key={index}></td>
                                <td key={index} className="action-admin">
                                    <img alt="" src={updateAdmin} onClick={() => this.toggleUpdate(item.lessonID)} />
                                    <img alt="" src={removeAdmin} onClick={() => this.deleteLesson(item.lessonID)} />
                                </td>
                            </tr>)}
                            <tr>
                                <th className="action-admin">
                                    <img alt="" src={addAdmin} onClick={this.toggleAdd} />
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
                            <Input type="title" name="title" placeholder="with a placeholder" innerRef={this.title} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Content</Label>
                            <Input type="content" name="content" placeholder="password placeholder" innerRef={this.content} />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button className="postbutton" color="primary" onClick={this.addLesson}>Post</Button>{' '}
                    <Button color="secondary" onClick={this.toggleAdd}>Cancel</Button>
                </ModalFooter>
            </Modal>



            <Modal isOpen={this.state.modalUpdate} toggle={this.toggleUpdate} >
                <ModalHeader>Update</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">Title</Label>
                            <Input type="title" name="title" placeholder="with a placeholder" innerRef={this.title} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Content</Label>
                            <Input type="content" name="content" placeholder="password placeholder" innerRef={this.content} />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button className="postbutton" color="primary" onClick={() => this.editLesson()}>Post</Button>{' '}
                    <Button color="secondary" onClick={this.toggleUpdate}>Cancel</Button>
                </ModalFooter>
            </Modal>


        </div>
    }
}