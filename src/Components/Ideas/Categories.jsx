import React, { Component } from 'react'
import { ListGroup, Col, Tab,Row } from 'react-bootstrap';
import Food from './Food';


export default class Categories extends Component {
    render() {
        return (
            <div>
              
  <Row>
    <Col sm={2}>
        <ListGroup.Item>
        category
        </ListGroup.Item>
      <ListGroup>
        <ListGroup.Item action href="/Food">
          Food
        </ListGroup.Item>
        <ListGroup.Item action href="/Games">
          Games
        </ListGroup.Item>
        <ListGroup.Item action href="/Other">
          Other
        </ListGroup.Item>
      </ListGroup>
    </Col>
    <Col sm={4}>
      <Tab.Content>
        <Tab.Pane eventKey="/Food">
     
        </Tab.Pane>
        <Tab.Pane eventKey="/Games">
         
        </Tab.Pane>
        <Tab.Pane eventKey="/Other">
         
         </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>


            </div>
        )
    }
}
