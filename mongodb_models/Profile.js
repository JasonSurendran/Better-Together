//Import
const mongoose = require('mongoose');

//Setup Profie Components
const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  location: {
    type: String
  },
  interests: {
    type: [String],
    required: true
  },
  bio: {
    type: String,
  },

  //Add option to add social media components if needed
  social: {
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    instagram: {
      type: String
    }    
  },

  //Add the date the profile is made
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);