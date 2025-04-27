import ReactDOM from 'react-dom/client'
import './index.css'
import './flip.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Scoreboard from './components/Scoreboard.jsx'
import Welcome from './components/Welcome.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import Game from './Game.jsx'
import UserProfile from './components/UserProfile.jsx'
import UpdatePassword from './components/UpdatePassword.jsx'


const router = createBrowserRouter([
  {path: "/game",
    element: <Game></Game>
  },
  {
    path: '/scoreboard',
    element: <Scoreboard></Scoreboard>
  },
  {
    path: '/welcome',
    element: <Welcome></Welcome>
  },
  {
    path: '/',
    element: <Login></Login>
  },
  {
    path: '/register',
    element: <Register></Register>
  },
  {
    path: '/user-profile',
    element: <UserProfile></UserProfile>
  },
  {
    path: '/update-password',
    element: <UpdatePassword></UpdatePassword>
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router}></RouterProvider>
  </>,
)
