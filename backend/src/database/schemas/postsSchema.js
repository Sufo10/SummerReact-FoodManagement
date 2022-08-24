const { Schema, model } = require('mongoose');
const autoIncrementModelID = require('./counterSchema');

const postsSchema = new Schema({
  postId: {
    type: Number,
  },
  name: {
    type: String,
    trim: true,
    required: true
  },
  title: {
    type: String,
    trim: true
  },
  phone: {
    type: Number,
    trim: true
  },
  address: {
    type: String,
    trim: true
  }
});

postsSchema.pre('save', function (next) {
  if (!this.isNew) {
    next();
    return;
  }
  autoIncrementModelID('Counter', this, next);
});
module.exports = model('Post', postsSchema);