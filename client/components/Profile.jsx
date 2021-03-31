import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import { render } from 'sass';

const Profile = (props) => {

  // const message = () => {
  //   const statusMessage = 'this is temp test';
  //   // let stats = this.props.state.outbound + this.props.state.goal - this.props.state.inbound ;
  //   // if ( stats === 0){
  //   //   statusMessage = 'You achieved your weekly goal!';
  //   //   alert('Celebrate! You achieved your weekly goal!');
  //   // } else if ( stats < 0){
  //   //   statusMessage = `You have ${stats} calories to go!`;
  //   // } else {
  //   //   statusMessage = `You have exceeded your goals by ${stats} calories!!!`
  //   // }
  //   return statusMessage;
  // };

  // const addingGoal = (props) => {
  //   const inputGoal = document.getElementById('goal');
  //   fetch('/userTable' ,{
  //     method: 'POST',
  //     headers: {'Content-Type': 'application/json'},
  //     body:JSON.stringify({goal:this.props.state.goal})

  //   })
  // }

  return (

    <div>

      <Link to='/feed'>
        go to feed
      </Link>

      <div id= 'status-message' >
        {/* <h2>{statusMessage}</h2> */}
      </div>
      <div id= 'page-center'>
        <form>
          <p>Set your weekly goal:</p>
          <input type='text' className='form-control' id='goal' placeholder='Your weekly calorie goal'/>
          {/* <button id='add-goal' type='Submit' className='btn btn-secondary' onClick = {this.props.addingGoal}>Confirm</button> */}
        </form>
      </div>
      <div>
        <h3>Burnt Calories: </h3>
        {/* {this.props.state.totalBurnt} */}
        <h3> Calorie Intake:</h3>
        {/* {this.props.state.totalIntake} */}
      </div>
      <div id='pics'>
        <img id='biking' src='./Assets/cycling.png' alt= 'biking'/>
        <img src='' alt= 'running'/>
        <img src='' alt= 'swimming'/>
        <img src='' alt= 'lifting'/>
      </div>
      <div id='encourage'>
        <h3>Keep Up The Good Work</h3>
      </div>
    </div>
    
  );
  // }
};


export default Profile;