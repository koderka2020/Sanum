import React, { useContext, userState } from 'react';
import { Link, Redirect } from 'react-router-dom';
// import Navbar from './Navbar';
import { store } from '../store';

const Profile = () => {
  const globalState = useContext(store);
  const { firstname, lastname, email, totalIntake, caloriesBurnt, goal } = globalState.state;
  const { dispatch } = globalState;
  // user useState to take value of goal input field 
  //useState hook here 
  const [userGoal, setUserGoal ] = useState('');

  const message = () => {
    const statusMessage = '';
    let stats = caloriesBurnt + goal - totalIntake ;
    if ( stats === 0){
      statusMessage = 'You achieved your weekly goal!';
      alert('Celebrate! You achieved your weekly goal!');
    } else if ( stats < 0){
      statusMessage = `You have ${stats} calories to go!`;
    } else {
      statusMessage = `You have exceeded your goals by ${stats} calories!!!`
    }
    return statusMessage;
  };



  const updateGoal = () => {
    const payload = {
      goal: Number.parseInt(userGoal),   // << need the value from the input field 
    }

    dispatch({
      type:'SET_CALORIC_GOAL',
      payload
    });

    fetch('/userTable' ,{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify({goal: payload.userGoal})
    })

  }


  return (
    <div>
      {/* <Navbar/> */}
      <div id='personalInfo'>
        <p>
          First Name: <span style={{color:'green'}}>{firstname}</span></br>
          Last Name: <span style={{color:'green'}}>{lastname}</span></br>
          Email: <span style={{color:'green'}}>{email}</span></br>
        </p>
      </div>

      <div id= 'status-message' >
        <h2>{statusMessage}</h2>
      </div>
      <div id= 'page'>
        <form>
          <p>Set your weekly goal:</p>
          <input type='text' className='form-control' id='goal' placeholder='Your weekly calorie goal'/>
          <button id='add-goal' type='Submit' className='btn btn-secondary' onClick = {updateGoal}>Confirm</button>
        </form>
      </div>
      <div>
        <h3>Burnt Calories: {caloriesBurnt}</h3>
        <h3> Calorie Intake: {totalIntake}</h3>
      </div>
      <div id='pics'>
        <img id='biking' src='src/cycling.jpg' alt= 'biking' width='500'/>
        <img id='' src='src/run.jpg' alt= 'running'/>
        <img id='' src='src/swimmer.jpg' alt= 'swimming'/>
        <img id='' src='src/lofting.jpg' alt= 'lifting'/>
      </div>
      <div id='encourage'>
        <h3>Keep Up The Good Work!</h3>
      </div>
    </div>
    
  )
};

export default Profile;