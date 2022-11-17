import express from "express";
import { config } from "dotenv";
const cookieParser = require('cookie-parser')
config();

const app = express();

app.use(express.json());
app.use(cookieParser())
//route
const authRoutes = require("./routes/auth");
app.use("/api", authRoutes);

//app start

const appStart = () => {
  try {
    app.listen(5000, () => {
      console.log(" ( ᗜ ‿ ᗜ ) 👌 ");
    });
  } catch (error: any) {
    console.log(error.message);
  }
};

appStart();
