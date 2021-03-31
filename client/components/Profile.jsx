import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Profile = (props) => {
  return (
    <div>
      <p>This is profile</p>

      <Link to='/feed'>
        go to feed
      </Link>
    </div>
  );
};


export default Profile;