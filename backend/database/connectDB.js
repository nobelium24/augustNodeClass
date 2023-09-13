import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


const uri = process.env.MONGODB_URI
const connectDB = async () => {
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect(uri);
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log("MongoDB connection error: " + error)
    }
}

export {connectDB}