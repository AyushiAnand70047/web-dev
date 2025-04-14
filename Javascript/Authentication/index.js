import express, { urlencoded } from "express";
import db from "./utils/db.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(express.json())

app.use(urlencoded({extended: true}))

app.use(cors({
    origin: process.env.BASE_URL,
    methods: ['GET','POST','PUT','DELETE'],
    allowedHeaders: ['Content-Type','Authorization']
}))

app.get('/', (req,res) => {
    res.send("Hello World");
});

db();

app.listen(process.env.PORT, () => {
    console.log("Server started on port 3000");
});