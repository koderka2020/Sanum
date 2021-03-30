import React, { Component } from 'react';
import Profile from './components/Profile';
import Feed from './components/Feed';
import FindFriends from './components/FindFriends';
import Login from './components/Login';
import NavBar from './components/NavBar';
import FriendProfile from './components/FriendProfile';
import FeedItems from './components/FeedItems';
import FeedPopUp from './components/FeedPopUp';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';


const App = (props) => {
  return (
    <div>   
      <Feed />
    </div>
  )
}






export default App;
