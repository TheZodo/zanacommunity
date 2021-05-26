const mongoose = require('mongoose');

const schema = mongoose.Schema({
    borrowerId:String,
    file: String,
    contentType: String,
    
})

const model = mongoose.model('borrower-files', schema);

module.exports = model;
