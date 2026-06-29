import express from "express";
import { log } from "node:console";
import dotenv from "dotenv";
import cors from "cors";
import connect from "./utils/connect.ts";
import { holdings, positions, watchlist } from "./data/data.ts";
import Holdings from "./models/holdings.model.ts";
import Positions from "./models/positions.model.ts";
import User from "./models/user.model.ts";
import { createToken, verifyToken } from "./utils/jwt.js";
import cookieParser from "cookie-parser";
import Watch from "./models/watch.model.ts";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());

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

app.get("/addWatch", async (req, res) => {
  watchlist.forEach((item) => {
    const watch = new Watch({
      name: item.name,
      price: item.price,
      percent: item.percent,
      isDown: item.isDown,
    });
    watch.save();
  });
  res.send("Success")
});

app.get("/getHoldings", async (req, res) => {
  const responce = await Holdings.find({});
  res.status(200).json(responce);
});

app.get("/getPositions", async (req, res) => {
  const responce = await Positions.find({});
  res.status(200).json(responce);
});

app.get("/getWatch", async (req, res) => {
  try {
    const watch = await Watch.find({});
    res.status(200).json({
      success:true,
      watch: watch
    })
  } catch (error) {
    console.log(error)
  }
})

app.post("/addUser", async (req, res) => {
  try {
    const { name, phone, password, email } = req.body;
    const user = new User({
      name: name,
      phone: phone,
      password: password,
      email: email,
    });
    console.log(user);
    await user.save();
    const token = createToken(user.id);
    res.cookie("token", token, {
      sameSite: "lax",
      httpOnly: true,
    });
    res.status(201).json({
      success: true,
      message: "User registered",
    });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
});

app.get("/me", async (req, res) => {
  try {
    const { token } = req.cookies;
    const responce = await verifyToken(token);
    if (!responce) {
      throw new Error("Invalid Credentials");
    }
    const { id } = responce;
    const user = await User.findById(id).select("-password -createdAt");
    res.status(200).json({
      success: true,
      user: user,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
});

app.listen(3002, () => {
  log("App started");
});
