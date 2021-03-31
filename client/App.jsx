import React from 'react';
// import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Profile from './components/Profile';
import Feed from './components/Feed';
// import FindFriends from './components/FindFriends';
import Login from './components/Login';
// import NavBar from './components/Navbar'; // does this need to be within switch or outside  of it
// import FriendProfile from './components/FriendProfile';
// import FeedItems from './components/FeedItems';
// import FeedPopUp from './components/FeedPopUp';
import { store, StateProvider } from './store';


const App = (props) => {
  return (
    <StateProvider>
      <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/profile" component={Profile} />
            <Route path="/feed" component={Feed}/>
          </Switch>
      </Router>
    </StateProvider>
  )
}

export default App;

