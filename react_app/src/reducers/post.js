//Reducer Definition
/*  A reducer is a function that accepts an accumulation and a value and returns a new accumulation. 
    They are used to reduce a collection of values down to a single value.
    In Redux, the accumulated value is the state object, and the values being accumulated are actions. 
    Reducers calculate a new state given the previous state and an action. 
    As your app grows more complex, you'll want to split your reducing function into separate functions, each managing independent parts of the state.*/

//Imports
import { GET_POSTS, POST_ERROR, DELETE_POST, ADD_POST, GET_POST, ADD_COMMENT, REMOVE_COMMENT } from '../actions/types';
  
  const initialState = {
    posts: [],
    post: null,
    loading: true,
    error: {}
  };
  
  export default function(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_POSTS:
        return {
          ...state,
          posts: payload,
          loading: false
        };
      case GET_POST:
        return {
          ...state,
          post: payload,
          loading: false
        };
      case ADD_POST:
        return {
          ...state,
          posts: [payload, ...state.posts],
          loading: false
        };
      case DELETE_POST:
        return {
          ...state,
          posts: state.posts.filter(post => post._id !== payload),
          loading: false
        };
      case POST_ERROR:
        return {
          ...state,
          error: payload,
          loading: false
        };
      case ADD_COMMENT:
        return {
          ...state,
          post: { ...state.post, comments: payload },
          loading: false
        };
      case REMOVE_COMMENT:
        return {
          ...state,
          post: {
            ...state.post,
            comments: state.post.comments.filter(
              comment => comment._id !== payload
            )
          },
          loading: false
        };
      default:
        return state;
    }
  }