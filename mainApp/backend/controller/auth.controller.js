const bcrypt = require("bcrypt");
const User = require("../model/user.model");
const jwt = require("jsonwebtoken");

const login = async(req,res)=>{
  try {
    const {email,password} = req.body;
    if(!email || !password){
      res.status(401).json({message:"all fields are required"})
    }

    const user = await User.findOne({email}).select('+password');

    if(!user){
      res.status(401).json({message:"email or password is invalid"});
    }

    const isMatched = await bcrypt.compare(password,user.password);
    if(!isMatched){
      res.status(401).json({message:"email or password is invalid"});
    }

    const userAgain = await User.findOne({email});

    const token = jwt.sign({name:user.name,email:user.email,role:user.role,_id:user._id}
      ,process.env.JWT_SECRET,{expiresIn:"7d"})
      
    res.status(200).json({message:"user logged in successfully",userAgain,token});
  } catch (error) {
    res.status(403).json({message:error.message})
  }
}

const register = async(req,res)=>{
  try {
    const {name,email,password,dob,userImg,role} = req.body;
    const isExist =await User.findOne({email:email});
    if(isExist){
      return res.status(400).json({message:"user with this email already exist"})
    }
    const hashpass = await bcrypt.hash(password,10);

    const user = await User.create({
      name,
      email,
      password:hashpass,
      dob:dob ?? "", // default value
      userImg:userImg ?? "",
      role:role ?? "user"
    })

    const token = jwt.sign({name:user.name,email:user.email,role:user.role,_id:user._id}
      ,process.env.JWT_SECRET,{expiresIn:"7d"})

    res.status(200).json({message:"user registered successfully",user,token});
  } catch (error) {
    console.log(error);
    res.status(403).json({message:error.message})
  }
}


module.exports = {login,register}