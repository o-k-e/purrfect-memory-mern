import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/flip.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Scoreboard from './pages/Scoreboard.jsx';
import Welcome from './pages/Welcome.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Game from './pages/Game.jsx';
import UserProfile from './pages/UserProfile.jsx';
import UpdatePassword from './pages/UpdatePassword.jsx';

const router = createBrowserRouter([
	{ path: '/game', element: <Game></Game> },
	{
		path: '/scoreboard',
		element: <Scoreboard></Scoreboard>,
	},
	{
		path: '/welcome',
		element: <Welcome></Welcome>,
	},
	{
		path: '/',
		element: <Login></Login>,
	},
	{
		path: '/register',
		element: <Register></Register>,
	},
	{
		path: '/user-profile',
		element: <UserProfile></UserProfile>,
	},
	{
		path: '/update-password',
		element: <UpdatePassword></UpdatePassword>,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<>
		<RouterProvider router={router}></RouterProvider>
	</>
);
