import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/flip.css';
import './styles/button.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Scoreboard from './pages/Scoreboard.jsx';
import Welcome from './pages/Welcome.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Game from './pages/Game.jsx';
import UserProfile from './pages/UserProfile.jsx';
import UpdatePassword from './pages/UpdatePassword.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Welcome />,
	},
	{ path: '/game', 
    element: <Game /> },
	{
		path: '/scoreboard',
		element: <Scoreboard />,
	},
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/register',
		element: <Register />,
	},
	{
		path: '/user-profile',
		element: <UserProfile />,
	},
	{
		path: '/update-password',
		element: <UpdatePassword />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<>
		<RouterProvider router={router}></RouterProvider>
	</>
);
