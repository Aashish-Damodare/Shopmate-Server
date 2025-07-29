
import Product from "../modal/productmodal.js";
// this work wen admin is trying to create the product
export const createProduct = async (req, res) => {
  try {
    const newProduct = new Product({
      ...req.body,
      createAt: req.user.id,
    });
    const Saverproduct = await newProduct.save();
    res.status(201).json(Saverproduct);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server error on Product ",
    });
  }
};


// to get all the project 
export const getProduct = async (req, res) => {
  try {
    const Produts = await Product.find().sort({ createAt: -1 });
    res.status(200).json(Produts);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "server error from the Productontroller",
    });
  }
};

export const getallproductbyfilter = async(req,res)=>{

  try{

     const {category,minprice,maxprice,search,}= req.query;
     const query = {}



     if(category){
       query.category = category
     }
     if(minprice && maxprice){
      query.price = {$gte:parseInt(minprice),$lte:parseInt(maxprice)}
     }
     if(search){
      query.name = {$regex:search,$Options:"i "}
     }
     const product = await Product.find(query)
     res.status(200).json(product)
  }catch(err){
res.status(500).json({message:"server error",err})
  }
}