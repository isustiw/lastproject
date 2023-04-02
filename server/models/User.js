const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  googleId: {
    type: String,
    required: true
  },
  displayName: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: false
  },
  lastName: {
    type: String,
    required: false
  },
  profileImage: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  inviteCode: {
    type: String,
    unique: true
  },
  updateAt: {
    type: Date,
    default: Date.now()
  }

});

module.exports = mongoose.model('User', UserSchema);