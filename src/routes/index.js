import express from "express";
import foods from "../routes/foodRoutes.js";
import auth from "../routes/authRoutes.js";

const ROUTES = (app) => {
    app.use(express.json(), foods); 
    app.use(express.json(), auth);
}

export default ROUTES; 