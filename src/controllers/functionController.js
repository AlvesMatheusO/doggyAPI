import food from "../models/food.js";


class functionController {

    static async sumByKg (req, res) {
        let sum = 0.0;

        try {
            const listFoods = await food.find({});
        
            for(const item of listFoods) {
                sum+= parseFloat(item.kg);
            }

            res.status(200).json(sum);

        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na requisição de rações.` })
        }
    }


    static async sumByPrice (req, res) {
        let sum = 0.0;

        try {
            const listFoods = await food.find({});

            for(const item of listFoods) {
                sum+= parseFloat(item.price);
            }
    
            res.status(200).json(sum);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na requisição de rações.` })

        }


    }
}

export default functionController;