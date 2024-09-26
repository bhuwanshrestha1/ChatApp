import express from "express";
import {login,logout, SignUp } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/SignUp",SignUp);

router.get("/login",login);

router.get("/logout",logout);



export default router;
