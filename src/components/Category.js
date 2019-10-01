import React from 'react';

const Category = (props) => {
  console.log(props)
  
  return (
    <>
    <h2> {props.category.title}  </h2>
    <h3> {props.category.detail} </h3>
    </>
  );
}

export default Category;