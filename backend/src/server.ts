import app from "./app.ts"
import connect from "./utils/connect.ts";
import dotenv from "dotenv"

dotenv.config();

const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
  throw new Error("MONGO_URI must be defined");
}
connect(mongoUri);

app.listen(3002, () => {
  console.log("App started!!")
})