import React from 'react';
import { Link } from 'react-router-dom';

const ProfileAction = () => {

    return (
        <div className='dash-buttons'>
            <Link to='/patient_profiles' className='button_nav'>
                <i className='' /> View Professional Profile
        </Link>

        </div>
    )

}

export default ProfileAction;