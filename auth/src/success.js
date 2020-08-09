import React from 'react';
import axios from 'axios';
import {ListGroupItem,ListGroup,Card,Nav,Navbar,Container} from 'react-bootstrap'

export default class Success extends React.Component{
    state={
        email:this.props.location.state.email,
        firstname:"",
        lastname:"",
        phone:"",
        city:"",
        hobby:"",
        year:"",
        middlename:""
    }
    componentWillMount(){
        this.fetchdata()
    }
    fetchdata(){
        
        axios.post('http://127.0.0.1:3333/api/success',{
            email:this.state.email
        }
        )
        .then(res=>{
            this.setState({
                firstname:res.data.firstname
            })
            this.setState({
                middlename:res.data.middlename
            })
            this.setState({
                lastname:res.data.lastname
            })
            this.setState({
                phone:res.data.phone
            })
            this.setState({
                hobby:res.data.firstname
            })
            this.setState({
                year:res.data.year
            })
            this.setState({
                city:res.data.city
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }
    render(){
        return(
            <Container fluid="true">
                <Navbar bg="light" variant="light">
                    <Navbar.Brand >My-Resume</Navbar.Brand>
                    <Nav className="ml-auto">
                    <Nav.Item bg="light"><h4 >Hi,{this.state.firstname.toLocaleUpperCase}</h4></Nav.Item>
                    </Nav>
                </Navbar>
                <Card style={{ width: "600px",paddingLeft:"100px" }} >
                    <Card.Body>
                        <Card.Title>My Resume</Card.Title>
                        <Card.Text>
                         Details of the User
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Firstname:  <h5>{this.state.firstname}</h5></ListGroupItem>
                        <ListGroupItem> Middlename:  <h5>{this.state.middleame}</h5> </ListGroupItem>
                        <ListGroupItem> Lastname:  <h5>{this.state.lastname}</h5> </ListGroupItem>
                        <ListGroupItem> Email:  <h5>{this.state.email}</h5> </ListGroupItem>
                        <ListGroupItem> Contact:  <h5>{this.state.phone}</h5> </ListGroupItem>
                        <ListGroupItem> Year of graduation:  <h5>{this.state.year}</h5> </ListGroupItem>
                        <ListGroupItem> Hobby:  <h5>{this.state.hobby}</h5> </ListGroupItem>
                        <ListGroupItem> Current City:  <h5>{this.state.city}</h5> </ListGroupItem>
                    </ListGroup>
                    </Card>
            </Container>
        )
    }
}