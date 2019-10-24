import React from 'react';
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardDeck from 'react-bootstrap/CardDeck'
import 'bootstrap/dist/css/bootstrap.min.css';



const Category = ({category}) => {

  console.log(category)

  
  return (

    <CardDeck>
      <Card>
        <img variant="top"  alt="category" src={category.url}/>            
    <Card.Body>
      <Card.Title>{category.title}</Card.Title>
      <Card.Text>{category.detail}</Card.Text>
        <Button variant="outline-info" 
          as={Link} to={`categories/${category.id}/activity`}
          >Learn More
        </Button>
    </Card.Body>  
    </Card>
  </CardDeck>
  );
}

export default Category;
