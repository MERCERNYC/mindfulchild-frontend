import React from 'react';
import Category from './Category';

const Categories = ({categories})=> {

    return (

        <div className='container-fluid d-flex justify-content-center'>
          <div className="row ">
          {categories && categories.map(category => {
            return (
              <Category category={category} key={category.id} />
            )
          })}
          </div> 
        </div>
    )
}


export default Categories;