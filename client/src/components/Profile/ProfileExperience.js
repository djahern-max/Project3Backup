import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';

const ProfileExperience = ({ experience: {
    patientName,
    symptoms,
    location,
    current,
    from,
    to,
    description


} }) =>
    <div className="floatCenter">
        <h3 className="text-dark">{patientName}</h3>
        <p>
            <Moment format="YYYY/MM/DD">{moment.utc(from)}</Moment> -{' '}
            {!to ? ' Now' : <Moment format="YYYY/MM/DD">{moment.utc(to)}</Moment>}
        </p>
        <p >
            <strong className="text-primaryADMN">Location:</strong> {location}
        </p>
        <p>
            <strong className="text-primaryADMN">Symptoms:</strong> {symptoms}
        </p>
        <p>
            <strong className="text-primaryADMN">Description:
                <br />
            </strong> {description}
        </p>
    </div>


ProfileExperience.propTypes = {
    experience: PropTypes.array.isRequired,

}

export default ProfileExperience
