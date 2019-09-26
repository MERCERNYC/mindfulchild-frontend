import React from 'react';
import CategoriesContainer from './containers/CategoriesContainer';

class App extends React.Component{

  render() {
    return (
      <div className="App">
        <h1>Mindfull Child</h1>
        <CategoriesContainer/>
      </div>
    ); 
  } 
}

export default App;
