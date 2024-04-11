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
        const month = (day.getMonth() + 1);
        const year = day.getFullYear();
    }

    static async weightPerMonth() {
        const weightMonth = {};
        const months = [
            "Janeiro",
            "Fevereiro",
            "Março",
            "Abril",
            "Maio",
            "Junho",
            "Julho",
            "Agosto",
            "Setembro",
            "Outubro",
            "Novembro",
            "Dezembro"];

        const purchases = await food.find({});

        purchases.forEach((purchase) => {
            const fullDate = new Date(purchase.date);
            const year = fullDate.getFullYear();
            const month = fullDate.getMonth();


            if (year == 2024) {
                if (!weightMonth[month]) {
                    weightMonth[month] = 0;
                }
                weightMonth[month] += purchase.kg;
            }
        });

        const monthWeight = {};

        for (const month in weightMonth) {
            monthWeight[months[month]] = weightMonth[month];
        }

        console.log(monthWeight);

        return monthWeight;
    }
}

export default functionController;