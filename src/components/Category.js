import React from 'react';

const Category = (props) => {

  console.log(props)
  return (
    <div>
       {props.category.title}
    </div>
  );
}

export default Category;