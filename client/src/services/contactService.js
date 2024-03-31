import * as request from './requester'

const baseUrl = 'http://localhost:3030/data/contacts'

export async function getContacts() {
    const contacts = await request.get(baseUrl)
    return contacts
}

export async function getContact(contactId) {
    const contact = await request.get(`${baseUrl}/${contactId}`)
    return contact
}