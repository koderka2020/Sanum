import React, { Component, useContext } from 'react';
import { store } from '../store';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  const globalState = useContext(store);
  // console.log('State read in Navbar >>> ', globalState); // this will return { color: red }

  return(
    <div className='nav'>
      <div id='nav-feed'>
        <Link to= '/feed'><img id='feedlogo' src='../../src/feed.png' alt='Feed Logo'/> </Link>
      </div> 

      <div id='nav-user'>
        <Link to= '/profile'> <img id='profPic' src={globalState.state.imageUrl} alt='Profile Pic'/></Link>
        <p>{globalState.state.firstname}</p>
      </div>

      <div id='nav-logout'>
        <Link to='/'><button id='logout-btn'>Log Out</button></Link>
      </div>
    </div>
  )
}

export default NavBar;