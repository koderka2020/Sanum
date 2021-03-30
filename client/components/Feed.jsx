import React, { Component } from 'react';
import FeedItems from './FeedItems';
import NewMeal from './NewMeal';
import NewExercise from './NewExercise';
import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';

const Feed = (props) => {
  return (
    <div>
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
      <FeedItems/>
    </div>   
  )
} 
 


export default Feed;