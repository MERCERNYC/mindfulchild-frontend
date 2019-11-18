import React from 'react';
import Comment from './Comment';

//This component accepts a comments props and renders the Comment component for each of the comments available. 
//It passes the actual comment to the Comment component as props.

const Comments = ({ comments })=> {

  return (
    <div className="section">
       {comments && comments.map(comment =>
       <Comment key={comment.id} comment={comment}/>)}
    </div>
  )
}

export default Comments;