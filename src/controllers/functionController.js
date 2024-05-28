import food from "../models/Food.js";

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
      res
        .status(500)
        .json({ message: `${error.message} - falha na requisição de rações.` });
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
      res
        .status(500)
        .json({ message: `${error.message} - falha na requisição de rações.` });
    }
  }


  static async spentPerMonth(req, res) {
    try {
      const monthsArray = Array(12).fill(0);
      const purchases = await food.find({});

      purchases.forEach((purchase) => {
        const [day, month, year] = purchase.date.split("/").map(Number);
        const today = new Date(year, month - 1, day);
        const monthIndex = today.getMonth();

        const price = parseFloat(purchase.price.toString());
        monthsArray[monthIndex] += price;
      });

      console.log(monthsArray);

      if (typeof res.status === "function") {
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
