import mongoose from "mongoose";
// import { holdings } from "../data/data.ts";

const holdingsShcema = new mongoose.Schema({
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
})

const Holdings = mongoose.model("Holdings", holdingsShcema);

export default Holdings;