import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

const PatientProfileItem = ({ profile: {
    user,
    name,
    location,
    yearsOfService,
    hospital,
    education,
    status,
    specialty,
    goals

}
}) => {
    return (
        <div className="profile bg-light">
            <div>
                <h2>{name}</h2>
                <p>{hospital}</p>
                <p>{location}</p>
                <Link to={`/profile/${user}`} className='btn btn-primary'>
                    View Profile
        </Link>

            </div>
        </div>
    )
}

PatientProfileItem.propTypes = {

    profile: PropTypes.object.isRequired,


}

export default PatientProfileItem
