import express from "express";
import { Addcart, getCartitem, removecart, updateCart } from "../controller/Cartcontroller.js";
import { verifyTokan } from "../middelware/authmidalware.js";

const cartrouter = express.Router();

cartrouter.post("/add",verifyTokan,Addcart)
cartrouter.get("/getcart",verifyTokan,getCartitem)
cartrouter.put("/updateCart",verifyTokan,updateCart )
cartrouter.delete("/removeCart",verifyTokan,removecart)

export default cartrouter;