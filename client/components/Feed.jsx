import React, { Component } from 'react';
import FeedItems from './FeedItems';
const Feed = (props) => {
  return <div>
    <div>
    <button>
      Enter Calories
    </button>
    <button>
      Enter Exercise
    </button>
    </div>
    
    <FeedItems/>
    </div>;
};


export default Feed;