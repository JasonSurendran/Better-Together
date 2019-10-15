//Imports
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check,validationResult } = require('express-validator');

//Imports from relative files
const auth = require('../../middleware/auth')
const User = require('../../models/User');

//GET api/auth
//Test route
router.get('/', auth, async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select('-password');
      res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });
  
  //POST api/auth
  //Authenticate user & get token

  router.post('/',
    //Ensure a valid email and password in inputted
    [
      check('email', 'Please include a valid email').isEmail(),
      check('password', 'Password is required').exists()
    ],
    //Check if there are any errors in validating the inputs
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const { email, password } = req.body;
  
      try {
        let user = await User.findOne({ email });
        //Check if user doesn't even exist
        if (!user) {
          return res
            .status(400)
            .json({ errors: [{ msg: 'User does not exist' }] });
        }
  
        const isMatch = await bcrypt.compare(password, user.password);
        //Check if username and password match
        if (!isMatch) {
          return res
            .status(400)
            .json({ errors: [{ msg: 'Invalid Credentials' }] });
        }
  
        const userid = {
          user: {
            id: user.id
          }
        };
  
        //Give user the webtoken
        jwt.sign(
          userid,
          config.get('jwtSecret'),
          { expiresIn: 360000 },
          (err, token) => {
            if (err) throw err;
            res.json({ token });
          }
        );
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
      }
    }
  );
  
  module.exports = router;