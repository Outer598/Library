import express from "express";
import morgan from "morgan";
import cors from 'cors';
import env from 'dotenv'
import db from "./config/db/dbSetup.js";

env.config();
const app = express();
const PORT = 3000

app.use(morgan('combined'))
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended: true}))


const server = app.listen(PORT, ()=> {
    console.log("Server running on port: " + PORT)
})


process.on('SIGINT', () => {
    server.close(() => {
        console.log('Server closed')
    })
    db.end(() => {
        console.log('database connection closed');
        process.exit();
    });
});
