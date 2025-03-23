import express from "express"
import dotenv from "dotenv"

dotenv.config()

const app = express();

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

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
})