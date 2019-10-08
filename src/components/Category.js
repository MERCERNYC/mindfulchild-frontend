import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardDeck from 'react-bootstrap/CardDeck'
import ActivitiesContainer from  '../containers/ActivitiesContainer'

import { PhotoPlaceholder } from 'react-placeholder-image';

const Category = ({category}) => {
  
  return (
    <CardDeck>
      <Card>
        {/* <Card.Img variant="top" src="{category.url}/100px180" /> */}
        {<PhotoPlaceholder width={300} height={300} />}
    <Card.Body>
      <Card.Title>{category.title}</Card.Title>
      <Card.Text>{category.detail}</Card.Text>
      <Button  variant="outline-info">Learn More</Button>
      <ActivitiesContainer/>
    </Card.Body> 
    </Card>
  </CardDeck>
  );
}

export default Category;


