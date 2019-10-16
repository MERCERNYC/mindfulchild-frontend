import React from 'react';
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'

import Button from 'react-bootstrap/Button'
import CardDeck from 'react-bootstrap/CardDeck'
import ActivitiesContainer from  '../containers/ActivitiesContainer'
// import { PhotoPlaceholder } from 'react-placeholder-image';
import 'bootstrap/dist/css/bootstrap.min.css';


const Category = ({category,activity}) => {

  console.log(activity)

  
  return (
    <CardDeck>
      <Card>
        <img variant="top"  alt="category" src={category.url}/>       
        {/* {<PhotoPlaceholder width={300} height={300} />} */}
    <Card.Body>
      <Card.Title>{category.title}</Card.Title>
      <Card.Text>{category.detail}</Card.Text>
        {/* Do I need a onclick event on the button a redirect???? */}
       <Button variant="outline-info" 
      //  need a route that once a user click button learn more it take to a activity specific for that category
        as={Link} to={`categories/:id/activities/:id`}
        >Learn More
        </Button>

        {/* //example to see Activities this need to show in another window. */}
           <ActivitiesContainer category={category}/>
       {/*  Activities Container to have access to category component through props  */}
      
    </Card.Body>  
    </Card>
  </CardDeck>
  );
}

export default Category;

///api/v1/categories/:category_id/activities/:id