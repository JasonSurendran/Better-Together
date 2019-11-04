//Imports
import uuid from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './types';

//Display type of alert and add it to state in reducers/alert.js
export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {
    //Generate ID for that alert
    const id = uuid.v4();
    //dispatch alert
    dispatch({
        type: SET_ALERT,
        payload: { msg, alertType, id }
    });

    setTimeout(()=> dispatch({ type: REMOVE_ALERT, payload: id}), timeout);
}