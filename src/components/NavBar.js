import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
 
      <Navbar expand="lg" variant="light" bg="light">
        <div class='Navbar.Brand'>
          <Link >MindFul Child</Link>
        </div>
      </Navbar>
  
  )
}

  



export default NavBar;


