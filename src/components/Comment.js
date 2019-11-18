import React from 'react'

//This component renders a single comment. 
//It accepts the comment as props. Props are custom attributes that are used to pass input data to components.

const Comment = ({comment}) => {

    console.log(comment)

  return (
    <article className="media">
        <figure className="media-left">
          <p className="image is-64x64">
           <img src="https://bulma.io/images/placeholders/128x128.png" alt="Avatar" />
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{comment.name}</strong>
              <br />
              {comment.message}
            </p>
          </div>
        </div>
      </article>
  )
}
export default Comment

