//Imports
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

//Function for the Profileitem
const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    location,
    interests
  }
}) => {
  return (
    <div className='profile bg-light'>
      <img src={avatar} alt='' className='round-img' />
      <div>
        <h2>{name}</h2>
        <p className='my-1'>{location && <span>{location}</span>}</p>
        <Link to={`/profile/${_id}`} className='btn btn-primary'>
          View Profile
        </Link>
      </div>
      <ul>
        {interests.slice(0, 4).map((interest, index) => (
          <li key={index} className='text-primary'>
            <i className='fas fa-check' /> {interest}
          </li>
        ))}
      </ul>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;