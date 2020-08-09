import React from 'react';
import './signIn.css';
import {Redirect} from 'react-router';
import axios from 'axios';
import {Form,Col,Button} from 'react-bootstrap'


export default class SignIn extends React.Component{
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:'',
            redirect:false
        }
        this.handleChange=this.handleChange.bind(this)
        this.loginHandler=this.loginHandler.bind(this);
    }
    loginHandler(evt){
        evt.preventDefault();
        axios.post('http://127.0.0.1:3333/api/signIn',{
                email:this.state.email,
                password:this.state.password
            }).then(res=>{
                if(res.status===200)
                    {this.setState({
                        redirect:true
                    })}
                else{
                    console.log('error');
                }
            })
            .catch(err=>{
                console.log('wrong credentials'+err);
            });
}
    handleChange(evt){
        let fieldname=evt.target.name
        let fieldvalue=evt.target.value
        this.setState({
            ...this.state,[fieldname]:[fieldvalue]
        })
    }
    render(){
        if(this.state.redirect) {
            return(
                <Redirect to={{
                    pathname:"/success",
                    state:{email:this.state.email}
                }} />
            )
        }
        return(
                            <Form method="post">
                                <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name="email" required
                                value={this.state.email} onChange={this.handleChange} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" required
                                name="password" 
                                value={this.state.password} onChange={this.handleChange} />
                                </Form.Group>
                                <Button variant="primary" type="submit" onClick={this.loginHandler}>
                                Submit
                            </Button>
                            </Form>
        )
    }
}