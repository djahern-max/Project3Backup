import React, { Fragment, useEffect, Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getCurrentProfile } from '../../actions/profile';
import Particles from 'react-particles-js';
import Gamefeed from '../Gamefeed'
import Dajjmafeed from '../Dajjmafeed'
class ParticleBackground extends Component {
  particleOpt = {
    particles: {
      number: {
        value: 150,
        density: {
          enable: true,
          value_area: 800
        }
      }
    }
  }

  render(){
      return (
          <div className="dark-overlay particles-overlay">
            <Particles 
            params={this.particleOpt}
          />
          </div>
      );
  };
}
const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);
  return loading && profile === null ? (
    <Spinner />
  ) : (
      <section className='viewport-height'>
        <ParticleBackground />
        {/* <div className="particles-overlay">
        <ParticleBackground />
        </div> */}
        <div>
          <h1 className='large text-primary'>Dashboard</h1>
          <p className='lead'>
            <i className='fas fa-user'></i>Welcome {user && user.name}
          </p>
          {profile !== null ? (
            <Fragment>has</Fragment>
          ) : (
              <Fragment>
                {/* <Link to='/!#' className='btn btn-primary my-1'>
            Create Profile
          </Link> */}
              </Fragment>
            )}
          {/* {profile !== null ? (
          <Fragment>has</Fragment>
        ) : (
            <Fragment>
              <Link to='/Game1' className='btn btn-light my-1'>
                Simple Tic Tac Toe
              </Link>
              <Link to='/Game2' className='btn btn-light my-1'>
                Tetris
              </Link>
              <Link to='/pokemon-clicky' className='btn btn-light my-1'>
                Pokemon Clicky
              </Link>
            </Fragment>
          )} */}
          <Fragment>
            <h2 className="h2title">By DAJJMA!</h2>
          </Fragment>
          {profile !== null ? (
            <Fragment>has</Fragment>
          ) : (
              <Fragment>
                <Dajjmafeed />
              </Fragment>
            )}

          <Fragment>
            <h2 className="h2title">By Other Developers</h2>
          </Fragment>
          {profile !== null ? (
            <Fragment>has</Fragment>
          ) : (
              <Fragment>
                <Gamefeed />
              </Fragment>
            )}
        </div>
      </section>
    );
};
Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});
export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
