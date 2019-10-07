import React from 'react';
import CategoriesContainer from './containers/CategoriesContainer';
// import Category from './components/Category'
import NavBar from './components/NavBar'
import Home from './components/Home';
import NotFound from './components/NotFound'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'


class App extends React.Component{
  render() {
    return (
     <Router>
        <div className="App">  
           <NavBar/>
           <Switch>
              <Route exact path='/categories' component={CategoriesContainer}/>
              <Route exact path='/categories/:category.id' component={CategoriesContainer}/>
              <Route path='/' component={Home}/>
              <NotFound/>
           </Switch>
           
      </div>
     </Router>     
    ); 
  } 
}

export default App;
