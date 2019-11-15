import React from 'react';
import { connect } from 'react-redux';//HOC
import {fetchCategories} from '../actions/fetchCategories';
import Categories from '../components/Categories';



class CategoriesContainer extends React.Component {

    
  componentDidMount() {
    this.props.fetchCategories()
  }
    
  //There are three categories of lifecycle methods: mounting, updating, and unmounting.
// There are three mounting lifecycle methods:

// componentWillMount
// render
// componentDidMount
// When a component mounts, it automatically calls these three methods, in order.


  render() {

    const {categories} = this.props;
 
    //pass down as a prop to categories list component
    //Categories categories={this.props.categories}

    if (!categories) {
      return <div> Loading ...</div>
    }
  
        return (
          <div className='card-decker'>
            <div className='row'>
              <div className='col s12 m2'>
                <Categories categories={categories} />
              </div>    
            </div>
          </div>
        );
      }
    }

//pass this function to connect so it knows what data to get from the store mapping that to props object
//whatever is returned will show up as props 
//inside categories

    const mapStateToProps = state => {
      
      return {
         categories: state.categories
      }
    }

export default connect(mapStateToProps, {fetchCategories})(CategoriesContainer);
//mapStatetoprops give access to what is currently in store

//Connect is a function communicates with the Provider