import React from 'react';
import CategoriesContainer from './containers/CategoriesContainer';
import NavBar from './components/NavBar'
import NotFound from './components/NotFound';
import Home from './components/Home';

import './App.css';

class App extends React.Component{

  render() {
    return (
      <div className="App">
        <NavBar/>
        <Home/>
        <NotFound/>
        <CategoriesContainer/>
      </div>
    ); 
  } 
}

export default App;
