import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Category = (props) => {
  
  return (
   <div>
     {props.category.title}
   </div>
  );
}
export default Category;