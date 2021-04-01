import React, { Component } from 'react';

const FeedItem = (props) => {

  return (
    <div>
      <img src="src/cloud.png" alt="cloud" id ="cloud"/>
        <h3>
          username
        </h3>
      <i className="far fa-heart"></i>
      <i className="far fa-comment-dots"></i>
      <div>
        <p>
          Caption Fetch
        </p>
        <p>
          Calorie/Exercise Fetch
        </p>
      </div>
    </div>
  )
  // return <div></div>;
};


export default FeedItem;