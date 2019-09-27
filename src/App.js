import React from 'react';
import CategoriesContainer from './containers/CategoriesContainer';
import NavBar from './components/NavBar'
import Home from './components/Home';

import './App.css';

class App extends React.Component{

  render() {
    return (
      <div className="App">
        <NavBar/>
        <Home/>
        <CategoriesContainer/>
      </div>
    ); 
  } 
}

export default App;
