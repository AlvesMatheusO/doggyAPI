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

    static async monthNumber() {
        let nameMonth;
        const purchases = await food.find({});

        purchases.forEach((purchase) => {
            const fullDate = new Date(purchase.date);
            const month = fullDate.getDay() + 1;

            if (month == 1) {
                nameMonth == "janeiro"
            } else if (month == 2) {
                nameMonth == "fevereiro"
            } else if (month == 3) {
                nameMonth == "março"
            } else if (month == 4) {
                nameMonth == "abril"
            } else if (month == 5) {
                nameMonth == "maio"
            } else if (month == 6) {
                nameMonth == "junho"
            } else if (month == 7) {
                nameMonth == "julho"
            } else if (month == 8) {
                nameMonth == "agosto"
            } else if (month == 9) {
                nameMonth == "setembro"
            } else if (month == 10) {
                nameMonth == "outubro"
            } else if (month == 11) {
                nameMonth == "novembro"
            } else if (month == 12) {
                nameMonth == "dezembro"
            }

            return nameMonth
        });
    }

    static async spentPerMonth(res) {

        try {

            const monthsArray = {};
            const purchases = await food.find({});
            const sum = 0;



            purchases.forEach((purchase) => {
                const today = new Date(purchase.date);

                const day = today.getDate();
                const month = `${today.getDay() + 1}`;
                const year = `${today.getFullYear()}`;

                if (!monthsArray[month]) {
                    monthsArray[month] = 0;
                }
                monthsArray[month]  += parseFloat(purchase.price);

                
            });

            console.log(monthsArray)

            res.status(200).json(monthsArray)
        } catch (error) {

        }


    }
}

export default functionController;