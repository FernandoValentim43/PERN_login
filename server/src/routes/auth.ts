import express, { Router, Request, Response } from "express";
const { getUsers } = require("../controllers/auth");

const app = express();
const cors = require("cors");
const route = Router();

app.use(express.json());

app.use(cors());

route.get('/register', (req, res) => {
    return res.send("!")
})

route.get("/get-users", getUsers);

module.exports = route;
