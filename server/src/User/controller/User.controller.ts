import {CreateUserDto} from "../dtos/CreateUser.dto";
import {CreateUserRequest} from "./types";
import express from "express";
import {findUserByEmailService} from "../services/findUserByEmail.service";
import {createUserService} from "../services/createUser.service";

export class UserController {
    public create = async (req: CreateUserRequest, res: express.Response, next: express.NextFunction) => {
        const {email, username, password} = req.body
        try {
            const candidate = await findUserByEmailService(email)
            if (candidate) throw new Error('User with such email already exists');
            const user = await createUserService(email, username, password);
            res.status(201).json(user)
        } catch (e) {
            res.status(400).json({message: e.message})
        }
    }
}

export const userController = new UserController()