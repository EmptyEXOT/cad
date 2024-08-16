import mongoose, {Schema} from 'mongoose'
import {UserModel} from "./types";

const userScheme =
    new Schema<UserModel>({
        username: {type: String, required: true},
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true},
        isConfirmed: {type: Boolean, required: true, default: false},
        confirmationLink: {type: String, required: false},
    })

export const User = mongoose.model("User", userScheme)