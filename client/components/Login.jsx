import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';

const Login = (props) => {
  const responseGoogle = (response) => {
    // console.log('response:', response);
    console.log('response.profileObj: ', response.profileObj)
    // save the name, given name, familyname, email
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
        isSignedIn={true}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  )
    
}

export default Login;