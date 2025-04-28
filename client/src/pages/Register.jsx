import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../components/common/Logo';
import Button from '../components/common/Button';

function Register() {
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

		fetch('/api/users', options)
			.then((response) => response.json())
			.then((user) => {
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

			<div className="flex flex-col items-center min-h-screen bg-[#FAEEEE] pt-10">
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
						<Button
							buttonText="Register"
							type="submit"
							className="btn-primary mb-4"
						/>

						<Link to="/" className="w-full">
							<Button
								buttonText="Cancel"
								type="button"
								className="btn-secondary"
							/>
						</Link>
					</div>
				</form>
			</div>
		</>
	);
}

export default Register;
