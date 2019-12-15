import React, { Component } from 'react'
import Categories from './Categories'
import { Card,Button } from 'react-bootstrap';



export default class Games extends Component {
    render() {
        return (
            <div>
                Games Pages

     

                <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://via.placeholder.com/286x180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card> 
          <Categories/>
            </div>
        )
    }
}
