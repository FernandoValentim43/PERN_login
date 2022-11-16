const db = require('../db')
exports.getUsers = async(req: Request, res: Response) => {
    try {
       const response = await db.query('select * from users')
       console.log(response)
    } catch (err) {
        if (err instanceof Error) {
          console.log(err.message);
        } else {
          console.log("Unexpected error", err);
        }
      }
}