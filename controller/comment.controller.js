import { createComment, deleteByIdComment, getAllComment, getByIdComment } from "../database/de_connection.js"

export const commentCreateConntroller = async(req, res, next) =>{
    try{
        let userId = req.id
        let body = req.body
        let chack = await createComment(body, userId)
        if(chack){
            res.status(201).send("Created Comment")
        }else{
            res.status(400).send("Not created")
        }
    }
    catch(e){
        next(e)
    }
}
export const getAllcommentConntroller = async(req, res, next) =>{
    try{
        let data = await getAllComment()
        if(data){
            res.status(201).send(data)
        }else{
            res.status(400).send(data)
        }
    }
    catch(e){
        next(e)
    }
}

export const getByIdcommentConntroller = async(req, res, next) =>{
    try{
        let id = +req.params.id
        let data = await getByIdComment(id)
        if(data && data.length !== 0){
            res.status(201).send(data)
        }else{
            res.status(400).send("Not fount")
        }
    }
    catch(e){
        next(e)
    }
}

export const deleteCommentConntroller = async(req, res, next) =>{
    try{
        let id = +req.params.id
        let chack = await deleteByIdComment(id)
        if(chack.rowCount){
            res.status(200).send("Deleted")
        }else{
            res.status(400).send("Not fount")
        }
    }
    catch(e){
        next(e)
    }
}
