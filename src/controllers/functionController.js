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

    static async spentPerMonth() {

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

        //get all foods
        const purchases = await food.find({});
        let monthSpent = 0.0;

        console.log(purchases)

        purchases.forEach((purchase) => {

            const fullDate = new Date(purchase.date);
            const year = fullDate.getFullYear();
            const month = fullDate.getDay() + 1;

            console.log(fullDate);
            console.log(year);
            console.log(month);

            console.log(purchase.kg);
            monthSpent += parseFloat(purchase.price);
        });


        console.log(monthSpent.toFixed(2));

    }
}

export default functionController;