import { createUser } from "../database/de_connection.js"

export const usersController = async (req, res, next) =>{
    try{
        let body = await req.body
        let chack = await createUser(body)
        if(chack){
            res.status(200).send({
                massage: "Created"
            })
        }else{
            res.status(400).send({
                massage: "error"
            })
        }
    }
    catch(e){
        next(e)
    }
}