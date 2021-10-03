const { Schema, model } = require('mongoose');

const locationSchema = new Schema(
  {
    name: {
      type: String,
      required: 'Required',
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    location: {
      type: String,
      required: true
    },

  },
  {
    toJSON: {
      getters: true
    }
  }
);

const Place = model('Place', locationSchema);

module.exports = Place;