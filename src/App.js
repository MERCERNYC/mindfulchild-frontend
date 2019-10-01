import React from 'react';
import CategoriesContainer from './containers/CategoriesContainer';
import NavBar from './components/NavBar'
import Home from './components/Home';
import NotFound from './components/NotFound'
import './App.css';

class App extends React.Component{
  render() {
    return (
     
      <div className="App">
        <NavBar/>
        <Home/>
        <CategoriesContainer/>
        <NotFound/>
      </div>
  
    ); 
  } 
}

export default App;
