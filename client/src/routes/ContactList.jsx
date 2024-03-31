import { NavLink, Outlet, useLoaderData } from "react-router-dom"
import * as contactService from "../services/contactService"

export async function getContactsLoader() {

    let contacts = await contactService.getContacts()
    return {contacts}
}

export default function ContactList() {

    let {contacts} = useLoaderData()
    console.log(contacts)

    return (
        <div>
            <h1>Contact List</h1>

            <div>
                {contacts.map((contact) => (

                        <div key={contact._id}>
                            <NavLink to={`/contacts/${contact._id}`}>
                                {contact.firstName} {contact.lastName}
                            </NavLink>
                        </div>
                        
                    ))}
            </div>

            <Outlet />
        </div>
    )
}