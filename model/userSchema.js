


const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  
    token :{
      type: String,
    }
 
});



module.exports = mongoose.model("user2",userSchema)











