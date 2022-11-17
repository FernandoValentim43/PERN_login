const { check } = require("express-validator");
const db = require("../db");

//password
const password = check("password")
  .matches(/^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)
  .withMessage(
    "Password has to be 8 character long,one upercase letter and one number"
  );

//username
const username = check("username")
  .isLength({ min: 3 })
  .withMessage("Username must have at least 3 characters");

//check is username is unique
const userExists = check("username").custom(async (value: any) => {
  const { rows } = await db.query("SELECT * from users WHERE username = $1", [
    value,
  ]);

  if (rows.length) {
    throw new Error("Username Already exists.");
  }
});

//login validation
const loginCheck = check("username").custom(async ( value: any, {req}: any) => {
  return console.log(req.body)
})

module.exports = {
  registerValidation: [password, username, userExists],
  loginValidation: [loginCheck]
};
