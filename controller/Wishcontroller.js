import { json } from "express";
import { Wishlist } from "../modal/Wishlist";

export const addwishlist = async(req,res)=>{

    const userId = req.user_id;
    const {productId} = req.body
    try{
        const wishlist = await Wishlist.findOne({userId})

        if(!wishlist){
            wishlist = new wishlist({userId,productId:[productId]})
        }else{
            if(!wishlist.products.includes(productId)){
                wishlist.productId.push(productId)
            }
        }

        await wishlist.save()
        res.status(200).json(wishlist)
    }catch(err){
        console.log(err)
        res.status(500).json("server error",err)
    }
}


export const removewishlist = async (req,res) =>{

    const userid = req.user._id;
    const {productId}= req.body;

    try{
   
        const wishlist = await wishlist.findOne({userid})
        if(!wishlist){
            res.status(404).json({message:"wish list not found"})
        }
        wishlist.productId =  await wishlist.productId.filter((id)=>{
            
            id.toString()!== productId
            
        });
        await wishlist.save()

        res.status(200).json("remove from wishlist ",wishlist)

    }catch(err){

        res.status(500).json({message:" server error",err})

    }
}


 export const getwishlist = async(req,res)=>{

   const userId = req.user._Id;
   try{

     const wishlist = await Wishlist.findOne({userId}).populate("product")

     if(!wishlist){
        res.status(404).json({message:"not found the wishlist"})
     }

     res.status(200).json(wishlist)

   }catch(error){

    res.status(500).json({message:"Server error "})
   }

 }



