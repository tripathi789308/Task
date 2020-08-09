import React,{Component} from 'react';
//import {Link} from 'react-router-dom'
import SignUp from '../signUp/signUp'
import SignIn from '../signIn/signIn'
//import Modal from 'react-responsive-modal'
import {Navbar,Nav,Container,Modal,Button,Carousel} from 'react-bootstrap'

const src=require('./image.jpg')

export default class myResume extends Component{
    constructor(props){
        super(props)
        this.state={
            signup:false,
            login:false
        }
        this.openSign=this.openSign.bind(this);
        this.openLogin=this.openLogin.bind(this);
        this.handleClose=this.handleClose.bind(this);
        this.handleCloseLogin=this.handleCloseLogin.bind(this);
        this.toggleSwitch=this.toggleSwitch.bind(this);
    }
    openSign(){
        this.setState({
            signup:true
        })
    }
    openLogin(){
        this.setState({
            login:true
        })
    }
    handleClose(){
        this.setState({
            signup:false
        })
    }
    handleCloseLogin(){
        this.setState({
            login:false
        })
    }
    
    toggleSwitch(){
        this.setState({
            login:!this.state.login
        })
        this.setState({
            signup:!this.state.signup
        })
    }
    render(){
        return(

            <Container fluid>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand >My-Resume</Navbar.Brand>
                    <Nav className="ml-auto">
                    <Nav.Item><Button variant="outline-success" onClick={this.openSign}>SignUp</Button></Nav.Item>
                    <Nav.Item ><Button variant="outline-success" onClick={this.openLogin}>SignIn</Button></Nav.Item>
                    </Nav>
                </Navbar>
                <Carousel>
                    <Carousel.Item>
                        <img fluid="true"
                        className="d-block w-100"
                        style={{'maxHeight':'500px'}}
                        src={src}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>Sign-Up</h3>
                        <p>You will enter details which will be stored in DB using mongoose.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img fluid="true"
                        className="d-block w-100"
                        style={{'maxHeight':'500px'}}
                        src={src}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Sign-In</h3>
                        <p>You will enter your email and password to login and after successfull login
                            you will redirected to My-Resume page.
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img fluid="true"
                        className="d-block w-100"
                        style={{'maxHeight':'500px'}}
                        src={src}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>My-Resume</h3>
                        <p>You will be able to see you demo resume in which u will see the 
                            details to entered while signing up.
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>

                <Modal
                    show={this.state.signup} onHide={this.handleClose}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    >
                    <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Sign Up
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                            <SignUp />
                    </Modal.Body>
                    <Modal.Footer>
                       
                        <Button variant="primary" onClick={this.toggleSwitch}>Already registered</Button>
                    </Modal.Footer>
                    </Modal>
                <Modal 
                show={this.state.login} onHide={this.handleCloseLogin}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered>
                        <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                                 Sign In
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <SignIn />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={this.toggleSwitch}>Didn't Register yet?</Button>
                        </Modal.Footer>
                    </Modal>
            </Container>
            )
    }
}