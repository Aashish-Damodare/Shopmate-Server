import { MongooseError } from "mongoose";
import bycrypt from "bcrypt";
import User from "../modal/usermodal.js";
import jwt from "jsonwebtoken"
export const regesterUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const exisestuser = await User.find({ email });
    if (exisestuser) {
      res.status(400).json({
        message: " user is alrady exiest ",
      });
    }

    const hashpassword = await bycrypt.hash(password, 10);

    const newuser = new User({
      name,
      email,
      password: hashpassword,
    });

    await newuser.save();
    res.status(200),
      json({
        message: "user is Ragistred  ",
      });
  } catch (error) {
    res.status(500).json({ massage: "Server is created " });
  }
};


export const loginUser = async (req,res)=>{

    try{
        const {email, password}= req.body;
        const user = await User.find({email})

        if(!user){
            res.status(404).json({
                massage: "user not found "
            })
        }


        const ismatch = await bycrypt.compare(password,user.password);
        if(!ismatch){

            res.status(400).json({
                massage:"wrong password "
            })


        }

        const Tokan = jwt.sign(
            {userId:user._Id},
            process.env.jwt_SCREATE,
            {expiresIn:"7d"}
             
        )

        res.status(200).json({
          message:"Login Secusessfully ",
          Tokan,
          user:{
            name:user.name,
            email:user.email,
            role:user.role
          }
        })


    }catch(error){

      console.log(error)
      res.status(500).json({message:"Server Error" ,error:error.message})

    }

}


