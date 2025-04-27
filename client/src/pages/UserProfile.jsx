import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/common/Navbar.jsx';

function UserProfile() {
	const [user, setUser] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		const loggedInUser = localStorage.getItem('user');

		if (loggedInUser) {
			const userObject = JSON.parse(loggedInUser);
			setUser(userObject);
		} else {
			navigate('/');
		}
	}, []);

	function handleLogout() {
		localStorage.removeItem('user');
		navigate('/');
	}

	async function handleDeleteAccount(id) {
		alert(`Deleting your account... We are sorry to see you go, ${user.name}`);

		const options = {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
		};

		try {
			const response = await fetch(`/api/user/${id}`, options);
			if (response.ok) {
				localStorage.removeItem('user');
				navigate('/');
			} else {
				console.error('Failed to delete user');
			}
		} catch (error) {
			console.error('Internal server error', error);
		}
	}

	return (
		<div className="min-h-screen flex flex-col items-center bg-gray-50">
		  <Navbar />
		  {user ? (
			<div className="flex flex-col items-center mt-8">
			  <h2 className="text-2xl font-bold mb-4">User Profile</h2>
			  <p className="text-lg font-semibold">{user.name}</p>
			  <p className="text-gray-600 mb-6">Highest Score: {user.score}</p>
			  <Link to="/update-password">
				<button className="px-6 py-2 mb-4 font-bold rounded bg-[#F0CDCC] hover:bg-red-200 border border-transparent hover:border-gray-800 transition">
				  Update Password
				</button>
			  </Link>
			  <button onClick={handleLogout} className="px-6 py-2 mb-4 font-bold rounded bg-[#F0CDCC] hover:bg-red-200 border border-transparent hover:border-gray-800 transition">
				Logout
			  </button>
			  <button onClick={() => handleDeleteAccount(user._id)} className="px-6 py-2 font-bold rounded bg-[#F0CDCC] hover:bg-red-200 border border-transparent hover:border-gray-800 transition">
				Delete Account
			  </button>
			</div>
		  ) : (
			<p className="mt-8 text-gray-500">Loading...</p>
		  )}
		</div>
	  );
}

export default UserProfile;
