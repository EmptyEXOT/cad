import {Express} from "express";
import * as mongoose from "mongoose";

export async function main(app: Express) {
    const SERVER_PORT = Number(process.env.SERVER_PORT) || 3000
    const DB_PORT = Number(process.env.DB_PORT) || 27017;
    const HOST_NAME = process.env.HOST_NAME || 'localhost';
    const DB_NAME = process.env.DB_NAME;
    if (!DB_NAME) throw new Error('DB name doesnt specified. Check your .env file');

    try {
        await mongoose.connect(`mongodb://${HOST_NAME}:${DB_PORT}/${DB_NAME}`)
        app.listen(SERVER_PORT, HOST_NAME, () => {
            console.log(`Server with hostname: ${HOST_NAME} working on port: ${SERVER_PORT}`)
            console.log(`DB '${DB_NAME}' working on port: ${DB_PORT}`)
            console.log('Listening...')
        })

    } catch (e) {
        console.error(e.message)
    }
}