const db = require('../db')
exports.getUsers = async(req: Request, res: Response) => {
    try {
       const {rows} = await db.query('select * from users')
       console.log(rows)
    } catch (err) {
        if (err instanceof Error) {
          console.log(err.message);
        } else {
          console.log("Unexpected error", err);
        }
      }
}

exports.register = async(req: Request, res: Response) => {
  try {
    console.log('validation passed')
  } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      } else {
        console.log("Unexpected error", err);
      }
    }
}

export {};