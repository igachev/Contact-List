
import './App.css'
import {Route, RouterProvider, createBrowserRouter,createRoutesFromElements} from "react-router-dom"
import ContactList, { getContactsLoader } from './routes/ContactList'
import ContactDetails from './routes/ContactDetails'

const router = createBrowserRouter(
  createRoutesFromElements(
   
    <Route path='/' element={<ContactList />} loader={getContactsLoader}>

    <Route path='contacts/:contactId' element={<ContactDetails />} />
    
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
