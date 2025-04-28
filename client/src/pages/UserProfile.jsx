import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/common/Navbar.jsx';
import Button from '../components/common/Button.jsx';

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
	}, [navigate]);

	function handleLogout() {
		localStorage.removeItem('user');
		navigate('/');
	}

	async function handleDeleteAccount(id) {
		if (!id) return;

		const confirmed = window.confirm(
			`Are you sure you want to delete your account, ${user?.name}?`
		);

		if (!confirmed) return;

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

	if (!user) {
		return (
			<div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
				<Navbar />
				<p className="mt-8 text-gray-500">Loading user profile...</p>
			</div>
		);
	}

	return (
		<div className="min-h-screen flex flex-col items-center bg-gray-50">
			<Navbar />
			<div className="flex flex-col items-center mt-8">
				<h2 className="text-2xl font-bold mb-4">User Profile</h2>
				<p className="text-lg font-semibold">{user.name}</p>
				<p className="text-gray-600 mb-6">Highest Score: {user.score}</p>

				<div className="flex flex-col gap-4 w-full max-w-xs">
					<Link to="/update-password">
						<Button buttonText="Update Password" className="btn-primary" />
					</Link>

					<Button
						buttonText="Logout"
						className="btn-primary"
						onClick={handleLogout}
					/>

					<Button
						buttonText="Delete Account"
						className="btn-secondary"
						onClick={() => handleDeleteAccount(user._id)}
					/>
				</div>
			</div>
		</div>
	);
}

export default UserProfile;
