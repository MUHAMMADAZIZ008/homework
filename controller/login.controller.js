import { getAllUser } from "../database/de_connection.js";

export const loginController = async (req, res, next) =>{
    try{
        let body = req.body
        let isCheck = false;
        let data = await getAllUser();

        for (let user of data) {
            if (user.username === body.username || user.email === body.email) {
                isCheck = true;
                break;
            }
        }

        if (isCheck) {
            return res.status(200).send({
                message: `Welcome ${body.username}`
            });
        }else{
            return res.status(400).send({
                message: `Not fount: ${body.username}`
            });
        }
    }
    catch(e){
        next(e)
    }
}