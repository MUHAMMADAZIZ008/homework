import express from "express"
import { ordersMidd } from "../middlewares/ordersMidd.js"
import { getAllOrdersController, ordersController } from "../controller/index.js"
export const ordersRouts = express.Router()

ordersRouts.post("/", ordersMidd, ordersController)
ordersRouts.get("/", getAllOrdersController)
