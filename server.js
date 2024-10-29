import express from "express"
import {config} from "dotenv"
import { commentRouts, ordersRouts, productsRouts, usersRouts } from "./routes/index.js"

config()

const app =  express()


app.use(express.json())

app.use("/users", usersRouts)
app.use("/products", productsRouts)
app.use("/orders", ordersRouts)
app.use("/comment", commentRouts)



let port = process.env.PORT

app.listen(port, () =>{
    console.log(`Server is running in ${port}`);
})