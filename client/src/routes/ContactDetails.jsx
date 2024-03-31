import { useLoaderData } from "react-router-dom";
import * as contactService from "../services/contactService"

export async function getContactLoader({params}) {
    const contactId = params.contactId;
    const contact = await contactService.getContact(contactId)
    return {contact}
}

export default function ContactDetails() {

    let {contact} = useLoaderData()
    console.log(contact)

    return (
        <section className="contact-details">
            <h1>Contact Details</h1>
            <h3>First Name: {contact.firstName}</h3>
            <h3>Last Name: {contact.lastName}</h3>
            <div className="img-container">
            <img src={contact.imageUrl} alt={`${contact.firstName} ${contact.lastName}`} />
            </div>
            <p>Notes: {contact.notes}</p>
            <button>{contact.isFavourite ? <span>&#9733;</span> : <span>&#9734;</span>}</button>
        </section>
    )
}