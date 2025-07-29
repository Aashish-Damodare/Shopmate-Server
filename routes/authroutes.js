import express from "express";
import { loginUser, regesterUser } from "../controller/authcontroller.js";

const router = express.Router();

router.post("/ragester",regesterUser)

router.post ("/login",loginUser)

export default router;
