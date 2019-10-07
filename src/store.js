import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import categoryReducer from './reducers/categoryReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(categoryReducer, composeEnhancers(applyMiddleware(thunk)))

//exporting default allows us to import 'store' instead of '{ store }'
export default store;