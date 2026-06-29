import mongoose from "mongoose";

const watchSchema = new mongoose.Schema({
    name: String,
    price: Number,
    percent: String,
    isDown: Boolean,
})

const Watch = mongoose.model("watch", watchSchema);

export default Watch;