import { createOrders, getOrders } from "../database/de_connection.js"

export const ordersController = async(req, res, next) =>{
    try{
        let userId = req.id
        let body = req.body
        let chack = await createOrders(body, userId)
        if(chack){
            res.status(201).send("Created")
        }else{
            res.status(400).send("Not created")
        }
    }
    catch(e){
        next(e)
    }
}

export const getAllOrdersController = async(req, res, next) =>{
    try{
        let data = await getOrders()
        if(data){
            res.status(201).send(data)
        }else{
            res.status(404).send("Not Fount")
        }
    }
    catch(e){
        next(e)
    }
}