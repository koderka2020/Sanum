import React, { useContext, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import { store } from '../store';

const Profile = () => {
  const globalState = useContext(store);
  const { firstname, lastname, email, totalIntake, caloriesBurnt, goal } = globalState.state;
  const { dispatch } = globalState;
  // user useState to take value of goal input field 
  //useState hook here 
  const [userGoal, setUserGoal] = useState('');
  console.log('User input for goal >>> ', userGoal);

  const message = () => {
    let statusMessage = '';
    const stats = caloriesBurnt + goal - totalIntake;
    if (stats > 0){
      statusMessage = 'You achieved your weekly goal!';
      // alert('Celebrate! You achieved your weekly goal!');
    } else if (stats < 0){
      statusMessage = `You have ${stats} calories to go!`;
    } else {
      statusMessage = `You have exceeded your goals by ${stats} calories!!!`
    }
    return statusMessage;
  };



  const updateGoal = () => {
    // dispatch Action
    const payload = {
      goal: Number.parseInt(userGoal),   // << need the value from the input field 
    };

    dispatch({
      type: 'SET_CALORIC_GOAL',
      payload,
    });

    const option = {
      email,
      goal: Number.parseInt(userGoal),
    };

    fetch('/user',{
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(option),
    })
      .then(result => result.json())
      .then(result => console.log('Updated user >>> ', result.user.caloricgoal))
      .catch(err => console.log('error in post fetch on DB credential'));

    // clear input field
    const inputField = document.getElementById('goal');
    inputField.value = '';
    // reset the useState
    setUserGoal('');

    // const newgoal= document.getElementById('newgoal').value;
    // const burnt= document.getElementById('burnt').value;
    // const intake= document.getElementById('intake').value;




  };

  return (
    <div>
      <Navbar/>
      <div id='personalInfo'>
        <p>
          <h4>First Name: <span style={{ color: 'green' }}>{firstname}</span></h4>
          <h4>Last Name: <span style={{ color: 'green' }}>{lastname}</span></h4>
          <h4>Email: <span style={{ color: 'green' }}>{email}</span></h4>
        </p>
      </div>

      <div id= 'status-message' >
        <h2>{message()}</h2>
      </div>

      <div id= 'page'>
        <div>
          <p>Set your weekly goal:</p>
          <input
            type="text"
            className="form-control"
            id="goal"
            placeholder="Your weekly calorie goal"
            onChange= { (event) => setUserGoal(event.target.value) }
          />
          <button id='add-goal' className='btn btn-secondary' onClick = {updateGoal}>Confirm</button>
        </div>
      </div>

      <div>
        <h3 id='newgoal'>Current Goal: {goal}</h3>
        <h3 id='burnt'>Burnt Calories: {caloriesBurnt}</h3>
        <h3 id='intake'> Calorie Intake: {totalIntake}</h3>
      </div>

      {/* <div id= 'row'> */}
        <div id='pics'>
          {/* <img id='biking' src='src/cycling.jpg' alt= 'biking' />
          <img id='run' src='src/run.jpg' alt= 'running'/> */}
          <img id='swim' src='src/swimmer.jpg' alt= 'swimming'/>
          {/* <img id='lift' src='src/lifting.jpg' alt= 'lifting'/>
        </div>

        <div id='pics'>
          <img id='climb' src='src/climbing.jpg' alt= 'climbing' />
          <img id='bike' src='src/cyclist.jpg' alt= 'cyclist'/>
          <img id='dance' src='src/Two_dancers.jpg' alt= 'dancers'/>
        </div> */}
      </div>

    
      <div id= 'encourage'>
        <h3>Keep Up The Good Work!</h3>
      </div>
    </div>
  )
};

export default Profile;
