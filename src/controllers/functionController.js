import food from "../models/food.js";


class functionController {

    static async sumByKg (req, res) {
        let sum = 0;

        try {
            const listFoods = await food.find({});
            res.status(200).json(listFoods);

            
            for(const item of listFoods) {
                sum+= parseFloat(item.kg.replace(/\./g, '').replace(/,/, '.'));
            }

        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na requisição de rações.` })
        }
        return sum;
    }
}

export default functionController;