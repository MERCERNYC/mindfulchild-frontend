import React from 'react';
import { connect } from 'react-redux';
import {fetchCategories} from '../actions/fetchCategories';
import Categories from '../components/Categories';
import CategoryList from '../components/CategoryList';

class CategoriesContainer extends React.Component {
    
  componentDidMount() {
    this.props.fetchCategories()
  }
    
  render() {
        return (
          <div >
            <Categories categories={this.props.categories}/>
            <CategoryList/>
          </div>
        );
      }
    }

    const mapStateToProps = state => {
      return {
        categories: state.categories
      }
    }

export default connect(mapStateToProps, {fetchCategories})(CategoriesContainer);