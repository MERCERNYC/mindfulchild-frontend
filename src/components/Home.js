import React from 'react';
import Badge from 'react-bootstrap/Badge'
import { Link } from 'react-router-dom'
import "../App.css";


const Home = () => {
  return (

    <div class="jumbotron">
    <div class="container">
       <>
          <blockquote className="blockquote text-center">
    
             <h1>Be peaceful, kind and accepting.</h1>
             <p className="mb-0 ">“For children, mindfulness can offer relief from whatever difficulties they might be encountering in life.” 
             “It also gives them the beauty of being in the present moment.”</p>
           <footer className="blockquote-footer mb-3"><cite title="Source Title">Annaka Harris</cite></footer>  
          </blockquote>
          <div>
          <h2 className="text-center">
            <Badge  pill variant="light" as={Link} to='/categories'>Start your Journey</Badge>
           </h2>
          </div>       
        </>
      </div>
     
    </div>
   
    
  );
};


export default Home;