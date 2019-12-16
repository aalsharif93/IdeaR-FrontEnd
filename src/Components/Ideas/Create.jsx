import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'

export default class Create extends Component {

    constructor(props){
        super(props)
        this.state={
            titile:'Nun yet'
        }
    }



    getval(){
        const vals = this.refs.name.value
        this.setState({
            'titile':vals
        })
        
        
    }
    render() {
        const {titile} = this.state


        return (
            <div>
                Create Ideas Page

         
                <div>
                   {titile}
               </div>
               name
               <input name='name' ref='name' type='text'/>
             
               <button onClick={this.getval.bind(this)}>Sub</button>
        
                <Form >
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter title" name="title" />

          </Form.Group>
        
          <Form.Group >
            <Form.Label>Describe</Form.Label>
            <Form.Control type="text" placeholder="Enter Describe"  name="text"/>
          </Form.Group>
          <select  >
      <option  value="" selected="selected" disabled="disabled">choose Your category</option>
                 <option value="Food">Food</option>
                 <option  value="Games">Games</option>
                 <option  value="Other">Other</option>
     
             </select> <br /> <br />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        
            </div>
        )
    }
}
