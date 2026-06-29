import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true, // Prevents duplicate email registrations
        lowercase: true // Automatically converts emails to lowercase
    },
    password: { // Fixed typo: 'passward' -> 'password'
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now, // Fixed: Pass the function reference, not an executed date
    }
});

userSchema.pre("save", async function () {
    if (!this.isModified("password")) return;

    this.password = await bcrypt.hash(this.password, 12);
});

const User = mongoose.model("User", userSchema);

export default User;
