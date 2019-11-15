import React from 'react';
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'


class Comment extends React.Component {

    state = {
        name:'',
        comment:''
    }

    handleChange = (event) => {
        this.setState ({
          [event.target.name]: event.target.value
        })
    }

    handleSubmit= (event) =>{
        event.preventDefault()
        fetch('http://localhost:3000/api/v1/messages', {
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(this.state)
        })
        .then(response => response.json(
            this.setState({
                name:'',
                comment:''
             })
        ))
        
    }


    render() {
      
        return (

            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                      <input type="text" value={this.state.name} name="name" onChange={this.handleChange}/>
                    <label>Comment:</label>
                      <input type="text" value={this.state.comment} name="comment" onChange={this.handleChange}/>
                      <input type='submit'/>
                </form>
            </div>
        )
    }
}

export default Comment;