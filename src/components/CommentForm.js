import React from 'react'

class CommentForm extends React.Component {

state = {
    
        name: "",
        message: ""
      
}


// Handle form input field changes & update the state   
handleChange = (event) => {
    
    this.setState ({
      [event.target.name]: event.target.value
    })
}

 

// when user send a comment persist the comments on server
//setState to update component when the data is retrieve

handleSubmit= (event) =>{
    event.preventDefault() 

    console.log(this.state)
    fetch('http://localhost:3000/api/v1/comments', {
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(this.state)
    })
   //callback function 
   .then(response => response.json(
      
       this.setState({
           name:'',
           message:''
        })     
        
   ))
}

render() {
  

    return (
       
        <div>
            <h1 className="title">Kindly leave your thoughts below</h1>

            <form onSubmit={this.handleSubmit}>
                <div className="field">
                  <div className="control">
                    <input type="text" className="input" value={this.state.name} onChange={this.handleChange} name="name" placeholder="Your name"/>
                  </div>
                </div>
                
                <div className="field">
                    <div className="control">
                       <textarea type="text" className="textarea" value={this.state.message} onChange={this.handleChange}  name="message" placeholder="Add a comment"></textarea>
                    </div>
                </div>
                  
                <div className="field">
                    <div className="control">
                        <button className="button is-primary">Submit</button>
                     </div>
                </div>

            </form>
            
          
           
        </div>
    )
}
}

export default CommentForm;
