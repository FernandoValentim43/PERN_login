import { Pool, QueryArrayConfig } from "pg";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "pern_auth",
  password: "admin",
  port: 5432,
})

module.exports = {
    query: (text: QueryArrayConfig<any>, params: any) => pool.query(text, params),
}