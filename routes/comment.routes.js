import express from "express"
import { commentMidd } from "../middlewares/index.js"
import { commentCreateConntroller, deleteCommentConntroller, getAllcommentConntroller, getByIdcommentConntroller } from "../controller/index.js"

export const commentRouts = express.Router()


commentRouts.post("/", commentMidd, commentCreateConntroller)
commentRouts.get("/", getAllcommentConntroller)
commentRouts.get("/:id", getByIdcommentConntroller)
commentRouts.delete("/:id", deleteCommentConntroller)
