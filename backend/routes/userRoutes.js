import { signup, login, viewUsers, forgotPassword, resetPassword, uploadImage } from "../controllers/userController.js";
import express from "express"
import { validate } from "../middlewares/validator.js";
import { userLoginValidate, userValidate } from "../middlewares/userValidate.js";

const userRoutes = express.Router()

userRoutes.post("/signup", validate(userValidate), signup);
userRoutes.post("/login", validate(userLoginValidate), login);
userRoutes.get("/viewusers", viewUsers);
userRoutes.post("/forgotpassword", forgotPassword);
userRoutes.post("/resetpassword", resetPassword);
userRoutes.post("/upload", uploadImage)

export { userRoutes }