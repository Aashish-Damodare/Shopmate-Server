
import mongoose from "mongoose";

export const Wishlist = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true

    },
    Product:[
        
{
    type:mongoose.Schema.Types.ObjectId,
ref:"Product"
}


    ]
})

