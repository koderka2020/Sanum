import React, { useContext } from 'react';
import { GoogleLogin } from 'react-google-login';
import { store } from '../store';

const Login = (props) => {
  const globalState = useContext(store);
  const { dispatch } = globalState;

  const responseGoogle = (response) => {
    const payload = {
      firstname: response.profileObj.givenName,
      lastname: response.profileObj.familyName,
      email: response.profileObj.email
    }
    dispatch({ 
      type: 'SET_USER',
      payload
    });
    // console.log('response:', response);
    console.log('response.profileObj: ', response.profileObj)
  }

  //whether or not the user exists in our db
    // if user has visited
    // if user has not visited

  return (
    <div>
      <GoogleLogin 
        clientId="78743048336-gd5ub5rd5kth3l8e49ud6cq624nck819.apps.googleusercontent.com"
        buttonText="Login with Google Account"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        // isSignedIn={true}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  )
    
}

export default Login;