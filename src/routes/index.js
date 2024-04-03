import express from "express";
import foods from "../routes/foodRoutes.js";

const ROUTES = (app) => {
    app.use(express.json(), foods); 
}

export default ROUTES; 