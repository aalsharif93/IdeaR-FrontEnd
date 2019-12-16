import React, { Component } from 'react'
import Categories from './Categories'
import { Card,Button } from 'react-bootstrap';



export default class Games extends Component {
    render() {
        return (
            <div>
                Games Pages
                <Categories/>


     

                <Card style={{ width: '18rem' }}>
    <Card.Body>
    <Card.Title><b>title of Ideas Games</b></Card.Title>
      <Card.Text>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore quis delectus ipsa commodi voluptas repudiandae? Quo sit incidunt velit aliquam rem laboriosam quam deleniti doloremque amet. Asperiores ipsum itaque magnam..
      </Card.Text>
      <Card.Text>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Text>
    </Card.Body>
    <Button href="/Ideas/Games" variant="primary">Read More</Button>
  </Card>
          
            </div>
        )
    }
}
