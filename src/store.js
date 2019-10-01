import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import categoryReducer from './reducers/categoryReducer'


const reducer = combineReducers({ 
    categoryReducer
});

// Newer way of setting up middleware
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

//exporting default allows us to import 'store' instead of '{ store }'
export default store;