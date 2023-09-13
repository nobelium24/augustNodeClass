import express from "express";
import env from "dotenv";
import cors from "cors";
import { connectDB } from "./database/connectDB.js";
import { userRoutes } from "./routes/userRoutes.js";
import { errorHandler } from "./middlewares/errorHandler.js";

env.config();
const app = express();

app.use(cors({origin:"*"}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/users", userRoutes)

app.use((req, res, next)=>{
    res.status(404).send({message:"Route not found", status: false})
})

connectDB()
app.use(errorHandler)


app.listen(7770, ()=>{
    console.log("App is listening at port 7770")
})
