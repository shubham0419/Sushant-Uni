const Product = require("../model/produt.model");



const allProducts = async(req,res)=>{
  try {
    const products = await Product.find({});
    res.status(200).json({message:"produsts fethed Successfully",products})
  } catch (error) {
    res.status(400).json({message:error.message})
  }
}

const createProduct = async(req,res)=>{
  try {
    const {name,productType,price,quantity,category,size,color,gender,wearType} = req.body;

    const product = await Product.create({
      name,
      price,
      quantity,
      productType,
      color,
      gender,
      wearType,
      category,
      size,
      createdBy:req.user._id,
    });

    res.status(200).json({message:"product Created Successfully",product});
  } catch (error) {
    res.status(400).json({message:error.message})
  }
}

const updateProduct  = async(req,res)=>{
  try {
    const {id} = req.params;
    const updatedProduct = await Product.findByIdAndUpdate(id,req.body);

    res.status(200).json({message:"product Updated Successfully",updatedProduct});
  } catch (error) {
    res.status(400).json({message:error.message})
  }
}

const deleteProduct = async(req,res)=>{
  try {
    const {id} = req.params;
    const deletedproduct = await Product.findByIdAndDelete(id);

    res.status(200).json({message:"product Deleted Successfully",deletedproduct});
  } catch (error) {
    res.status(400).json({message:error.message})
  }
}

module.exports = {allProducts,createProduct,updateProduct,deleteProduct}