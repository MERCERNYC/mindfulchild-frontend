import React  from 'react'

import { connect } from 'react-redux';//HOC
import Form from 'react-bootstrap/Form'


class Newsletter extends React.Component{

    state = {
        email:''
    }

    render() { 
        return(
            <div>
                <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  </Form>
            
            </div>
        );
    }
}

export default connect(null)(Newsletter)







