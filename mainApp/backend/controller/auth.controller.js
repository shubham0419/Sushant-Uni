const bcrypt = require("bcrypt");
const Users = require("../Users");

const login = async(req,res)=>{
  try {
    
  } catch (error) {
    
  }
}

const register = async(req,res)=>{
  try {
    const {name,email,password} = req.body;
    const isExist = Users.find((user)=>user.email==email);
    if(isExist){
      return res.status(400).json({message:"user with this email already exist"})
    }
    const hashpass = await bcrypt.hash(password,10);
    const newUser = {
      name,
      email,
      password:hashpass
    }
    Users.push(newUser);
    res.status(200).json({message:"user registered successfully"});
  } catch (error) {
    res.status(403).json({message:error.message})
  }
}


module.exports = {login,register}