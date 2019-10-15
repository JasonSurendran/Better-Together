//Imports
const jwt = require ('jsonwebtoken');
const config = require('config');

//Export this as a async function
module.exports = async function(req,res,next) {

//Get token from header
const token = req.header('x-auth-token');

//Check if not token
if(!token) {
  return res.status(401).json({ msg: 'No Token'});
}

//Verify token
try {
  await jwt.verify(token, config.get('jwtSecret'), (error, decoded)=>{

  if(error){
    res.status(401).json({ msg: 'Invalid Token' });}

  else{
    req.user = decoded.user;
    next();
  }
});
} 

//Check for errors in server
catch (err) {
    res.status(500).json({ msg: 'Server Error' });
  }
};