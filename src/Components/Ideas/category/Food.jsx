import React, { Component } from 'react'
import Categories from '../Categories'
import { Card,Button } from 'react-bootstrap';


export default class Food extends Component {


    render() {
        return (
            <div>
                Food page
                <Categories/>

<Card style={{ width: '18rem' }}>
    <Card.Body>
    <Card.Title><b>title of Ideas Food</b></Card.Title>
      <Card.Text>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore quis delectus ipsa commodi voluptas repudiandae? Quo sit incidunt velit aliquam rem laboriosam quam deleniti doloremque amet. Asperiores ipsum itaque magnam..
      </Card.Text>
      <Card.Text>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Text>
    </Card.Body>
    <Button href="/Ideas/Food/${id}" variant="primary">Read More</Button>
  </Card>


            </div>
        )
    }
}
