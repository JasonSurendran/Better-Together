//Imports
const mongoose = require('mongoose');

//Setup components of a post
const Schema = mongoose.Schema;
const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  text: {
    type: String,
    required: true
  },
  name: {
    type: String
  },
  avatar: {
    type: String
  },

  //Add number of likes the post gets
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      }
    }
  ],

  //Add number of comments
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
      text: {
        type: String,
        required: true
      },
      name: {
        type: String
      },
      avatar: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],

  //Add the date of the post
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Post = mongoose.model('post', PostSchema);