import pg from "pg"
const { Client } = pg

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'onlinemarket',
    password: 'Mm08gulomov',
    port: 5432
})
await client.connect()
export const getAllUser = async() =>{
    let text = 'select * from users'
    let data = await client.query(text)
    return data.rows
}
// getAllUser()


export const createUser = async (newUser) => {
    try {
        let text = `insert into users(username, password, firstname, lastname, email, adress) values($1, $2, $3, $4, $5, $6)`
        let values = []
        values.push(newUser["username"], newUser["password"], newUser["firstname"], newUser["lastname"], newUser["email"], newUser["addres"])

        await client.query(text, values);
        return true;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const createProduct = async (newProduct, id) => {
    try {
        let text = `insert into products(name, quantity, price, user_id, type) values($1, $2, $3, $4, $5)`
        let values = []
        values.push(newProduct["name"], newProduct["quantity"], newProduct["price"], id, newProduct["type"])

        await client.query(text, values);
        return true;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const getALlProduct = async() =>{
    let text = 'select * from products'
    let data = await client.query(text)
    return data.rows
}

export const searchProduct = async(search) =>{
    let text = 'select * from products where name = $1'
    let data = await client.query(text, [search])
    return data.rows
}


export const updateProduct = async (newProduct, id) => {
    try {
        let text = `update products
        set name = $1, quantity = $2, price = $3, type = $4
        where id = $5
        `
        let values = []
        values.push(newProduct["name"], newProduct["quantity"], newProduct["price"], newProduct["type"], id)

        await client.query(text, values);
        return true;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
export const deleteProduct = async (id) => {
    try {
        let text = `delete from products where id = $1`
        let values = []
        values.push(id)

        await client.query(text, values);
        return true;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const createOrders = async (newProduct, id) => {
    try {
        let text = `insert into orders(product_id, user_id, delivey_date) values($1, $2, $3)`
        let values = []
        values.push(newProduct["product_id"], id,newProduct["delivery_date"])
        await client.query(text, values);
        return true;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};


export const getOrders = async() =>{
    let text = 'select * from orders'
    let data = await client.query(text)
    return data.rows
}

export const getById = async(id) =>{
    let text = 'select * from orders where id = $1'
    let data = await client.query(text, [+id])
    return data.rows
}

export const deleteByIdOnOredres = async(id) =>{
    let text = 'delete from orders where id = $1'
    let data = await client.query(text, [+id])
    return data
}



export const createComment = async (newComment, id) => {
    try {
        let text = `insert into comments(comment_text, user_id, product_id) values($1, $2, $3)`
        let values = []
        values.push(newComment.text, id, newComment.product_id)
        await client.query(text, values);
        return true;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};


export const getAllComment = async() =>{
    let text = 'select * from comments'
    let data = await client.query(text)
    return data.rows
}

export const getByIdComment = async(id) =>{
    let text = 'select * from comments where id = $1'
    let data = await client.query(text, [id])
    return data.rows
}

export const deleteByIdComment = async(id) =>{
    let text = 'delete from comments where id = $1'
    let data = await client.query(text, [id])
    return data
}