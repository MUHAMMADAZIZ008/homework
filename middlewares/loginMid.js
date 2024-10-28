export const loginMiddlewares = async(req, res,  next) => {
    try{
        let body = req.body
        if(!body.username || !body.password){
            return res.status(400).send("Enter your username and password!")
        }
        next()
    }
    catch(e){
        next(e)
    }
}