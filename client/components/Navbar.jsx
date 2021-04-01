import React, { Component, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { store } from '../store';

const NavBar = (props) => {
  const globalState = useContext(store);
  const { dispatch } = globalState;

  const logOut = (response) => {
    const payload = {
      firstname: '', 
      lastname: '',
      email: '',
      imageUrl: '',
      loginRedirect: false
    }
    dispatch({ 
      type: 'SET_USER',
      payload
    });
    
  }
   // console.log(globalState);
   const { loginRedirect } = globalState.state;
   if (!loginRedirect) {
     return <Redirect exact to='/'/>
   }


  return(
    <div className='nav'>
      <div id='sanum'><h2>Sanum</h2></div>

      <div className='nav-icons'>
        <div id='nav-feed'>
          <Link to= '/feed'><img id='feedlogo' src='../../src/feed.png' alt='Feed Logo'/> </Link>
        </div> 

        <div id='nav-user'>
          <Link to= '/profile'> <img id='profPic' src={globalState.state.imageUrl} alt='Profile Pic'/></Link>
          <p>{globalState.state.firstname}</p>
        </div>

        <div id='nav-logout'>
          <button id='logout-btn' onClick={logOut}>Log Out</button>
        </div>
      </div>

    </div>
  )
}

export default NavBar;