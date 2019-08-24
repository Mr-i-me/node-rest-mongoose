const mongoose = require('mongoose');
const validator = require('validator');

const aprovalSchema = new mongoose.Schema({
  aprovado: {
    type: Boolean,
    default: false
  }
});

const photoSchema = new mongoose.Schema({
  documento: {
    type: String,
    required: [true, 'Document is required'],
  },
  comprovanteRenda: {
    type: String
  },
  imovelPhotos: {
    type: String
  }
});

const userSchema = new mongoose.Schema({
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
  emprestimo: {
    type: Number,
    required: true,
    validate: {
      validator(emprestimo) {
        return validator.isAlphanumeric(emprestimo);
      },
    },
  },
  renda: {
    type: Number,
    default: 0
  },
  birth: {
    type: Date,
    default: Date.now
  },
  estadoCivil: {
    type: ['solteiro(a)', 'casado(a)', 'divorciado(a)'],
    default: undefined
  },
  address: {
    type: String,
    default: ""
  },
  photo: Photo,
  approved: Approved
});


mongoose.model('User', userSchema);
module.exports = mongoose.model('User');


mongoose.model('Photo', photoSchema);
module.exports = mongoose.model('Photo');


mongoose.model('Aproval', aprovalSchema);
module.exports = mongoose.model('Aproval');
