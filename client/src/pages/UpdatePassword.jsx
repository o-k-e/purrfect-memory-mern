import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/common/Navbar.jsx';

function UpdatePassword() {
	const [currentPassword, setCurrentPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');

	function handleUpdatePassword() {}

	return (
		<>
			<Navbar />
			<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
				<h3 className="text-2xl font-bold mb-6">Update Password</h3>
				<form
					className="flex flex-col items-center border border-gray-300 p-6 rounded-lg bg-white w-full max-w-sm shadow-md"
					onSubmit={handleUpdatePassword}
				>
					<div className="w-full mb-4">
						<label
							htmlFor="password-current-input"
							className="block text-gray-700 mb-2"
						>
							Current Password:
						</label>
						<input
							id="password-current-input"
							name="old-password"
							type="password"
							value={currentPassword}
							onChange={(event) => setCurrentPassword(event.target.value)}
							className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
						/>
					</div>

					<div className="w-full mb-6">
						<label
							htmlFor="password-update-input"
							className="block text-gray-700 mb-2"
						>
							New Password:
						</label>
						<input
							id="password-update-input"
							name="new-password"
							type="password"
							value={newPassword}
							onChange={(event) => setNewPassword(event.target.value)}
							className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
						/>
					</div>

					<button
						type="submit"
						className="w-full p-3 mb-4 bg-orange-400 text-white rounded hover:bg-orange-500 transition-colors"
					>
						Update Password
					</button>

					<Link to="/user-profile" className="w-full">
						<button
							id="cancel-password-btn"
							type="button"
							className="w-full p-3 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition-colors"
						>
							Cancel
						</button>
					</Link>
				</form>
			</div>
		</>
	);
}

export default UpdatePassword;
