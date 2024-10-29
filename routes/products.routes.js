import express from "express"
import { productsMid, updateProductsMidd } from "../middlewares/index.js"
import { deleteProductsById, getAllProductsById, getAllProductsControllers, productsControllers, searchProductsControllers, updateProductsById } from "../controller/products.controller.js"

export const productsRouts = express.Router()

productsRouts.post("/", productsMid, productsControllers)
productsRouts.get("/", searchProductsControllers) // shuni qeyrga qoyishni bilmadim lekin hammsi ishlayabdi
productsRouts.get("/", getAllProductsControllers)
productsRouts.get("/:id", getAllProductsById)
productsRouts.put("/:id", updateProductsMidd,updateProductsById)
productsRouts.delete("/:id", deleteProductsById)
