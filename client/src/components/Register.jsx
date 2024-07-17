import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import '../form.css';

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
				navigate('/Welcome');
			})

			.catch((error) => console.error(error));
	}

	return (
        <>
        <Logo/>
		<div>
			<h2>Register</h2>
			<form className="register-form" onSubmit={handleSubmit}>
				<label htmlFor="username-register-input">Username {paw}</label>
				<input
					id="username-register-input"
					name="username"
					type="text"
					value={name}
					onChange={(event) => setName(event.target.value)}
				></input>
				<br />
				<label htmlFor="password-register-input">Password {paw}</label>
				<input
					id="password-register-input"
					name="password"
					type="password"
					value={password}
					onChange={(event) => setPassword(event.target.value)}
				></input>
				<br />
				<div>
					<button type="submit">Register</button>
					<Link to="/">
						<button id="cancel-btn" type="button">
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
