import express from "express";
import morgan from "morgan";
import cors from 'cors';
import env from 'dotenv';
import latestRouter from "./routes/latestRoute.js";


env.config();
const app = express();
const PORT = 3000;

app.use(morgan('combined'));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', latestRouter);


app.listen(PORT, ()=> {
    console.log("Server running on port: " + PORT);
})