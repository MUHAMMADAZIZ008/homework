import { query } from "express"
import { createProduct, deleteProduct, getALlProduct, searchProduct, updateProduct } from "../database/de_connection.js"
export const productsControllers = async(req, res, next) =>{
    try{
        let userId = req.id
        let body = req.body
        let chack = await createProduct(body, userId)
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
export const getAllProductsControllers = async(req, res, next) =>{
    try{
        let data = await getALlProduct()
        if(data){
            res.status(200).send(data)
        }else{
            res.status(400).send(data)
        }
    }
    catch(e){
        next(e)
    }
}


export const searchProductsControllers = async(req, res, next) =>{
    try{
        let {search} = req.query
        let data = await searchProduct(search)
        if(data && data.length !== 0){
            res.status(200).send(data)
        }else{
            res.status(404).send("Not fount")
        }
    }
    catch(e){
        next(e)
    }
}



export const getAllProductsById = async(req, res, next) =>{
    try{
        let id = req.params.id
        let data = await getALlProduct()
        for(let product of data){
            if(product.id === +id){
                return res.status(200).send(product)
            }
        }
        res.status(404).send("Not fount")
    }
    catch(e){
        next(e)
    }
}
export const updateProductsById = async(req, res, next) =>{
    try{
        let id = req.params.id
        let body = req.body
        let chack = await updateProduct(body, id)
        if(chack){
            return res.status(200).send("Updated")
        }else{
            return res.status(400).send(chack)
        }
    }
    catch(e){
        next(e)
    }
}
export const deleteProductsById = async(req, res, next) =>{
    try{
        let id = +req.params.id
        let chack = false
        let data = await getALlProduct()
        for(let product of data){
            if(product.id === id){
                chack = true
            }
        }
        if(!chack){
            return res.status(404).send("Id not found")
        }
        let isDelete = await deleteProduct(id)
        if(isDelete){
            return res.status(200).send("Deleted")
        }else{
            return res.status(400).send("Not deltete")
        }
    }
    catch(e){
        next(e)
    }
}