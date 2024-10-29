import { createOrders, deleteByIdOnOredres, getById, getOrders } from "../database/de_connection.js"

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
export const getByIdOrdersController = async(req, res, next) =>{
    try{
        let id = req.params.id
        let data = await getById(id)
        if(data && data.length !== 0){
            res.status(201).send(data)
        }else{
            res.status(404).send("Not Fount")
        }
    }
    catch(e){
        next(e)
    }
}

export const deleteByIdOrdersController = async(req, res, next) =>{
    try{
        let id = req.params.id
        let date = await deleteByIdOnOredres(id)
        if(date.rowCount){
            res.status(201).send({
                message: "Order delete", 
                date: date.command
            })
        }else{
            res.status(404).send("Not Fount")
        }
    }
    catch(e){
        next(e)
    }
}