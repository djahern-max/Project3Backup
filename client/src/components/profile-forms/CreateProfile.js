import React, { useEffect, useState, Fragment } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';

const Createprofile = ({
  createProfile,
  getCurrentProfile,
  profile: { profile, loading },
  history
}) => {
  const [formData, setFormData] = useState({
    name: '',
    Location: '',
    yearsOfService: '',
    hospital: '',
    education: '',
    status: '',
    specialty: '',
    goals: ''
  });
  //   const [displaySocialInputs, toggleSocialInputs] = useState(false);
  const { name, Location, yearsOfService, hospital, education, status, specialty, goals } = formData;
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history);
  };
  useEffect(() => {
    getCurrentProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getCurrentProfile]);
  return loading && profile === null ? (
    <Redirect to='/adminDashboard' />
  ) : (
      <section className="container-form-patientCreatePatientProfile">
        <h1 className='large text-primary'>Create Your Administrative Profile</h1>
        <p className='lead'>
          <i className='fas fa-user' /> Please enter your credentials.
      </p>
        <small className='whiteText'>* = required field</small>
        <form className='form' onSubmit={e => onSubmit(e)}>
          <div className='form-group'>
            <select name='status' value={status} onChange={e => onChange(e)}>
              <option value='0'>* What is your specialty?</option>
              <option value='Psychologist'>Psychologist</option>
              <option value='Psychiatrist'>Psychiatrist</option>
              <option value='Psychoanalyst'>Psychoanalyst</option>
              <option value='Psychiatric Nurse'>Psychiatric Nurse</option>
              <option value='Psychotherapist'>Psychotherapist</option>
              <option value='Mental Health Councelor'>Mental Health Councelor</option>
              <option value='Clinical Social Worker'>Clinical Social Worker</option>
              <option value='Primary Care Physician'>
                Primary Care Pyhsician
            </option>
              <option value='Addiction Councelor'>Addiction Councelor</option>
              <option value='Other'>Other</option>
            </select>
            <small className='whiteText'>
              If your specialty is not listed please select "other."
          </small>
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Name & Title'
              name='name'
              value={name}
              onChange={e => onChange(e)}
            />
            <small className='whiteText'>
              Please list your name and title.
          </small>
          </div>
          {/* <div className='form-group'>
            <input
              type='text'
              placeholder='Location'
              name='Location'
              value={Location}
              onChange={e => onChange(e)}
            />
            <small className='whiteText'>
              Which hospital are you affiliated with?
          </small>
          </div> */}
          <div className='form-group'>
            <input
              type='text'
              placeholder='Which college or University Did You Attend?'
              name='education'
              value={education}
              onChange={e => onChange(e)}
            />
            <small className='whiteText'>
              Please list any post-secondary education?
          </small>
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Years in Industry'
              name='yearsOfService'
              value={yearsOfService}
              onChange={e => onChange(e)}
            />
            <small className='whiteText'>
              How long have you worked with patients suffering from cognitive impairment?
          </small>
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Hospital'
              name='hospital'
              value={hospital}
              onChange={e => onChange(e)}
            />
            <small className='whiteText'>
              Which hospital/hospital's are you affiliated with?
          </small>
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='* Specialty'
              name='specialty'
              value={specialty}
              onChange={e => onChange(e)}
            />
            <small className='whiteText'>
              Which areas do you specialize in?
          </small>
          </div>

          <div className='form-group'>
            <textarea
              placeholder='Please list your treatment goals'
              name='goals'
              value={goals}
              onChange={e => onChange(e)}
            />
            <small className='whiteText'>
              What do you hope to achieve through this cognitive improvement
              therapy?
          </small>
          </div>

          <input type='submit' className='btn btn-primaryAdmn my-1' />
          <Link className='btn btn-light my-1' to='/adminDashboard'>
            Go Back
        </Link>
        </form>
      </section>
    );
};

Createprofile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  profile: state.profile
});
export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(Createprofile)
);
