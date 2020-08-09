import * as React from 'react';
import {Form,Col,Row,Button, Modal} from 'react-bootstrap'
import axios from 'axios';

export default class SignUp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            firstname:'',
            lastname:'',
            middlename:'',
            email:'',
            password:'',
            phone:'',
            city:'',
            hobby:'',
            year:'',
            show:false,
        }
        this.SubmitHandler=this.SubmitHandler.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.handleChangeFirstName=this.handleChangeFirstName.bind(this);
    }
    SubmitHandler(evt){
        evt.preventDefault();
        axios.post('http://127.0.0.1:3333/api/signUp',{
            email:this.state.email,
            password:this.state.password,
            firstname:this.state.firstname,
            middlename:this.state.middlename,
            lastname:this.state.lastname,
            phone:this.state.phone,
            city:this.state.city,
            hobby:this.state.hobby,
            year:this.state.year
        }).then(res=>{
            console.log(res.status)
            if(res.status===201){
                alert("Successfully Signed Up")
            }
            else{
                alert("Email already exist")
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }
    handleChange(evt){
        let fieldname=evt.target.name
        let fieldvalue=evt.target.value
        this.setState({
            ...this.state,[fieldname]:fieldvalue
        })
    }
    handleChangeFirstName(evt){
        this.setState({
            firstname:evt.target.value
        })
    }
    handleClose(){
        this.setState({
            show:false
        })
    }

    render(){
        
        return(
            <Form >
                <Modal show={this.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Successfull SignUp</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>You have succesfully registered.Now you can Sign In</Modal.Body>
                    </Modal>
                            <Row>
                                <Col>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control placeholder="First name" required autocomplete="none"
                                name="firstname" value={this.state.firstname} onChange={this.handleChangeFirstName}/>
                                </Col>
                                <Col>
                                <Form.Label>Middle Name</Form.Label>
                                <Form.Control placeholder="Middle name" autocomplete="none"
                                name="middlename" value={this.state.middlename} onChange={this.handleChange}/>
                                </Col>
                                <Col>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control placeholder="Last name" required autocomplete="none"
                                name="lastname" value={this.state.lastname} onChange={this.handleChange}/>
                                </Col>
                            </Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" required autocomplete="none"
                                name="email" value={this.state.email} onChange={this.handleChange}/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" required autocomplete="none"
                                name="password" value={this.state.password} onChange={this.handleChange}/>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control name="city"  autocomplete="none"
                                required value={this.state.city} onChange={this.handleChange}/>
                                </Form.Group>
                                <Form.Group as={Col} >
                                <Form.Label>Mobile</Form.Label>
                                <Form.Control name="phone" autocomplete="none" type="number"
                                required value={this.state.phone} onChange={this.handleChange}/>
                                </Form.Group>
                                <Form.Group as={Col} >
                                <Form.Label>Year of Graduation</Form.Label>
                                <Form.Control name="year" required type="number"
                                autocomplete="none" value={this.state.year} onChange={this.handleChange}/>
                                </Form.Group>
                                <Form.Group as={Col}>
                                <Form.Label>Hobby</Form.Label>
                                <Form.Control name="hobby" required 
                                autocomplete="none" value={this.state.hobby} onChange={this.handleChange}/>
                                </Form.Group>

                                <Button variant="success" type="submit" onClick={this.SubmitHandler}>
                                Submit
                                </Button>
                            </Form>
            
        )
    }
}       

