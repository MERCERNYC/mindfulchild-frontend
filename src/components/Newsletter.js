import React  from 'react'
import { connect } from 'react-redux';//HOC
import {addEmail} from '../actions/addEmail'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


class Newsletter extends React.Component{

//controlled form
    state = {
        email:''
    }

    //update state with setState
    handleChange = (event) => {
        this.setState({
            email: event.target.value
        });
    }

    //create a action to send the data 
    handleSubmit =(event) => {
      event.preventDefault()
      //send state to addEmail action
      this.props.addEmail(this.state)
      this.setState({
          email:''
      })
    }

    render() { 
        return(
            <div className="container text-center">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <h3>Get Updates from Mindful Child</h3>
                        <h6>Sign up for Stories and Updates</h6>
                        <Form.Control type="text" name="email" value={this.state.email} onChange={this.handleChange} placeholder="you@yourname.com" />  
                    </Form.Group>
                    <Button variant="primary" type="submit">
                            Submit
                        </Button>
                </Form>    
            </div>
        );
    }
}

export default connect(null,{addEmail})(Newsletter)







