import mongoose from "mongoose";

const db = () => {
    mongoose.connect(process.env.MONGODB_URL)
        .then(() => {
            console.log("Database connected successfully")
        })
        .catch((error) => {
            console.log(`Error in connecting with database ${error}`)
        })
}

export default db;