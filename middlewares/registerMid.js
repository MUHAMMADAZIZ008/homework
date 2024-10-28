import { getAllUser } from "../database/de_connection.js";

export const usersMiddlewares = async(req, res,  next) => {
    try{
        let body = req.body
        if(!body.username || !body.password || !body.firstname || !body.lastname || !body.email || !body.addres){
            return res.status(400).send("Fill!")
        }
        let isCheck = false;
        let data = await getAllUser();

        for (let user of data) {
            if (user.username === body.username || user.email === body.email) {
                isCheck = true;
                break;
            }
        }

        if (isCheck) {
            return res.status(400).send({
                message: "Such a username or email exists!"
            });
        }
        next()
    }
    catch(e){
        next(e)
    }
}