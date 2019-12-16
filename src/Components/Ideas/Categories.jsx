import React, { Component } from 'react'
import { ListGroup, Col, Tab,Row } from 'react-bootstrap';


export default class Categories extends Component {
    render() {
        return (
            <div>
              
  <Row>
    <Col sm={3}>
        <ListGroup.Item>
        category
        </ListGroup.Item>
      <ListGroup>
        <ListGroup.Item action href="/Ideas/Food">
          Food
        </ListGroup.Item>
        <ListGroup.Item action href="/Ideas/Games">
          Games
        </ListGroup.Item>
        <ListGroup.Item action href="/Ideas/Other">
          Other
        </ListGroup.Item>
      </ListGroup>
    </Col>
    <Col sm={3}>
      <Tab.Content>
        <Tab.Pane eventKey="/Ideas/Food">
     
        </Tab.Pane>
        <Tab.Pane eventKey="/Ideas/Games">
         
        </Tab.Pane>
        <Tab.Pane eventKey="/Ideas/Other">
         
         </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>


            </div>
        )
    }
}
