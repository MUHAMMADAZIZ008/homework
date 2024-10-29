import express from "express"
import { ordersMidd } from "../middlewares/ordersMidd.js"
import { deleteByIdOrdersController, getAllOrdersController, getByIdOrdersController, ordersController } from "../controller/index.js"
export const ordersRouts = express.Router()

ordersRouts.post("/", ordersMidd, ordersController)
ordersRouts.get("/", getAllOrdersController)
ordersRouts.get("/:id", getByIdOrdersController)
ordersRouts.delete("/:id", deleteByIdOrdersController)
