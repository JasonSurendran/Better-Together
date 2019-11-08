//Reducer Definition
/*  A reducer is a function that accepts an accumulation and a value and returns a new accumulation. 
    They are used to reduce a collection of values down to a single value.
    In Redux, the accumulated value is the state object, and the values being accumulated are actions. 
    Reducers calculate a new state given the previous state and an action. 
    As your app grows more complex, you'll want to split your reducing function into separate functions, each managing independent parts of the state.*/

//Imports
import { SET_ALERT, REMOVE_ALERT } from '../actions/types'

const initialState = [];

//Add alert to state
export default function(state = initialState, action){
    const { type, payload } = action;
    switch(type){
        case SET_ALERT:
            //Add alert to array (see with redux dev tools)
            return [...state, payload];
        case REMOVE_ALERT:
            return state.filter(alert => alert.id !== payload);
        default:
            return state;
    }
}