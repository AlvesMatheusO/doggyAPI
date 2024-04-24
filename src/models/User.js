import mongoose from "mongoose";

const AUTH_SCHEMA = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
}, {versionKey: false});

const user = mongoose.model("users", AUTH_SCHEMA);

export default user;