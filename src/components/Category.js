import React from 'react';
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'


import Button from 'react-bootstrap/Button'
import CardDeck from 'react-bootstrap/CardDeck'
import ActivitiesContainer from  '../containers/ActivitiesContainer'

// import { PhotoPlaceholder } from 'react-placeholder-image';
import 'bootstrap/dist/css/bootstrap.min.css';

const Category = ({category}) => {
  
  return (
    <CardDeck>
      <Card>
        <img variant="top"  alt="category" src={category.url}/>       
        {/* {<PhotoPlaceholder width={300} height={300} />} */}
    <Card.Body>
      <Card.Title>{category.title}</Card.Title>
      <Card.Text>{category.detail}</Card.Text>
       <Button variant="outline-info"  as={Link} to={`/categories/${category.id}/activity`}> Learn More</Button>
      <ActivitiesContainer/>
    </Card.Body>  
    </Card>
  </CardDeck>
  );
}

export default Category;

///api/v1/categories/:category_id/activities/:id