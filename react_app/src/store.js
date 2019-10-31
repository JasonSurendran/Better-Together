//Reducer Definition
/*  A reducer is a function that accepts an accumulation and a value and returns a new accumulation. 
    They are used to reduce a collection of values down to a single value.
    In Redux, the accumulated value is the state object, and the values being accumulated are actions. 
    Reducers calculate a new state given the previous state and an action. 
    As your app grows more complex, you'll want to split your reducing function into separate functions, each managing independent parts of the state.*/

//Imports
import { createStore, applyMiddleWare } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';


const initalState = {};
const applyMiddleWare = [thunk];

//Create Redux store
const store = createtore(rootReducer, initialState, composeWithDevTools (applyMiddleWare(...middleware)));

export default store;