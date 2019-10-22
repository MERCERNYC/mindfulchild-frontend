import React  from 'react'

import { connect } from 'react-redux';//HOC
import Form from 'react-bootstrap/Form'


class Newsletter extends React.Component{

    state = {
        email:''
    }

    handleChange = (event) => {
        this.setState({
            email: event.target.value
        });
    }

    handleSubmit =(event) => {
      event.preventDefault()
      console.log(this.input.current.value)
    }

    render() { 
        return(
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="text" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Enter email" />   
                        <input type="submit"/> 
                    </Form.Group>
                </Form>    
            </div>
        );
    }
}

export default connect(null)(Newsletter)







