import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../components/common/Logo';

function Register() {
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
	const paw = '🐾';

	function handleSubmit(event) {
		event.preventDefault();

		const data = { name, password };

		const options = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		};

		fetch('/api/users', options)
			.then((response) => response.json())
			.then((user) => {
				console.log(user);
				localStorage.setItem('user', JSON.stringify(user));
				navigate('/login');
			})

			.catch((error) => console.error(error));
	}

	return (
		<>
			<div className="bg-[#FAEEEE] p-10">
				<Logo />
			</div>

			<div className="flex flex-col items-center min-h-screen bg-[#FAEEEE] pt-30">
				<h2 className="text-2xl font-bold mb-6">Register</h2>
				<form
					className="flex flex-col items-center border border-gray-300 p-6 rounded-lg bg-white w-full max-w-sm shadow-md"
					onSubmit={handleSubmit}
				>
					<label
						htmlFor="username-register-input"
						className="self-start mb-2 text-gray-700"
					>
						Username {paw}
					</label>
					<input
						id="username-register-input"
						name="username"
						type="text"
						value={name}
						onChange={(event) => setName(event.target.value)}
						className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-200"
					/>

					<label
						htmlFor="password-register-input"
						className="self-start mb-2 text-gray-700"
					>
						Password {paw}
					</label>
					<input
						id="password-register-input"
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
							Register
						</button>

						<Link to="/" className="w-full">
							<button
								id="cancel-btn"
								type="button"
								className="w-full p-3 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition-colors"
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

export default Register;
