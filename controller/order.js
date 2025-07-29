import Cart from "../modal/Cart.js";
import { oder } from "../modal/oder.js";

export const placeorder = async (req, res) => {
  const userId = req.user._Id;
  const { SheepingAddress, paymentMethod } = req.body;

  try {
    const cart = await Cart.findOne({ userId }).populate("item.productId");
    if (!cart || cart.item.length === 0) {
      res.status(400).json({ message: "cart is empty" });
    }

    const totalPrice = cart.item.reduce(
      (sum, item) => sum + item.productId.price * item.quantity,
      0
    );

    const order = new oder({
      userId,
      item: cart.item.map((item) => ({
        productId: item.productId._Id,
        quantity: item.quantity,
        price: item.price,
      })),
      totalPrice,
      SheepingAddress,
      paymentMethod,
    });

    cart.item = [];
    await order.save();

    res.status(200).json({ message: "order ", order });
  } catch (err) {
    console.log(err);

    res.status(500).json({ message: "server error ", err });
  }
};


export const getorder = async(req,res)=>{
    
    const userId = req.user._id;

    try{

          const getOrder = await oder.findOne({userId}).sort({createAt:-1}).populate("item.productId")

          res.status(200).json({message:"oredre id  sucsessfully fetched",getOrder})


    }catch(err){

        console.log(err)

        res.status(500).json({message:"server err",err})

    }



}


// for Admin only
export const getalloreder = async(req, res)=>{
    try{
        const orders = await oder.find().populate("userId","name email").populate("item.productId","name price") 

        res.status(200).json({message:"you get all orders",orders})
    }catch(error){
        res.status(500).json({message:"server error frem Admin get all order",err})
    }
}



export const updeteorder = async(req,res)=>{

    const {orderId} = req.params;
    const {status} = req.body;
try{
const order = await oder.findOne({orderId});
    
    if(!order){
        res.status(404).json({message:"order is not folund ",oredrs})
    }

    order.status = status ;
    
    await order.save()


res.status(200).json({message:"updated order by admin "})

}catch(err){
console.log(err)
res.status(500).json({message :"server err",err})
}
}


export const getmyorder = async(req,res)=>{

    const userId = req.user._id;
    try{

      const orders = await oder.findOne({userId}).populate("products.product");

      res.status(200).json(orders);


    }catch(err){

        console.log(err)

        res.status(500).json({message:"error",err})

    }

} 