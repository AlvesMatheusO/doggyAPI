import food from "../models/food.js";


class functionController {

    static async sumByKg(req, res) {
        let sum = 0.0;

        try {
            const listFoods = await food.find({});

            for (const item of listFoods) {
                sum += parseFloat(item.kg);
            }

            res.status(200).json(sum.toFixed(2));

        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na requisição de rações.` })
        }
    }


    static async sumByPrice(req, res) {
        let sum = 0.0;

        try {
            const listFoods = await food.find({});

            for (const item of listFoods) {
                sum += parseFloat(item.price);
            }

            res.status(200).json(sum.toFixed(2));
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na requisição de rações.` })

        }
    }

    static async getDate() {
        const today = new Date();

        const day = today.getDate();
        const month = `${today.getMonth() + 1}`;
        const year = `${today.getFullYear()}`;
    }

    static async spentPerMonth(req, res) {
        try {
            const monthsArray = [];
            const purchases = await food.find({});
    
            for (let i = 1; i <= 11; i++) {
                monthsArray[i] = 0;
            }

            purchases.forEach((purchase) => {
                const today = new Date(purchase.date);
                const month = today.getDay() + 1;
                const year = today.getFullYear();
    
                if (monthsArray[month] == null) {
                    monthsArray[month] = 0;
                }
                monthsArray[month] += parseFloat(purchase.price);
            });
    
            console.log(monthsArray);
    
            if (typeof res.status === 'function') {
                res.status(200).json(monthsArray);
            } else {
                console.error("res.status não é uma função.");
            }
        } catch (error) {
            console.log(error);
        }
    }
}

export default functionController;