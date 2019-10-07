import React from 'react';

import Category from './Category';

const Categories = ({categories})=> {

    return (

        <div className='category-list section'>
          {categories && categories.map(category => {
            return (
              <Category category={category} key={category.id} />
            )
          })}
        </div>
    )
}


export default Categories;

