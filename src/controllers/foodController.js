import food from "../models/food.js";

class FoodController {

    static async createFood (req, res) {
        try{
            const newFood = await food.create(req.body);
            res.status(201).json({ message: "Ração cadastrada com sucesso", food: newFood});
        } catch (error){
            res.status(500).json({ message: `${error.message} - Falha ao cadastrar ração.` });
        }
    }
    

    static async getFoods (req, res) {
        try {
            const listFoods = await food.find({});

            res.status(200).json(listFoods);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na requisição de rações.` })
        }
    }

    static async editFood (req, res) {
        try {
            const id = req.params.id;   
            await food.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "ração atualizado com sucesso" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao atualizar ração.` });
        }
    }

    static async deleteFood(req, res) {
        try {
            const id = req.params.id;
            await food.findByIdAndDelete(id, req.body);
            res.status(200).json({ message: "Ração deletada com sucesso" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao deletar ração ` })
        }
    }

    static async getFoodById(req, res) {
        try {
            const id = req.params.id;
            const listFood = await food.findById(id);
            res.status(200).json(listFood)
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na requisição da ração` })
        }
    }

}

export default FoodController;