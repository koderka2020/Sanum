import React, { Component } from 'react';
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
import FeedItems from './components/FeedItems';// this tag should be with Feed only?
import FeedPopUp from './components/FeedPopUp';//

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      loggedIn: false,
    };

  }

  render() {
    
    return (
      <div >
        { this.state.loggedIn ? <NavBar/> : null}
          
        <Router>
          <div>
            <Switch>
              <Route path="/" component={Login} exact />

              <Route path="/profile" 
                render = {props => 
                  <Profile {...props} state= {this.state}/>} />
             
              <Route path="/feed" 
                render = {props =>
                  <Feed {...props} state= {this.state}/>} />
              
            </Switch>
          </div>
        </Router>

      </div>
    );
  }
}


export default App;
