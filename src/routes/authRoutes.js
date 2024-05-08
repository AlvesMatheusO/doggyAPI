import express from "express";
import authController from "../controllers/authController.js";
import User from "../models/User.js";
import  jwt  from "jsonwebtoken";

const ROUTES = express.Router();


ROUTES.post("/auth/register", authController.registerUser);
ROUTES.post("/auth/user", authController.login);
ROUTES.get("/user/:id", checkToken, authController.findUserById);
ROUTES.delete("/auth/logout", checkToken, authController.logout);

function checkToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({ msg: "Acesso negado" });
    }

    try {
        const secret = process.env.SECRET;
        jwt.verify(token, secret)
        next()
    } catch (error) {
        res.status(400).json({msg: "Token Invalido"})
    }
}
export default ROUTES;
