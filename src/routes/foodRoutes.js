import express from "express";
import foodController from "../controllers/foodController.js"

const ROUTES = express.Router();

ROUTES.post("/food", foodController.createFood);
ROUTES.get("/foods", foodController.getFoods);
ROUTES.put("/food/:id", foodController.editFood);
ROUTES.delete("/food/:id", foodController.deleteFood);

export default ROUTES;