import { Form, Link, NavLink, Outlet, useLoaderData, useNavigate, useNavigation, useSubmit } from "react-router-dom"
import * as contactService from "../services/contactService"
import { useState } from "react"
import Search from "./Search"

export async function getContactsLoader({request}) {

    let contacts = await contactService.getContacts()
    const url = new URL(request.url)
    const search = url.searchParams.get('search')
    if(search) {
     contacts = await contactService.searchContacts(search,search)
    }
    return {contacts,search}
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

          <Search />

          <div>
            {isAuthenticated && <Link to={`/contacts/create`}>Create Contact</Link>}
          </div>

            <div className="contacts">
            {contacts.length > 0
           ? contacts.map((contact) => (

            <div key={contact._id}>
                <NavLink to={`/contacts/${contact._id}`} 
                className={ ({ isActive,isPending }) => isActive ? 'active' : isPending ? 'pending' : '' }>
                    {contact.firstName} {contact.lastName}
                </NavLink>
            </div>
            
        ))
           : <p>No Results</p>
    }
            </div>
          </article>

            <div id="outlet" className={navigation.state === 'loading' ? 'loading' : ''}>
            <Outlet />
            </div>
           
        </div>
    )
}