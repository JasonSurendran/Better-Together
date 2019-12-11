//Imports
import React, { Fragment, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';


//Signup function to accept the email,name and password data from the form
//Destructure alert and pull it out of props
const Register = ({setAlert, register, isAuthenticated}) => {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password: '',
        password2: ''
    });


    const { name, email, password, password2 } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const onSubmit = async e=> { 
        e.preventDefault(); 
        if (password !== password2){
            //Pass this as a message to the actions/alert, with type 'danger'
            setAlert('Passwords do not match', 'danger');
        } else {
            register({ name, email, password});
        }
    }; 

    //Once you are logged in you will always be sent to dashboard
    if(isAuthenticated){
      return <Redirect to= "/dashboard" />
    }


    return (
      //Create fragment element in order to return multiple elements
      //Return the signup page
        <Fragment>
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
      <form className="form" onSubmit={ e => onSubmit(e)} >
        <div className="form-group">
          <input type="text" placeholder="Name" name="name" value = {name} onChange={e=> onChange(e)} required />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email Address" name="email" value = {email} onChange={e=> onChange(e)} required/>
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value = {password} onChange={e=> onChange(e)} required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            minLength="6"
            value = {password2} onChange={e=> onChange(e)} required
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
        </Fragment>
    )
}


Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})


//Export connectwith setAlert in order to use it
//Now its available within props
//Use connect() in order to bring in the redux action
export default connect(mapStateToProps, { setAlert, register })(Register);
