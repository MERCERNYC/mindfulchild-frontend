import React from 'react'
import { Link } from 'react-router-dom';

const NotFound= () => {
    return (
      <div class="center">
        <h1>404.. This page is not found!</h1> 
        <Link to="/">Go to Home </Link>
      </div>
    );
  };

export default NotFound;

