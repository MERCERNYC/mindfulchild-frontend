import React from 'react';


const Categories = (props) => {
 
    return (
        <div>
          {props.categories.map(category => <li key={category.id}>{category.title}</li>)}
        </div>
    )
}



export default Categories;