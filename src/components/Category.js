import React from 'react';

const Category = ({category}) => {
  
  return (
     <div className='card z-depth-0 category-summary'>
        <div className='card-content grey-text text-darken-3'>
          <span className='card-title'> { category.title}</span>
          <p>{category.detail}</p>
        </div>
     </div>

  );
}




export default Category;

