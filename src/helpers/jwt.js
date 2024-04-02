import { Verify,Sign } from "crypto";

const JWT_SECRET = process.env.JWT_SECRET;

const createToken =(payload) =>{
    const token = Sign({id:payload}, JWT_SECRET,{
        expiresIn: '1h'

    });
    return token;
}
const verifyToken = (token) =>{
    const decoded = Verify(token, JWT_SECRET);
    return decoded;
    
}

export { createToken, verifyToken}



