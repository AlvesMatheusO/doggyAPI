import express from "express";
import foods from "../models/food.js";

const ROUTES = (app) => {
    app.use(express.json(), foods); 
}

export default ROUTES; 