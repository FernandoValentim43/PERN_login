import express, { Router, Request, Response } from "express";

const app = express();
const cors = require("cors");
const route = Router();

app.use(express.json());

app.use(cors());

route.get("/", (req: Request, res: Response) => {
  res.send("cirno");
});

module.exports = route