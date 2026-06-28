import express from "express";
import { log } from "node:console";
import dotenv from "dotenv";
import cors from "cors"
import connect from "./utils/connect.ts";
import { holdings, positions } from "./data/data.ts";
import Holdings from "./models/holdings.model.ts";
import Positions from "./models/positions.model.ts";
import User from "./models/user.model.ts";


dotenv.config();

const app = express();
app.use(cors())
app.use(express.json())

const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
  throw new Error("MONGO_URI must be defined");
}
connect(mongoUri);

app.get("/", (req, res) => {
  res.send("App is running!!");
});

app.get("/addHoldings", async (req, res) => {
  holdings.forEach((item) => {
    const holding = new Holdings({
      name: item.name,
      qty: item.qty,
      avg: item.avg,
      price: item.price,
      net: item.net,
      day: item.day,
    });

    holding.save();
  });
  res.status(200).json({ msg: "Success" });
});

app.get("/addPositions", async (req, res) => {
  positions.forEach((item) => {
    const position = new Positions({
      product: item.product,
      name: item.name,
      qty: item.qty,
      avg: item.avg,
      price: item.price,
      net: item.net,
      day: item.day,
      isLoss: item.isLoss,
    });

    position.save();
  });
  res.status(200).json({ msg: "Success" });
});

app.get("/getHoldings", async(req, res) => {
    const responce = await Holdings.find({});
    res.status(200).json(responce);
})


app.get("/getPositions", async(req, res) => {
    const responce = await Positions.find({});
    res.status(200).json(responce);
})

app.post("/addUser", async (req, res) => {
  const {name, phone} = req.body;
  const user = new User({
    name: name,
    phone: phone
  })
  await user.save();
  res.status(201).json()
})


app.listen(3002, () => {
  log("App started");
});
