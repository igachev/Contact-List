
import './App.css'
import {Route, RouterProvider, createBrowserRouter,createRoutesFromElements} from "react-router-dom"
import ContactList, { getContactsLoader } from './routes/ContactList'
import ContactDetails, { deleteContactAction, getContactLoader } from './routes/ContactDetails'
import EditContact, { editContactAction } from './routes/EditContact'
import Login, { loginAction } from './routes/Login'
import Home from './routes/Home'
import Error from './routes/Error'
import CreateContact, { createContactAction } from './routes/CreateContact'

const router = createBrowserRouter(
  createRoutesFromElements(
   
    <>
   <Route path='/login' element={<Login />} action={loginAction} errorElement={<Error />} />
   <Route path='/contacts' element={<ContactList />} loader={getContactsLoader} />

  <Route path='/' element={<ContactList />} loader={getContactsLoader} errorElement={<Error />}>

    <Route errorElement={<Error />}>
    <Route index element={<Home />} />
    <Route path='contacts/create' element={<CreateContact />} action={createContactAction} />    
    <Route path='contacts/:contactId' element={<ContactDetails />} loader={getContactLoader} />
    <Route path='contacts/:contactId/edit' element={<EditContact />} loader={getContactLoader} action={editContactAction} />
    <Route path='contacts/:contactId/delete' action={deleteContactAction} />
    </Route>

    </Route>

    </>
  
  )
)

function App() {


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
