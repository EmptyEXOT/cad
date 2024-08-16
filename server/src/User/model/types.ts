export interface UserModel {
    email: string,
    username: string,
    password: string,
    isConfirmed: boolean,
    confirmationLink: string,
}