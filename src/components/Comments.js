import React from 'react'
import Comment from './Comment';

const Comments = ({comments}) => {
    return (
        <div className="row ">
          {comments && comments.map(comment => {
            return (
              <Comment comment={comment} key={comment.id}  />
            )
          })}
          </div> 
    )
}


export default Comments;