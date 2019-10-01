import React from 'react';
import { connect } from 'react-redux';
import {Route, Switch} from 'react-router-dom'
import {fetchCategories} from '../actions/fetchCategories';
import Categories from '../components/Categories';
import Category from '../components/Category';


class CategoriesContainer extends React.Component {

  // constructor() {
  //   super()
  //   this.state = { categorie: [] }
  // }
    
  componentDidMount() {
    this.props.fetchCategories()
  }
    
  render() {
        return (
          <div >  
           <Switch>
              <Route path='/categories/:id' render={(routerProps) => <Category {...routerProps} category={this.props.category}/>}/>
              <Route path='/categories' render={(routerProps) => <Categories {...routerProps} category={this.props.category}/>}/>
            </Switch>
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