import { Decimal128 } from "mongodb";
import mongoose from "mongoose";

const today = new Date();
const date = `${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}`;

const FOOD_SCHEMA = new mongoose.Schema({

    id: {type: mongoose.Schema.Types.ObjectId},
    brand: {type: String, required: true},
    date: {type: String, default: date}, 
    kg: {type: Decimal128, required: true},
    price: {type: Decimal128, required: true},
}, {versionKey: false});

const food = mongoose.model("foods", FOOD_SCHEMA);      

export default food; 