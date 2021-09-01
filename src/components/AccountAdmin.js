import React, { Component } from 'react';
import { Table } from 'reactstrap';

import ContactUs from './ContactUs';
import FriendsListHome from './FriendsListHome';

import addAdmin from '../static/images/addAdmin.svg';
import removeAdmin from '../static/images/removeAdmin.svg';
import updateAdmin from '../static/images/updateAdmin.svg';

import '../static/History.css';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class LessonAdmin extends Component {
    constructor(props) {
        super();
        this.state = {
            modalAdd: false,
            modalUpdate: false
        }
    }

    toggleAdd = () => {
        this.setState({
            modalAdd: !this.state.modalAdd
        })
    };

    toggleUpdate = () => {
        this.setState({
            modalUpdate: !this.state.modalUpdate
        })
    };


    render() {
        const games = [
            { level: 'Level 1', result: 'win', moves: '26', date: 'Jun 29, 2021' },
            { level: 'Level 3', result: 'lose', moves: '30', date: 'Jun 29, 2021' },
            { level: 'Level 3', result: 'win', moves: '15', date: 'Jun 29, 2021' },
            { level: 'Level 2', result: 'win', moves: '40', date: 'Jun 12, 2021' },
        ]
        return <div className='lesson row'>
            <div className='col-8'>
                <div className="game-list">
                    <Table responsive className='table-history history-page'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Level</th>
                                <th>Resultámdlkasmdlkm</th>
                                <th>Moves</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {games.length > 0 && games.map((item, index) => <tr>
                                <td>{index + 1}</td>
                                <td key={index}>{item.level}</td>
                                {/* <td key={index}>{item.result}</td> */}
                                <td key={index}>
                                    <p className={item.result === 'win' ? 'game-result win' : 'game-result lose'}>
                                        {item.result === 'win' ? 'W' : 'L'}
                                    </p>
                                </td>
                                <td key={index}>{item.moves}</td>
                                <td key={index}>{item.date}</td>
                                <td key={index} className="action-admin">
                                    <img src={updateAdmin} onClick={this.toggleUpdate} />
                                    <img src={removeAdmin} />
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
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleSelect">Select</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleText">Text Area</Label>
                            <Input type="textarea" name="text" id="exampleText" />
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
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleSelect">Select</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleText">Text Area</Label>
                            <Input type="textarea" name="text" id="exampleText" />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button className="postbutton" color="primary" onClick={this.addBlogFunction}>Post</Button>{' '}
                    <Button color="secondary" onClick={this.toggleUpdate}>Cancel</Button>
                </ModalFooter>
            </Modal>


            <div className='col-4'>
                <div className='article-rightcontent'>
                    <FriendsListHome />
                    <ContactUs />
                </div>
            </div>
        </div>
    }
}