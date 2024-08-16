import {Request} from "express";
import {CreateUserDto} from "../../User/dtos/CreateUser.dto";

export interface RegisterRequest extends Request {
    body: CreateUserDto
}

export interface LoginRequest extends Request {
    body: {
        email: string,
        password: string,
    }
}