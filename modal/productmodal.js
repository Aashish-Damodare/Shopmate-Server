import mongoose from "mongoose";

const   ProductSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    brand:{
        type:String
    },
    category:{
        type:String
    },
    discription:{
        type:String
    },
    stock:{
        type:String,
        default:String
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },

    

},{timestamps:true})


const Product = mongoose.model("ProductSchema",ProductSchema);


export default Product;