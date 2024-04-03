import food from "../models/food.js";

class FoodController {

    static async createFood (req, res) {
        try{
            const newFood = await food.create(req.body);
            res.status(201).json({ message: "Ração cadastrada com sucesso", food: newFood});
        } catch (error){
            res.status(500).json({ message: `${error.message} - Falha ao cadastrar ração` });
        }
    }   
}

export default FoodController;