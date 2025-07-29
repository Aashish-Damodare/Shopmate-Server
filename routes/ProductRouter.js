import express from "express";
import { createProduct, getallproductbyfilter, getProduct } from "../controller/ProductController.js";


export  const ProductRouter = express.Router();


ProductRouter.get("/",getProduct);
ProductRouter.post("/create",createProduct)
ProductRouter.get("/filter",getallproductbyfilter)

