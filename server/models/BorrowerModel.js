const mongoose = require('mongoose');

const schema = mongoose.Schema({
    masterEmail:String,
    fName: String,
  lName: String,
  gender: String,
  dob: String,
  occupation: String,
  address: String,
  city: String,
  state: String,
  zipcode: String,
  email: String,
  id: String,
  phone: String
})

const model = mongoose.model('borrowers', schema);

module.exports = model;
