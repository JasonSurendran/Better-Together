//Imports
import axios from 'axios';
import { setAlert } from './alert';
import {REGISTER_SUCCESS,REGISTER_FAIL} from './types';


//Register User
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
