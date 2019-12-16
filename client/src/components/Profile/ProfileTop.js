import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProfileAction from '../profiles/ProfileAction';


const ProfileTop = ({
    profile: {
        _id, user, name, yearsOfService, hospital, location, education, specialty, goals
    }

}) => {
    return (

        <div>
            <div className="profileTopADMN">
                <img
                    class="round-img my-1"
                    src=""
                    alt=""
                />
                <div>
                    <Link to='/profiles' className='test1'>
                        Back To Profiles
            </Link>
                </div>
                <br />


                <h1 class="primary">{name}</h1>
                <p class="lead">{hospital}</p>
                <p>{location}</p>
                <p>Years in Practice: {yearsOfService}</p>
                <p>Education:  {education}</p>
                <p>Specialty:  {specialty}</p>

                <div class="icons my-1">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-globe fa-2x"></i>
                    </a>
                    <a href="">                  </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-twitter fa-2x"></i>
                    </a>
                    <a href="">                  </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-facebook fa-2x"></i>
                    </a>
                    <a href="">                  </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-linkedin fa-2x"></i>
                    </a>
                    <a href="">                  </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-youtube fa-2x"></i>
                    </a>
                    <a href="">                  </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-instagram fa-2x"></i>
                    </a>
                </div>
                <div>
                    {goals && (
                        <Fragment>
                            <h2>{name.trim().split(' ')[0]}'s Goals</h2>
                            <p>
                                {goals}
                            </p>
                            <div class="line"></div>
                        </Fragment>
                    )}
                </div>



            </div>
        </div>


    )
}

ProfileTop.propTypes = {
    profile: PropTypes.object.isRequired,

}

export default ProfileTop
