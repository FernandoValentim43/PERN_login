
const db = require("../db");
const { hash } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const SECRET = "abc123"

exports.getUsers = async (req: Request, res: Response) => {
  try {
    const { rows } = await db.query("select user_id, username from users");
    //@ts-ignore
    return res.status(200).json({
      sucess: true,
      users: rows,
    });
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
    } else {
      console.log("Unexpected error", err);
    }
  }
};

exports.register = async (req: Request, res: Response) => {
  //@ts-ignore
  const { username, password } = req.body;

  const hashedPassword = await hash(password, 10);

  try {
    await db.query("insert into users(username,password) values ($1 , $2)", [
      username,
      hashedPassword,
    ]);

    //@ts-ignore
    return res.status(201).json({
      sucess: true,
      message: "The registration was succefull",
    });
  } catch (error: any) {
    console.log(error.message);
    //@ts-ignore
    return res.status(500).json({
      error: error.message,
    });
  }
};

exports.login = async (req: Request, res: Response) => {
  //@ts-ignore
  let user = req.user;
  let payload = {
    id: user.user_id,
    user_name: user.username
  };

  try {
    const token = await sign(payload, "123")

    //@ts-ignore
    return res.status(200).cookie('token', token, {httpOnly: true}).json({
      success: true,
      menssage: "Logged succefully"
    });

  } catch (error: any) {
    console.log(error.message);
    //@ts-ignore
    return res.status(500).json({
      error: error.message,
    });
  }
};

export {};
