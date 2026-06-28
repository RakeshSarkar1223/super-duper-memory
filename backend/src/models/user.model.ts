import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema =new  mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    phone: {
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    passward:{
        type:String,
        required: true
    },
    createdAt:{
        type:Date,
        default: new Date(),
    }
})

userSchema.pre("save", async() => {
    this.passward = await bcrypt.hash(this.passward, 12);
})

const User = mongoose.model("User", userSchema);

export default User;