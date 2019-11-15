import React  from 'react'
import { connect } from 'react-redux';//HOC
import {addEmail} from '../actions/addEmail'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import "../App.css";


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
      console.log('A'); 
      this.props.addEmail(this.state)
      console.log('B');
      this.setState({
          email:''
      })
    }

    render() { 
        return(

            <div className="container text-center img">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group  controlId="formBasicEmail"><br></br>
                        <h3>Get Updates from Mindful Child</h3>
                        <h6>Sign up for Stories and Updates</h6>
                        <div className="container col-md-8 ">
                           <input className="form-control" type="text" name="email" value={this.state.email} onChange={this.handleChange} placeholder="mindfulchild@me.com" />  
                        </div>   
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
//addEmail dispatch new actions to store directly from this component







