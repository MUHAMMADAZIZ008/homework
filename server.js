import express from "express"
import {config} from "dotenv"
import { productsRouts, usersRouts } from "./routes/index.js"

config()

const app =  express()


app.use(express.json())

app.use("/users", usersRouts)
app.use("/products", productsRouts)



let port = process.env.PORT

app.listen(port, () =>{
    console.log(`Server is running in ${port}`);
})