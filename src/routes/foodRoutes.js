import express from "express";
import foodController from "../controllers/foodController.js"

const ROUTES = express.Router();

ROUTES.post("/food", foodController.createFood);

export default ROUTES;