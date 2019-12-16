import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileTop from './ProfileTop';
import ProfileExperience from './ProfileExperience';
import GameProgress from './GameProgress';
import { getProfileById } from '../../actions/profile';

const Profile = ({
    getProfileById,
    profile: { profile, loading },
    auth,
    match
}) => {
    useEffect(() => {
        getProfileById(match.params.id);
    }, [getProfileById, match.params.id]);

    return (
        <Fragment>
            {profile === null || loading ? (
                <Spinner />
            ) : (
                    <Fragment>

                        {auth.isAuthenticated &&
                            auth.loading === false &&
                            auth.user._id === profile.user._id && (
                                <Link to='/edit-profile' className='btn btn-dark'>
                                    Edit Profile
                </Link>
                            )}
                        <div className='profile-grid my-1 floatCenter'>
                            <ProfileTop profile={profile} />
                            <br />
                            <div>
                                <div className='profilePatientADMN floatCenter'>
                                    <h2 className='text-primaryADMN'>Patient Profiles:</h2>
                                    {profile.experience.length > 0 ? (
                                        <Fragment>
                                            {profile.experience.map(experience => (
                                                <ProfileExperience
                                                    key={experience._id}
                                                    experience={experience}
                                                />
                                            ))}

                                        </Fragment>
                                    ) : (
                                            <h4>There aren't currently any patients to display.</h4>
                                        )}
                                    <div className="row">
                                        <div className='profileExperienceADMN floatCenterGame'>
                                            <h2 className='text-primaryADMN'>Game Therapy Progress:</h2>
                                            {profile.progress.length > 0 ? (
                                                <Fragment>
                                                    {profile.progress.map(progress => (
                                                        <GameProgress
                                                            key={progress._id}
                                                            progress={progress}
                                                        />
                                                    ))}
                                                </Fragment>
                                            ) : (
                                                    <h4>No Progress Listed</h4>
                                                )}
                                        </div>
                                    </div>
                                </div>


                                <br />
                            </div>
                        </div>
                    </Fragment>
                )}
        </Fragment>
    );
};

Profile.propTypes = {
    getProfileById: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { getProfileById }
)(Profile);


