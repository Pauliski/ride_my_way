import Pools from 'pg'

const {Pool} = Pools
export const pool = new Pool({
  user: "postgres",
  password: "ababio92",
  database: "ride_my_way",
  host: "localhost",
  port: 5432
  
});



