const jwt = require("jsonwebtoken")

const isLoggedIn = async(req,res,next)=>{
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decode = jwt.verify(token,process.env.JWT_SECRET);
    if(!decode){
      return res.status(403).json({message:"unauthorized"})
    }
    req.user = decode;
    next();
  } catch (error) {
    res.status(403).json({message:error.message})
  }
}

const isAdmin = async(req,res,next)=>{
  try {
    const role = req.user.role;

    if(role !== "admin"){
      return res.status(403).json({message:"you are not Authorized"});
    }
    next();
  } catch (error) {
    res.status(403).json({message:error.message})
  }
}

module.exports = {isLoggedIn,isAdmin}