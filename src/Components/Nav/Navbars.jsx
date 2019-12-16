import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Nav, Navbar, Button, NavDropdown } from 'react-bootstrap';
import Home from '../Pages/Home'
import About from '../Pages/About'
import NotFound from '../Pages/NotFound'
import Login from '../Auth/Login';
import Register from '../Auth/Register';
import Ideas from '../Ideas/Ideas';
import Create from '../Ideas/Create';
import Food from '../Ideas/Food'
import Games from '../Ideas/Games'
import Other from '../Ideas/Other'





export default class Navbars extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar>



            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Button variant="light" className="nav-link" href="/">Home</Button>
                <Button variant="light" className="nav-link" href="/About">About</Button>
                <NavDropdown title="Ideas" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/Ideas">show Ideas</NavDropdown.Item>
                  <NavDropdown.Item href="/Create">Create Ideas</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Account" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/Login">Login</NavDropdown.Item>
                  <NavDropdown.Item href="/Register">Register</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Register" component={Register} />
            <Route path="/Login" component={Login} />
            <Route path="/Create" component={Create} />
            <Route path="/Ideas/Food" component={Food} />
            <Route path="/Ideas/Games" component={Games} />
            <Route path="/Ideas/Other" component={Other} />
            <Route path="/Ideas" component={Ideas} />


            <Route path="*" component={NotFound} />

          </Switch>
        </Router>
      </div>
    )
  }
}


