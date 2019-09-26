import { combineReducers } from 'redux';
import { categoryReducer } from './categoryReducer';
// import all other reducers

const rootReducer = combineReducers({
  categories: categoryReducer
});

export default rootReducer;