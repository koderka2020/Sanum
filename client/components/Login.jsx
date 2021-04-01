import React, { useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { store } from '../store';
import config from '../config';

const Login = () => {
  const globalState = useContext(store);
  const { dispatch } = globalState;

  const responseGoogle = (response) => {
    if (response.profileObj){
      const payload = {
        firstname: response.profileObj.givenName, 
        lastname: response.profileObj.familyName,
        email: response.profileObj.email,
        imageUrl: response.profileObj.imageUrl,
        loginRedirect: true
      }
  
      console.log('response.profileObj: ', response.profileObj)

      // Check existing user or create new user
      
    
     //whether or not the user exists in our db
      // if user has visited
      // if user has not visited
      const credentials = { 
        firstname: payload.firstname,
        lastname: payload.lastname,
        email: payload.email,
        imageUrl: payload.imageUrl,
      };
      // console.log('CREDENTIALSSSSSS', credentials);

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      }

      fetch('/user', options)
        .then(result => result.json())
        .then(result => { 
          console.log('fetch result >>> ', result);

          dispatch({ 
            type: 'SET_USER',
            payload: {
              ...payload,
              userId: result.user[0].userid,
            }
          });
        })
        .catch(err => console.log('error in post fetch on DB credential'));

    } else {
      console.log('User could not log in');
    }
  }

  // console.log(globalState);
  const { loginRedirect } = globalState.state;
  if (loginRedirect) {
    return <Redirect to='/profile'/>
  }

  return (
    <div className='Login'>
      <img id='logo' src='src/Sanum.png' alt= 'logo' width='500'/>
      <div id='google-btn'>
        <GoogleLogin 
          clientId = {config.client_id}
          buttonText="Login with Google Account"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          isSignedIn={true}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    </div>
  )
    
}

export default Login;