import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import PatientProfileItem from './PatientProfileItem';
import { getProfiles } from '../../actions/profile';
// import Experience from '../dashboard/Experience';
// import Progress from '../dashboard/Progress';

const PatientProfile = ({ getProfiles, profile: { profiles, loading } }) => {
    useEffect(() => {
        getProfiles();
    }, [getProfiles]);
    return (
        <Fragment>
            {loading ? (
                <Spinner />
            ) : (

                    <Fragment>
                        {/* <h1 className='large text-primary'>Developers</h1> */}
                        <p className='lead'>
                            <i className='fab fa-connectdevelop' /> Administrator Profiles:
  </p>
                        <div className='profiles'>
                            {profiles.length > 0 ? (
                                profiles.map(profile => (
                                    // <PatientProfileItem key={profile._id} profile={profile} />
                                    // <Experience experience={profile.experience} />
                                    // <Progress progress={profile.progress} /> 

                                    <Fragment>

                                        <PatientProfileItem key={profile._id} profile={profile} />
                                        {/* <Experience experience={profile.experience} />
                                        <Progress progress={profile.progress} /> */}
                                    </Fragment>
                                ))

                            ) : (
                                    <h4>No profiles found...</h4>
                                )}
                        </div>
                    </Fragment>

                )}
        </Fragment>



    );
};

PatientProfile.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile
});

export default connect(
    mapStateToProps,
    { getProfiles }
)(PatientProfile);
