import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import AdminDashboardActions from './adminDashboardActions';
import { getCurrentAdminProfile } from '../../actions/adminProfile';
import Experience from './Experience';
import Progress from './Progress';

const Dashboard = ({
  getCurrentAdminProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentAdminProfile();
  }, []);

  return loading && profile === null ? (
    <Spinner />
  ) : (
      <section className="container-form-patientDashboard">
        <h1 className='large text-primary'>ADMINISTRATOR DASHBOARD</h1>
        <p className='lead'>
          <i className='fas fa-user whiteText2'></i> Admin Portal for:{' '}
          {user && user.name}
        </p>
        {profile !== null ? (
          <Fragment>
            <AdminDashboardActions />
            <Experience experience={profile.experience} />
            <Progress progress={profile.progress} />
          </Fragment>
        ) : (
            <Fragment>
              <p className='boldText'>
                You have not yet set up a profile.  Please add profile here.
          </p>
              <Link to='/create-profile' className='btn btn-primaryAdmn my-1'>
                Create Admin Profile
          </Link>
            </Fragment>
          )}
      </section>
    );
};

Dashboard.propTypes = {
  getCurrentAdminProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentAdminProfile })(Dashboard);

// const adminDashboard = props => {

//     return (
//         // <Spinner />

//         <Fragment>

//             <AdminDashboardActions />

//         </Fragment>
//     )

// }

// adminDashboard.propTypes = {

// }

// export default adminDashboard;
