import express from "express";
import  requireSignIn  from "./authroutes.js";

const testRoutes = express.Router();

testRoutes.get("/protected", requireSignIn, (req, res) => {
  res.json({ message: "Protected route accessed!", user: req.user });
});

export default testRoutes;
