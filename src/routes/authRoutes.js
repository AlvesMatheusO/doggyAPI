import express from "express";
import authController from "../controllers/authController.js";
import User from "../models/User.js";

const ROUTES = express.Router();


ROUTES.post("/auth/register", authController.registerUser);
ROUTES.post("/auth/user", authController.login);

export default ROUTES;
