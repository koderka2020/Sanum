import React, { Component, useContext, useEffect } from 'react';
import FeedItem from './FeedItem';
import NewMeal from './NewMeal';
import NewExercise from './NewExercise';
import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';
import Navbar from './Navbar';
import { store } from '../store';

// request all posts and update the total caloric intake / expense from the post
// for the current user

const fetchFeed = () => {
  // fetch all posts data

  // iterate through each post, push the data into a feedItem component
  // at the same time, calculate the total 
}

const Feed = (props) => {
  const { dispatch, state } = useContext(store);
  const { firstname, lastname } = state;

  return (
    <div className='feed-container'>
      <Navbar/>

      <div className='inputs-container'>
        <div className='inputs'>
          <Popup trigger={<button> New Meal</button>} position="right center" modal>
            <div>
              <NewMeal />
            </div>
          </Popup>
          <Popup trigger={<button> New Exercise</button>} position="right center" modal>
            <div>
              <NewExercise />
            </div>
          </Popup>
        </div>
      
        <div className='feed'>
          <FeedItem/>
        </div>
      </div>
    </div>   
  )
} 
 


export default Feed;