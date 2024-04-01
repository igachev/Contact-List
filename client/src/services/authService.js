import * as request from "./requester"
const baseUrl = 'http://localhost:3030/users'

export async function login(email,password) {
    const userLogin = await request.post(`${baseUrl}/login`,{email,password})
    return userLogin
}