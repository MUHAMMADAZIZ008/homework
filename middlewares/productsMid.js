import { getALlProduct, getAllUser } from "../database/de_connection.js"

export const productsMid = async(req, res,  next) => {
    try{
        let body = req.body
        if(!body.name || !body.quantity || !body.price || !body.type){
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


export const updateProductsMidd = async(req, res,  next) => {
    try{
        let body = req.body
        let id = req.params.id
        if(!body.name || !body.quantity || !body.price || !body.type){
            return res.status(400).send("Fill!")
        }
        let data = await getALlProduct()
        let chack = false
        for(let product of data){
            if(product.id === +id){
                chack = true
            }
        }
        if(!chack){
            return res.status(404).send("Not found")
        }
        next()
    }
    catch(e){
        next(e)
    }
}