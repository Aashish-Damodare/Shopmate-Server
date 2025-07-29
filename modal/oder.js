import mongoose, { mongo, Schema } from "mongoose";

const OderSchema = new mongoose.Schema({
userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user",
    required:true
},
item:[
  {  productId:{

    type:mongoose.Schema.Types.ObjectId,
    ref:"user",
    },
    quantity:Number,
    price:String
}
],
totalPrice:{
    type:Number,
    required:true
},
SchippingAddress:{
    type:String,
    enum:["cod","online"],
    default:"cod"
},
PaymentMethod:{
    type:String,
    enum:["pending","confirmed","Shipped","Delivered"],
    default:"pendding"
},
Status:{
    type:String,
    enum:["pending","Confirmeted","Shipped","Delivered"],
    default:"pendding"
},
createAt:{
    type:Date,
    default:Date.now,
},
    



})

 export  const oder = mongoose.model("oder",OderSchema);
