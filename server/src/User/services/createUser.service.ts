import {User} from "../model/User.model";

export const createUserService = async (email: string, username: string, password: string) => {
    return new User({email, username, password})
}