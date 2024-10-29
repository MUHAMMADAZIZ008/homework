import { getAllUser } from "../database/de_connection.js"

export const ordersMidd = async(req, res,  next) => {
    try{
        let body = req.body
        if(!body.product_id || !body.delivery_date){
            return res.status(400).send("Fill!")
        }
        const b64auth = (req.headers.authorization || "").split(" ")[1] || ""
        const strauth = Buffer.from(b64auth, "base64").toString()
        const splitIndex = strauth.indexOf(":")

        const login = strauth.substring(0, splitIndex)
        const password = strauth.substring(splitIndex+1)
        let isCheck = false;
        let data = await getAllUser();
        let _id = 0
        for (let user of data) {
            if (user.username === login && user.password === password) {
                _id = user.id
                isCheck = true;
                break;
            }
        }
        if(!isCheck){
            res.status(400).send("Login or password is wrong")
        }
        req.id = _id
        next()
    }
    catch(e){
        next(e)
    }
}