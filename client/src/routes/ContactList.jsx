import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom"
import * as contactService from "../services/contactService"
import { useEffect, useState } from "react"

export async function getContactsLoader() {

    let contacts = await contactService.getContacts()
    return {contacts}
}

export default function ContactList() {

    let {contacts} = useLoaderData()
    const [isAuthenticated,setIsAuthenticated] = useState(() => {
        let accessToken = localStorage?.getItem('accessToken')
        if(accessToken != null) {
            return true;
        }
        return false;
    })

    function onLogout() {
        setIsAuthenticated(false)
        localStorage.removeItem('accessToken')
    }

    return (
        <div className="contact-list-container">
          
        <div>
           {!isAuthenticated &&  <Link to={`/login`}>Login</Link>}
           {isAuthenticated && <button onClick={onLogout}>Logout</button>}
        </div>

          <article>
          <h1>Contact List</h1>

            <div className="contacts">
            {contacts.map((contact) => (

            <div key={contact._id}>
                <NavLink to={`/contacts/${contact._id}`}>
                    {contact.firstName} {contact.lastName}
                </NavLink>
            </div>
            
        ))}
            </div>
          </article>

            <Outlet />
        </div>
    )
}