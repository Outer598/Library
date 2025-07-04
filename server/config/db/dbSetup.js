import pg from 'pg';
import env from "dotenv";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

env.config({ path: path.resolve(__dirname, '../../../.env')  });


const db = new pg.Client({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASENAME,
    password: process.env.USERPASSWORD,
    port: process.env.PORT,
});


db.connect()
    .then( () => console.log("Database connection established"))
    .catch(err => console.log("Error connecting to database: "+ err.stack));


export default db