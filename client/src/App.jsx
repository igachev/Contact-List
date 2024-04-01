
import './App.css'
import {Route, RouterProvider, createBrowserRouter,createRoutesFromElements} from "react-router-dom"
import ContactList, { getContactsLoader } from './routes/ContactList'
import ContactDetails, { getContactLoader } from './routes/ContactDetails'
import EditContact, { editContactAction } from './routes/EditContact'
import Login, { loginAction } from './routes/Login'

const router = createBrowserRouter(
  createRoutesFromElements(
   
    <>
   <Route path='login' element={<Login />} action={loginAction} />
  <Route path='/' element={<ContactList />} loader={getContactsLoader}>
    
<Route path='contacts/:contactId' element={<ContactDetails />} loader={getContactLoader} />
<Route path='contacts/:contactId/edit' element={<EditContact />} loader={getContactLoader} action={editContactAction} />

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
