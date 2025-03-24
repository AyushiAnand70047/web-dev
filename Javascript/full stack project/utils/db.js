import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const db = () => {
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("Database connected")
    })
    .catch((err)=>{
        console.log("Error in connecting with mongodb")
    })
}

export default db;