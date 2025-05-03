const mongoose = require("mongoose");
const User = require("./user.model");

const productSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
    trim:true
  },
  category:{
    type:String
  },
  productType:{
    type:String,
    enum:["wear","playable","equipment"],
    required:true
  },
  price:{
    type:Number,
    required:true,
    min:0
  },
  quantity:{
    type:Number,
    required:true,
    min:0
  },
  size:{
    type:String,
    enum:["XS","S","M","L","XL","XXl","XXXl"],
  },
  color:{
    type:String
  },
  gender:{
    type:String,
    enum:["male","female","both"]
  },
  wearType:{
    type:String,
    enum:["bottom","top"]
  },
  sale:{
    live:{
      type:Boolean,
      default:false
    },
    discountPercentage:{
      type:Number,
      default:0
    },
    discountAmount:{
      type:Number,
      default:0
    }
  },
  createdBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  }
},
{
  timestamps:true
});

const Product = mongoose.model("Product",productSchema);
module.exports = Product
