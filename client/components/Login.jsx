import React from 'react';
import {Link, Redirect} from 'react-router-dom';


const Login = (props) => {
  return (
    <div>
      <p>This is Login</p>

      <Link to='/profile'>
        go to profile
      </Link>
    </div>
  );
};

export default Login;