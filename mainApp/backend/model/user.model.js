const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
    trim:true
  },
  email:{
    type:String,
    required:true,
    trim:true,
    unique:true,
  },
  password:{
    type:String,
    required:true,
    select:false,
  },
  role:{
    type:String,
    enum:["user","admin"],
    default:"user"
  },
  dob:{
    type:String,
  },
  userImg:{
    type:String,
  },
  wishList:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"Product"
    }
  ]
},{
  timestamps:true
})

const User = mongoose.model("User",userSchema);
module.exports = User;