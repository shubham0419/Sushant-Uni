const User = require("../model/user.model");


const getUser = async (req,res)=>{
  try {
    const {id} = req.params;
    const user = await User.findById(id);
    res.status(200).json({message:"user fetched successfully",user});
  } catch (error) {
    res.status(403).json({message:error.message})
  }
}

const updateUser = async (req,res)=>{
  try {
    const {id} = req.params;
    const user = await User.findByIdAndUpdate(id,req.body);
    res.status(200).json({message:"user fetched successfully",user});
  } catch (error) {
    res.status(403).json({message:error.message})
  }
}

const toggleWishlist = async (req,res)=>{
  try {
    const {productId} = req.params;

    const user = await User.findById(req.user._id);

    const isProduct = user.wishList.find(prod=>{
      return prod==productId;
    })

    const userid = req.user._id;
    let updatedProduct;

    if(isProduct){
      updatedProduct = await User.updateOne({_id:userid},{$pull:{wishList:productId}})
    }else{
      const newWishList = user.wishList;
      newWishList.push(productId);
      updatedProduct = await User.updateOne({_id:userid},{wishList:newWishList})
    }

    res.status(200).json({message:"product added to whislist",updatedProduct});
  } catch (error) {
    res.status(403).json({message:error.message})
  }
}

const toggleCart = async (req,res)=>{
  try {
    const {productId} = req.params;

    const user = await User.findById(req.user._id);

    const isProduct = user.cart.find(prod=>{
      return prod==productId;
    })

    const userid = req.user._id;
    let updatedProduct;

    if(isProduct){
      updatedProduct = await User.updateOne({_id:userid},{$pull:{cart:productId}})
    }else{
      const newCart = user.cart;
      newCart.push(productId);
      updatedProduct = await User.updateOne({_id:userid},{cart:newCart})
    }

    res.status(200).json({message:"product added to Cart",updatedProduct});
  } catch (error) {
    res.status(403).json({message:error.message})
  }
}

module.exports = {getUser,updateUser,toggleWishlist,toggleCart}