import * as contactService from "../services/contactService"

export async function getContactLoader({params}) {
    const contactId = params.contactId;
    const contact = await contactService.getContact(contactId)
    return contact
}

export default function ContactDetails() {

    return (
        <div>
            <h1>Contact Details</h1>
        </div>
    )
}