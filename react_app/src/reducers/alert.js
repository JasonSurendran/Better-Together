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