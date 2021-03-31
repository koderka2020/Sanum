import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { store } from '../store';
import config from '../config';

// require('dotenv').config();

const Login = () => {
  const globalState = useContext(store);
  const { dispatch } = globalState;

  const responseGoogle = (response) => {
    if (response.profileObj){
      const payload = {
        firstname: response.profileObj.givenName,
        lastname: response.profileObj.familyName,
        email: response.profileObj.email,
        loginRedirect: true,
      };
      dispatch({ 
        type: 'SET_USER',
        payload,
      });
      // console.log('response.profileObj: ', response.profileObj)
    } else {
      console.log('User could not log in');
    }
  }

  // console.log(globalState);
  const { loginRedirect } = globalState.state;
  if (loginRedirect) {
    return <Redirect to='/profile'/>
  }

  //whether or not the user exists in our db
    // if user has visited
    // if user has not visited

  return (
    <div>
      <GoogleLogin 
        clientId = {config.client_id}
        buttonText="Login with Google Account"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        // isSignedIn={true}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

export default Login;
