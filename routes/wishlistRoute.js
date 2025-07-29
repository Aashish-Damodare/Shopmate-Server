import express from "express";
import { verifyTokan } from "../middelware/authmidalware";
import { addwishlist, getwishlist, removewishlist } from "../controller/Wishcontroller";

 export const wishlistrouter = express.Router();

wishlistrouter.post("/addwishlist",verifyTokan,addwishlist);
wishlistrouter.post("/removewishlist",verifyTokan,removewishlist)
wishlistrouter.get("/",verifyTokan,getwishlist)

    