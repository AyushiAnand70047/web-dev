import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import db from "./utils/db.js";

dotenv.config()

const app = express();

app.use(
    cors({
        origin: process.env.BASE_URL,
        credentials: true,
        methods: ['GET','POST','DELETE','OPTIONS'],
        allowedHeaders: ['content-type', 'Authorization']
    })
);
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const port = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.get("/ayushi",(req,res)=>{
    res.send("Hello Ayushi");
})

app.get("/tauqueer",(req,res)=>{
    res.send("Hello Tauqueer");
})

// connect to db
db()

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
})