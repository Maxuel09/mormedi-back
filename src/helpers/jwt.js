import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

const createToken = (payload) =>{
    const token = jwt.sign({id:payload}, JWT_SECRET,{
        expiresIn: '1h'
    });
    console.log(token)
    return token;
}
const verifyToken = (token) =>{
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded;
    
}

export { createToken, verifyToken}



