const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const profileSchema = new mongoose.Schema({
  firstName: {type:String,required:true},
  lastName: {type:String,required:true},
  email: {type:String,required:true,unique:true},
  phone: {type:String,required:true,unique:true,minlength:10,maxlength:10},
  password: {type:String,required:true}, // Encrypted password will be stored here
  role: {type:String,required:true,enum:["Admin","Counselor","User"],default:"User"},
  createdAt: Date
});


const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
