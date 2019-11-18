import React from 'react';
import Comments from '../components/Comments'
// import Comment from '../components/Comment'
import CommentForm from '../components/CommentForm'


class CommentsContainer extends React.Component {
  
    //constructor() method is fired before the component is mounted 
    state = {

       comments:[]
   
    }
    

    componentDidMount() {
        console.log("Mounted once")
        
        fetch('http://localhost:3000/api/v1/comments')

        .then(resp => resp.json())
        .then(comments => {
          this.setState({
           comments:comments
      }) 
    })
  }

  //I used the componentDidUpdate() that is invoked immediately after updating occurs.
  // This method is not called for the initial render.
  componentDidUpdate() {
    fetch('http://localhost:3000/api/v1/comments')

    .then(resp => resp.json())
    .then(comments => {
      this.setState({
       comments:comments
    }) 
  })
}

// pass the comments state as props to the Comments component.
// This is how the Comments component will get  the comments it renders.

    render () {
       
        return (
            <section className="section">
                <div className="container">
                   <div className="columns">
                        <div className="column is-half is-offset-one-quarter">

                            <CommentForm />
                           
                            <Comments comments={this.state.comments} />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
} 
  
export default CommentsContainer