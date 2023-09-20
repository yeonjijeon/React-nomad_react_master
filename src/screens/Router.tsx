import { createBrowserRouter } from "react-router-dom"
import Root from "../Root"
import About from "./About"
import Home from "./Home"
import NotFound from "./NotFount"
import ErrorComponent from "../components/ErrorComponent"
import User from "./users/User"


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound/>,
    children: [
      {
        path: '',
        element: <Home/>,
        errorElement: <ErrorComponent/>
      },
      {
        path: 'about',
        element: <About/>,
      },
      {
        path: 'users/:userId',
        element: <User />,
      }
    ]
  },
])

export default router
