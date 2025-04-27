import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../components/common/Logo';

function Login() {
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
	const paw = '🐾';

	function handleSubmit(event) {
		event.preventDefault();

		if (!name.trim() || !password.trim()) {
			alert('Please fill out both fields before logging in.');
			return;
		}

		const data = { name, password };

		const options = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		};

		fetch('/api/user', options)
			.then((response) => response.json())
			.then((result) => {
				if (result.success) {
					localStorage.setItem('user', JSON.stringify(result.user));
					navigate('/game');
				} else {
					alert('Not a registered user. Please register.');
					navigate('/register');
				}
			})
			.catch((error) => {
				console.error('Error:', error);
				alert('Something went wrong during login. Please try again later.');
			});
	}

	return (
		<>
			<div className="bg-[#FAEEEE] p-10">
				<Logo />
			</div>

			<div className="flex flex-col items-center min-h-screen pt-10 bg-[#FAEEEE]">
				<h2 className="text-2xl font-bold mb-6">Login or Register</h2>
				<form
					className="flex flex-col items-center border border-gray-300 p-6 rounded-lg bg-white w-full max-w-sm shadow-md"
					onSubmit={handleSubmit}
				>
					<label
						htmlFor="username-login-input"
						className="self-start mb-2 text-gray-700"
					>
						Username {paw}
					</label>
					<input
						id="username-login-input"
						name="username"
						type="text"
						value={name}
						onChange={(event) => setName(event.target.value)}
						className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-200"
					/>

					<label
						htmlFor="password-login-input"
						className="self-start mb-2 text-gray-700"
					>
						Password {paw}
					</label>
					<input
						id="password-login-input"
						name="password"
						type="password"
						value={password}
						onChange={(event) => setPassword(event.target.value)}
						className="w-full p-2 mb-6 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-200"
					/>

					<div className="w-full flex flex-col items-center">
						<button
							type="submit"
							className="w-full p-3 mb-4 bg-[#F0CDCC] text-white rounded hover:bg-red-200 hover:text-gray-800 border border-transparent hover:border-gray-800 transition-colors"
						>
							Log in
						</button>

						<p className="text-sm text-gray-500 my-2">
							------------------ or ------------------
						</p>

						<Link to="/register" className="w-full pb-5">
							<button
								type="button"
								className="w-full p-3 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition-colors"
							>
								Register
							</button>
						</Link>

						<Link to="/" className="w-full">
							<button
								type="button"
								className="w-full p-3 bg-gray-200 text-gray-700 rounded hover:bg-gray-400 transition-colors"
							>
								Cancel
							</button>
						</Link>
					</div>
				</form>
			</div>
		</>
	);
}

export default Login;
