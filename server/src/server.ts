import express from "express";
const app = express();
const CLIENT_URL = require("./constants");
import { config } from "dotenv";
const cookieParser = require('cookie-parser');
const passport = require("passport")
const cors = require('cors')

const door = "4000"
config();

//import passport middleware
require('./middlewares/passport-middleware.js')

app.use(express.json());
app.use(cookieParser())
app.use(cors({ origin: CLIENT_URL, credentials: true }))
app.use(passport.initialize())


//route
const authRoutes = require("./routes/auth");
app.use("/api", authRoutes);

//app start

const appStart = () => {
  try {
    app.listen(door, () => {
      console.log(` ( ᗜ ‿ ᗜ ) 👌 Server Running on door ${door}`);
    });
  } catch (error: any) {
    console.log(error.message);
  }
};

appStart();
