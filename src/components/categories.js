import React from 'react';


const Categories = (props) => {
 
    return (
        <div>
          {props.categories.map(category => 
          <div key={category.id}>{category.title}</div>)}
        </div>
    )
}



export default Categories;