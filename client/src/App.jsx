
import './App.css'
import {Route, RouterProvider, createBrowserRouter,createRoutesFromElements} from "react-router-dom"
import ContactList, { getContactsLoader } from './routes/ContactList'
import ContactDetails, { getContactLoader } from './routes/ContactDetails'
import EditContact from './routes/EditContact'

const router = createBrowserRouter(
  createRoutesFromElements(
   
    <Route path='/' element={<ContactList />} loader={getContactsLoader}>

    <Route path='contacts/:contactId' element={<ContactDetails />} loader={getContactLoader} />
    <Route path='contacts/:contactId/edit' element={<EditContact />} loader={getContactLoader} />
    </Route>
  
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
