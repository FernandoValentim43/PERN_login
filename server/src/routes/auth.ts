import express, { Router, Request, Response } from "express";
const { getUsers, register, login } = require("../controllers/auth");
const { registerValidation } = require("../validators/auth");
const { loginValidation } = require("../validators/auth");

const {
  validationMiddleware,
} = require("../middlewares/validations-middleware");

const app = express();
const cors = require("cors");
const route = Router();

app.use(express.json());

app.use(cors());

//test route
route.get("/test", (req, res) => {
  return res.send("!");
});

//get users
route.get("/get-users", getUsers);

//login
route.post("/login", loginValidation, validationMiddleware, login);



//register user
route.post("/register", registerValidation, validationMiddleware, register);

//logout
route.post("/login", loginValidation, validationMiddleware, login);



module.exports = route;
