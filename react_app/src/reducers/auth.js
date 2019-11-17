//Reducer Definition
/*  A reducer is a function that accepts an accumulation and a value and returns a new accumulation. 
    They are used to reduce a collection of values down to a single value.
    In Redux, the accumulated value is the state object, and the values being accumulated are actions. 
    Reducers calculate a new state given the previous state and an action. 
    As your app grows more complex, you'll want to split your reducing function into separate functions, each managing independent parts of the state.*/

//Imports
import{REGISTER_SUCCESS,REGISTER_FAIL} from'../actions/types'

//In Initial Auth State Set Parameters
const initialstate = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null
}

export default function(state = initialstate, action){
    const { type, payload } = action;
    
    switch(type){

        //If registering user is a success
        case REGISTER_SUCCESS:
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            }
        case REGISTER_FAIL:
            localStorage.removeItem('token');
            return{
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            }

        default:
            return state;
    }
}