import jwt from "jsonwebtoken"
import user from "../modal/usermodal.js";
export const verifyTokan =  (req,res,next)=>{

    const authHader = req.headers.authorization;
    if(!authHader){
        return res.status(401).json({
            message:"Tokan is missing"
        })
    }

    const tokan = authHader.split(" ")[1];

    try{
   const decode = jwt.verify(tokan,process.env.jwt_SECREATE)
     req.user = decode;
     next()
    }catch(error){
        return res.status(400).json({message:"invalid tokan"})
     

    }
}

export const Admin = (req,res,next)=>{

    if(req.user.role !== "admin"){
        res.status(403).json({
            message:"Admin accsess denied "
        })
      
    }
next()
}
export const customer = (req,res,next)=>{
    if(req.user.role !== "customer"){
        res.status(403).json({
            message:"customer Accsess denied"
        })
    }
next()
}

export const requireSignIn = async (req, res, next) => {
  try {
    const decode = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
    req.user = decode;
    next();
  } catch (err) {
    res.status(401).json({ success: false, message: "Unauthorized" });
  }
};