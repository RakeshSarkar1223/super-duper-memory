import jwt from "jsonwebtoken"
import dotenv from "dotenv"
// import { verify } from "node:crypto"
dotenv.config()

export const createToken = (id) =>{
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: 3 * 24 * 60 * 60,})
}

export const verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
}