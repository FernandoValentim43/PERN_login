import express from "express";

import { Router, Request, Response } from "express";



const app = express();
const cors = require("cors");
const route = Router();

app.use(express.json());
app.use(cors());

route.get("/", (req: Request, res: Response) => {
  res.json({ message: "hello world with Typescript" });
});

app.use(route);

app.listen(8000, () => "server running on port 8000");



