const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
    trim:true
  },
  categories:{
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
  quntity:{
    type:Number,
    required:true,
    min:0
  },
  sizes:{
    type:String,
    enum:["XS","S","M","L","XL","XXl","XXXl"],
  },
  colors:{
    type:String
  },
  gender:{
    type:String,
    enum:["male","female"]
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
      typt:Number,
      default:0
    },
    discountAmount:{
      type:Number,
      default:0
    }
  }
},
{
  timestamps:true
});

const Product = mongoose.model("Product",productSchema);
module.exports = Product
