import {User} from "../model/User.model";

export const findUserByEmailService = async (email: string) => {
    const candidate = await User.findOne({email: email}).exec();
    return candidate;
}