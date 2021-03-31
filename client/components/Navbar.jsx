import React, { Component, useContext } from 'react';
import { store } from '../store';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  const globalState = useContext(store);
  // console.log('State read in Navbar >>> ', globalState); // this will return { color: red }

  return(
    <div className='nav'>
      <Link to= '/feed'> <button>Feed</button> </Link>

      <div id='user'>
        <Link to= '/profile'> <img id='profPic' src={globalState.state.imageUrl} alt='Profile Pic'/></Link>
        <p>{globalState.state.firstname}</p>
      </div>

      <div>
        <button>Log Out</button>
      </div>
    </div>
  )
}

export default NavBar;