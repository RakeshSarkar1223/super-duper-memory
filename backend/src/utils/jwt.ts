import jwt from "jsonwebtoken"
import dotenv from "dotenv"
// import { verify } from "node:crypto"
dotenv.config()

const secret = process.env.JWT_SECRET as string;
if (!secret) {
    throw new Error("Secret key needed");
}

export const createToken = (id : string) =>{
    return jwt.sign({id}, secret, {expiresIn: 3 * 24 * 60 * 60})
}

export const verifyToken = (token : string) => {
    return jwt.verify(token, secret);
}