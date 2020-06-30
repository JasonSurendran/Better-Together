//Imports
import React from 'react';
import { Link } from 'react-router-dom';

//Function to Display Dashboard Actions
const DashboardActions = () => {
  return (
    <div className='dash-buttons'>
      <Link to='/edit-profile' className='btn btn-light'>
        <i className='fas fa-user-circle text-primary' /> Edit Profile</Link>
    </div>
  );
};

export default DashboardActions;