const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  FirstName: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: false,
  },
  Address:{
    type:String,
    required:true
  },
  MobileNo:{
    type:String,
    required:true
  },
  EmailId:{
    type:String,
    required:true
  },
  Password:{
    type:String,
    required:true
  },
  avatar: {
    type: Buffer,
    required: false
  },
  age: {
    type: Number,
    required:false,
  },
  CartId:{
    type:Number,
    required:false,
  },
  CreatedAt:{
    type: Date,
    default:Date.now,
    required:false,
  },
  ModifiedAt:{
    type: Date,
    default:Date.now,
    required:false,
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;