import React, { Component, setState, useContext } from 'react';
import {render} from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from 'react-router-dom';

import Profile from './components/Profile';
import Feed from './components/Feed';
import FindFriends from './components/FindFriends';
import Login from './components/Login';
import NavBar from './components/Navbar'; // does this need to be within switch or outside  of it
import FriendProfile from './components/FriendProfile';
import FeedItems from './components/FeedItems';
import FeedPopUp from './components/FeedPopUp';
import { store, StateProvider } from './store';


const App = (props) => {
  const globalState = useContext(store);
  const loggedIn = globalState.firstname.length > 0;
  
  return (
    <StateProvider>
      <div>
        { loggedIn ? <NavBar/> : null }
          
        <Router>
            <Switch>
              <Route path="/" component={Login}>
                {loggedIn ? <Redirect to = "/profile" /> : <Login />}
              </Route>
 
              <Route path="/profile" component={Profile}>
                {/* render = {props => 
                  <Profile {...props} state={this.state}/>}  */}
              </Route>
             
              <Route path="/feed" component={Feed}>
                {/* render = {props =>
                  <Feed {...props} state={this.state}/>}  */}
              </Route>
              
            </Switch>
        </Router>

      </div>
    </StateProvider>
  )
}

export default App;

