import { Pool } from "pg"

export const pool = new Pool({
     host : 'ep-mute-bread-ah8wvhqu-pooler.c-3.us-east-1.aws.neon.tech',
     port: 5432,
     password: 'npg_YdUqt0ZeFGN9',
     user: 'neondb_owner',
     database: 'neondb',
     ssl: true
})

export const connectToDb = async() =>{
  await pool.connect();
}

