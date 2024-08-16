import {findUserByEmailService} from "../../User/services/findUserByEmail.service";
import {LoginRequest, RegisterRequest} from "./types";
import {NextFunction, Response} from "express";
import {createUserService} from "../../User/services/createUser.service";
import {hashSync} from 'bcrypt'

export class AuthController {
    public register = async (req: RegisterRequest, res: Response, next: NextFunction) => {
        const {email, username, password} = req.body
        try {
            const candidate = await findUserByEmailService(email);
            if (candidate) throw new Error('User with such email already exists');
            const hashPassword = hashSync(password, 8);
            const user = await createUserService(email, username, hashPassword);
            await user.save();
            res.status(201).json(user);
        } catch (e) {
            res.status(400).json({message: e.message});
        }
    }

    public login = async (req: LoginRequest, res: Response, next: NextFunction) => {
        const {email, password} = req.body
        try {
            const candidate = await findUserByEmailService(email);
            if (!candidate) throw new Error('Incorrect email or password');
            const hashPassword = hashSync(password, 8);

            // TODO hash() and compare with value from db
        } catch (e) {
            res.status(400).json({message: e.message})
        }
    }
}

export const authController = new AuthController()