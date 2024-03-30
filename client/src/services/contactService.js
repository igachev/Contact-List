import * as request from './requester'

const baseUrl = 'http://localhost:3030/data/contacts'

export async function getContacts() {
    const contacts = await request.get(baseUrl)
    return contacts
}