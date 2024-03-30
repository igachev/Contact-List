
import './App.css'
import {Route, RouterProvider, createBrowserRouter,createRoutesFromElements} from "react-router-dom"
import ContactList from './routes/ContactList'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<ContactList />}>

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
