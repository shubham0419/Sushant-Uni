const jwt = require("jsonwebtoken")

const isLoggedIn = async(req,resizeBy,next)=>{
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decode = jwt.verify(token,process.env.JWT_SECRET);
    if(!decode){
      return res.status(403).json({message:"unauthorized"})
    }
    next();
  } catch (error) {
    res.status(403).json({message:error.message})
  }
}

module.exports = isLoggedIn