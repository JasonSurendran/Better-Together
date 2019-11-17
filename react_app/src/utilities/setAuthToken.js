//Imports
import axios from 'axios';

const setAuthToken =token => {
   if(token){
       //Check if there is token and set the token to the header
       axios.defaults.headers.common['x-auth-token'] = token;
   } else {
       delete axios.defaults.headers.common['x-auth-token'];
   }
};

export default setAuthToken;