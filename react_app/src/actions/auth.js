//Imports
import axios from 'axios';
import { setAlert } from './alert';
import {REGISTER_SUCCESS,REGISTER_FAIL,LOGIN_SUCCESS,LOGIN_FAIL,USER_LOADED, AUTH_ERROR, LOGOUT } from './types';
import setAuthToken from '../utilities/setAuthToken';

//Load User
export const loadUser = () => async dispatch => {
    if(localStorage.token){
        setAuthToken(localStorage.token);
    }

    try{
        const res = await axios.get('/api/auth');

        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    } catch(err){
        dispatch({
            type: AUTH_ERROR
        })

    }
}

//Register User
//Load user action which will take registered user token
//It will then send a request to the api/auth route
//Will then get the user detials and load them in
export const register = ({ name, email, password }) => async dispatchEvent => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ name, email, password });


    try{
        const res = await axios.post('/api/users', body, config);
        dispatchEvent({
            type: REGISTER_SUCCESS,
            //Payload is data you get back which in this case is a token
            payload: res.data 
        })

        
    dispatch(loadUser());
    } catch (err) {
        const errors = err.response.data.errors;

        //If numerous errors occur, dispay an error message for each error
        if(errors){
            errors.forEach(error => dispatchEvent(setAlert(error.msg, 'danger')));
        }


        dispatchEvent({
            type: REGISTER_FAIL
        })
    }
}


//Login User
export const login = (email, password) => async dispatchEvent => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ email, password });


    try{
        const res = await axios.post('/api/auth', body, config);
        dispatchEvent({
            type: LOGIN_SUCCESS,
            //Payload is data you get back which in this case is a token
            payload: res.data 
        })

        dispatch(loadUser());
    } catch (err) {
        const errors = err.response.data.errors;

        //If numerous errors occur, dispay an error message for each error
        if(errors){
            errors.forEach(error => dispatchEvent(setAlert(error.msg, 'danger')));
        }


        dispatchEvent({
            type: LOGIN_FAIL
        })
    }
};

//Logout
//Clear Profile
export const logout = () => dispatch => {
    dispatch({ type: LOGOUT });
}
