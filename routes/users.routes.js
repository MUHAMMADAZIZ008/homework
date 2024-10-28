import express from "express"
import { loginMiddlewares, usersMiddlewares } from "../middlewares/index.js"
import { loginController, usersController } from "../controller/index.js"

export const usersRouts = express.Router()

usersRouts.post("/register", usersMiddlewares, usersController)
usersRouts.post("/login", loginMiddlewares, loginController)