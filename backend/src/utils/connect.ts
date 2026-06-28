import mongoose from "mongoose";
import { log } from "node:console";


const connect = async (uri: string) => {
    try {
        await mongoose.connect(uri);
        log("Db connected!")
    } catch (error) {
        log("error ", error);
    }
}

export default connect;