const mongoose = require('mongoose');
const validator = require('validator');

const model = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    validate: {
      validator(name) {
        return validator.isAlphanumeric(name);
      },
    },
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator(email) {
        return validator.isAlphanumeric(email);
      },
    },
  },
  birth: {
    type: Date,
    required: true,
  },
  city: {
    type: String,
    required: true,
    validate: {
      validator(city) {
        return validator.isAlphanumeric(city);
      },
    },
  },
  ip: {
    type: String,
    required: true,
    validate: {
      validator(ip) {
        return validator.isIP(ip);
      },
    },
  },
});

module.exports = model;
