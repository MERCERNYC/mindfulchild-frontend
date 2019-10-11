import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge'

const NotFound= () => {
    return (
      <Jumbotron>
      <Container className="pagenotfound">
       <div className= "text-center">
       <h1 > 404..Oops This page is not found!</h1> 
       <Badge  pill variant="light" as={Link} to='/'><h2>Go to Home</h2></Badge>
       </div>
      </Container>  
     </Jumbotron>
    );
  };

export default NotFound;

