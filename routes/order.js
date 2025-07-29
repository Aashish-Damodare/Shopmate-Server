import express from "express";
import { getalloreder, getmyorder, getorder, placeorder, updeteorder } from "../controller/order.js";
import { Admin, verifyTokan } from "../middelware/authmidalware.js";

const orderRouter = express.Router();


orderRouter.post("/place",placeorder)
orderRouter.get("/getuser",verifyTokan ,getorder)
orderRouter.get("/getbyAdmin",verifyTokan,Admin,getalloreder)
orderRouter.put("/updateoreder",verifyTokan,Admin,updeteorder)
orderRouter.get("/my-order",verifyTokan,getmyorder)

export default orderRouter;