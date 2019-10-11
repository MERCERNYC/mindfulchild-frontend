import React from 'react';
import CategoriesContainer from './containers/CategoriesContainer';
// import Category from './components/Category'
import Header from './components/Header'
import Home from './components/Home';
import NotFound from './components/NotFound'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component{
  render() {
    return (
     <Router>
        <div className="App">  
         
          <Header/>

           <Switch>   
              <Route exact path='/categories' component={CategoriesContainer}/>
              <Route exact path='/categories/:id' component={CategoriesContainer}/>
              {/* <Route exact path='/categories/:id/activity' component={ActivityContainer}/> */}
              <Route exact path='/' component={Home}/>
              <Route path="*" component={NotFound} />
           </Switch>
           
      </div>
     </Router>     
    ); 
  } 
}

export default App;