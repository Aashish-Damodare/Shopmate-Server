import mongoose,{mongo, Schema} from "mongoose";

const CartSchema = new mongoose.Schema({
    userID:{
    type:mongoose.Schema.Types.ObjectId,
    required:true,
    ref:"Cart"
    },
    item:[
        {
        productId:{
            type:mongoose.Schema.Types.ObjectId,
             ref:"Product"
        },
        quantity:{
            type:Number,
            default:-1
        }   

        }

    ]
})

const Cart = mongoose.model("CartShema",CartSchema); 

export  default  Cart;