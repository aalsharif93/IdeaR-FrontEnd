import React, { Component } from 'react'
import {  Button, Form , Alert } from 'react-bootstrap'
export default class Login extends Component {
    render() {
        return (
            <div>
                Login Page
        
          <Form onSubmit = {this.submit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" onChange={this.onChange}/>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
        
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"  name="password" onChange={this.onChange}/>
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button style={{marginBottom:'300%'}} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        
        </div>

        )
    }
}
