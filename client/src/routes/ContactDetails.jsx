import { Form, Link, redirect, useLoaderData } from "react-router-dom";
import * as contactService from "../services/contactService"
import { useState } from "react";

export async function getContactLoader({params}) {
    const contactId = params.contactId;
    const contact = await contactService.getContact(contactId)
    return {contact}
}

export async function deleteContactAction({params}) {
    const contactId = params.contactId;
    const deletedContact = await contactService.deleteContact(contactId)
    return redirect('/');
}

export default function ContactDetails() {

    let {contact} = useLoaderData()
   // console.log(contact)
   const [isAuthenticated,setIsAuthenticated] = useState(() => {
    let accessToken = localStorage?.getItem('accessToken')
    if(accessToken != null) {
        return true;
    }
    return false;
})

function onDeleteContact(e) {
    const deleteConfirmed = confirm(`Are you sure you want to delete contact ${contact.firstName} ${contact.lastName}?`)
    if(!deleteConfirmed) {
        e.preventDefault()
    }
}

    return (
        <section className={`contact-details`}>
            <h1>Contact Details</h1>
            <h3>First Name: {contact.firstName}</h3>
            <h3>Last Name: {contact.lastName}</h3>
            <div className="img-container">
            <img src={contact.imageUrl} alt={`${contact.firstName} ${contact.lastName}`} />
            </div>
            <p>Notes: {contact.notes}</p>
            {isAuthenticated && (
                <>
                <button>{contact.isFavourite ? <span>&#9733;</span> : <span>&#9734;</span>}</button>

                <Form action="edit" method="get">
                <button>Edit</button>
                </Form>

                <Form action="delete" method="delete" onSubmit={onDeleteContact}>
                <button>Delete</button>
                </Form>
                </>
            )}
        </section>
    )
}