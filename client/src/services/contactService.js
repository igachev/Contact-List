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

export async function editContact(contactId,contact) {
    const editedContact = await request.put(`${baseUrl}/${contactId}`,contact)
    return editedContact
}

export async function deleteContact(contactId) {
    const deletedContact = await request.del(`${baseUrl}/${contactId}`);
    return deletedContact
}