import React, { Component, useContext } from 'react';
import { store } from '../store';

const NavBar = (props) => {
  const globalState = useContext(store);
  console.log('State read in Navbar >>> ', globalState); // this will return { color: red }

  return(
    <div>
      Navbar
    </div>
  )
}

export default NavBar;