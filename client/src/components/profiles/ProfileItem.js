import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProfileAction from '../profiles/ProfileAction';

const ProfileItem = ({
  profile: { _id, user, name, yearsOfService, hospital, location, education, specialty, goals }
}) => {
  return (
    <div className='profile bg-lightADMN'>
      <ul>
        <li><h2>{name}</h2></li>
        <li>{hospital && <span> {hospital}</span>}</li>
        <li>Education: {education}</li>
        <li>Experience: {yearsOfService}</li>
        <Link to={`/profile/${user}`} className="button_nav">
          View Profile
        </Link>
      </ul>
      <ul>
        Specialization:{' '}
        {specialty.slice(0, 4).map((specialty, index) => (
          <li key={index} className='text-primary'>
            <i className='' /> {specialty}
          </li>
        ))}
        <p>
          "{goals}"</p>
      </ul>

    </div>
  );
};

export default ProfileItem;
