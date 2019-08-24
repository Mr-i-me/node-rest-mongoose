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
  cpf: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator(cpf) {
        return validator.isAlphanumeric(cpf);
      },
    },
  },
  valorEmprestimo: {
    type: Number,
    required: true,
    validate: {
      validator(valorEmprestimo) {
        return validator.isAlphanumeric(valorEmprestimo);
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
