//Imports
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//Function for main landing page after login
const Landing = () => {
  //Return the landing page
    return (
      <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Better-Together</h1>
          <p className="lead">
            Web application to connect the retired members of the community in order to encourage doing activities together
          </p>
          <div className="buttons">
            <Link to='/register' className = 'btn btn-primary'>
              Sign Up
            </Link>
            <Link to='/login' className = 'btn btn-light'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
    )
}

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);