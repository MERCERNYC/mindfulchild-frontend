import React from 'react';
import CommentsContainer from '../containers/CommentsContainer'
import Badge from 'react-bootstrap/Badge'
import { Link } from 'react-router-dom'
import "../App.css";
// import Newsletter from './Newsletter';


const Home = () => {
  return (

    <div className="jumbotron">
    <div className="container">
       <>
          <blockquote className="blockquote text-center">
    
             <h1>Be peaceful, kind and accepting.</h1><br></br>
    
             <h4 className="mb-0 ">“For children, mindfulness can offer relief from whatever difficulties they might be encountering in life.” 
             “It also gives them the beauty of being in the present moment.”</h4>

           <footer className="blockquote-footer mb-3"><cite title="Source Title">Annaka Harris</cite></footer>  
          </blockquote>
          <div><br></br><br></br><br></br><br></br>
        
            <h2 className="text-center">
              <Badge  pill variant="light" as={Link} to='/categories'>Start your Journey</Badge>
             </h2>
          </div> 
          <div><br></br>
             <h2 className="text-center">
               <Badge  pill variant="light" as={Link} to='/newsletter'>Sign up for our Newsletter</Badge>
             </h2>
          </div>      

          <div>
             <CommentsContainer/>
          </div>
        </>
      </div>
    </div>
  );
};


export default Home;