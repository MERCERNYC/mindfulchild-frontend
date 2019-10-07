import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import "../App.css";


const Home = () => {
  return (

    <Jumbotron fluid>
      <Container className="p-3">
       <>
          <blockquote className="blockquote text-center">
    
             <h1>Be peaceful, kind and accepting.</h1>
             <p className="mb-0 ">“For children, mindfulness can offer relief from whatever difficulties they might be encountering in life.” 
             “It also gives them the beauty of being in the present moment.”</p>
           <footer className="blockquote-footer mb-3"><cite title="Source Title">Annaka Harris</cite></footer>    
          </blockquote>
  
        </>
      </Container>
    </Jumbotron>
  );
};

export default Home;

