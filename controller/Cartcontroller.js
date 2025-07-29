import Cart from "../modal/Cart.js";
export const Addcart = async(req,res)=>{

    const {productID,quintity}= req.body;
    const userId = req.user._id;

    try{

    let cart = new Cart.findOne({userId})

    if(!cart){
       cart = new Cart({userId,item:[{productID, quintity}]})
    }else{


        const itemindex = cart.item.findindex(item=>item.productId.tostring()=== productID)
        if(itemindex>-1){

            cart.item[itemindex].quintity += quintity;

        }else{
            cart.item({productID,quintity})
           
        }


    }
 await cart.save()

 res.status(200).json(cart)
    }catch(error){


        res.status(500).json({message:error.massage})
    }
}


export const getCartitem = async (req, res)=>{
 const userId = req.body;

 try{

    const cart = await Cart.findOne({userId}).populate("items.productId")
    if(!cart){
        res.status(404).json({message:"car is not found "})
    }

 }catch(error){

console.log(error)

res.status(500).json({message:error.message})

 }
    

};



export const updateCart = async(req,res)=>{
const userId = req.user._id;
const {productID, quintity} = req.body;

try{

    if(quintity<=0){
        res.status(400).json({message: " Quentity must be atlist one"})
    }

    const cart = await Cart.find({userId});

    if(!cart){ 

          return res.status(404).json({message:"cart is not found "})
    }

    const item = cart.items.find(item=>item.productID.tostring() === productID);


    if(!item){

        return res.status(404).json({massage:"item is not found"})
        
    }


    item.quintity = quintity
    await cart.save();


    res.status(200).json({message:"cart is updated",cart})

}catch(error){

    res.status(500).json({message:error})

}



}


export const removecart = async(req,res)=>{

      const userId =  req.user_.id;
      const {productId} = req.body;

      try{

    const cart = await cart.findOne({userId})
   
   if(!cart){
    res.status(404).json({message:"cart is not found "})
   }

   cart.item = cart.items.filter(   (item)=>item.productid.tostring() !==   productId);
   await cart.save();

   res.status(200).json({message:"cart is deleted ", cart})


      }catch(err){

        console.log(err)

        res.status(500).json({message:err})
      }


}



export const removeallcart = async(req,res)=>{

    
    const userId = req.user._id;



       try{
          
    const cart = await Cart.findOne({userId}) 
    
    if(!cart){
       
        res.status(404).json({message:"cart is nt found "})
    }

    cart.item = []
    await cart.save()
       res.status(200).json({message:"cart is deleted "})

       }catch(err){

        console.log(err)
        res.status(500).json({message:err})

       }
   




} 

