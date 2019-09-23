import React from "react";

const CategoryList= ({key, category}) => {
    return (
      <li><button>{category.title}</button></li>
    );
  }
  
  export default CategoryList;