import { Decimal128 } from "mongodb";
import mongoose, { version } from "mongoose";

const FOOD_SCHEMA = new mongoose.Schema({

    id: {type: mongoose.Schema.Types.ObjectId},
    brand: {type: String, required: true},
    date: {type: Date, default: Date.now}, // in case I want to manipulate date data I have to format it
    kg: {type: Decimal128, required: true},
    price: {type: Decimal128, required: true},
    price_kg: {type: Decimal128, required: true}
}, {versionKey: false});

const food = mongoose.model("foods", FOOD_SCHEMA);      

export default food; 