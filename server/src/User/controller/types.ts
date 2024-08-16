import {Request} from "express";
import {CreateUserDto} from "../dtos/CreateUser.dto";

export interface CreateUserRequest extends Request {
    body: CreateUserDto
}