import dotenv from "dotenv"
import express from "express";
import testRoutes from "./routes/testroute.js"
import connectDB from "./config.js/db.js"

import app from "./app.js"
import  router from "./routes/authroutes.js";
import {ProductRouter} from "./routes/ProductRouter.js";
import cartrouter from "./routes/cartRouter.js";
import orderRouter from "./routes/order.js";

dotenv.config();
   
connectDB();

app.use("/api/v1", router)
app.use("/api/product",ProductRouter)
app.use("/api/v1/test", testRoutes);
app.use("/api/cart",cartrouter)
app.use("/api/place",orderRouter)
const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`server is started on http//locallhost:${PORT}`)
})


