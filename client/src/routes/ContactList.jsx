import { Link, NavLink, Outlet, useLoaderData, useNavigate, useNavigation } from "react-router-dom"
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
    const navigation = useNavigation()
    const navigate = useNavigate()

    function onLogout() {
        setIsAuthenticated(false)
        localStorage.removeItem('accessToken')
        navigate('/')
    }

    return (
        <div className="contact-list-container">
          
        <div>
           {!isAuthenticated &&  <Link to={`/login`}>Login</Link>}
           {isAuthenticated && <button onClick={onLogout}>Logout</button>}
        </div>

          <article>
          <h1>Contact List</h1>

          <div>
            {isAuthenticated && <Link to={`/contacts/create`}>Create Contact</Link>}
          </div>

            <div className="contacts">
            {contacts.map((contact) => (

            <div key={contact._id}>
                <NavLink to={`/contacts/${contact._id}`} 
                className={ ({ isActive,isPending }) => isActive ? 'active' : isPending ? 'pending' : '' }>
                    {contact.firstName} {contact.lastName}
                </NavLink>
            </div>
            
        ))}
            </div>
          </article>

            <div id="outlet" className={navigation.state === 'loading' ? 'loading' : ''}>
            <Outlet />
            </div>
           
        </div>
    )
}