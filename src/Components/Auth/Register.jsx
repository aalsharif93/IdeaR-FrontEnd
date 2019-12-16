import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'

export default class Register extends Component {
    render() {
        return (
            <div>
                Register Page
                <Form >
          <Form.Group controlId="formBasicFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="name" placeholder="First name" name="name" onChange={this.onChange}/>
          </Form.Group>

          <Form.Group controlId="formBasicLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="name" placeholder="Last name"  name="name" onChange={this.onChange}/>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" onChange={this.onChange}/>
          </Form.Group>
        
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"  name="password" onChange={this.onChange}/>
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button   variant="primary" type="submit">
            Submit
          </Button>
        </Form>
          </div>

         
        )
    }
}
