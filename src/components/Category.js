import React from 'react';
import Card from 'react-bootstrap/Card'


const Category = ({category}) => {
  
  return (

    <Card>
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body>
        <Card.Title>{category.title}</Card.Title>
        <Card.Text>
        {category.detail}
        </Card.Text>
      </Card.Body>
    </Card>

  );
}

export default Category;


