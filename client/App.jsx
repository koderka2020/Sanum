import React, { setState } from 'react';
import Profile from './components/Profile';
import Feed from './components/Feed';
import FindFriends from './components/FindFriends';
import Login from './components/Login';
import NavBar from './components/NavBar';
import FriendProfile from './components/FriendProfile';
import FeedItems from './components/FeedItems';
import FeedPopUp from './components/FeedPopUp';
import { StateProvider } from './store';


const App = () => {

  return (
    <StateProvider>
      <div>
        <Login/>
        <NavBar/>
      </div>
    </StateProvider>
  )
}

export default App;
