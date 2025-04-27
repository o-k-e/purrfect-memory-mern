import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import '../form.css'

function Login() {
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
	const paw = '🐾';

	function handleSubmit(event) {
        event.preventDefault();

        const data = {name, password};

        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data),
        };

        fetch('/api/user', options)
            .then((response) => response.json())
            .then((result) => {
                if (result.success) {
                    console.log('Result on frontend: ', result.user)
                    localStorage.setItem('user', JSON.stringify(result.user));
                    navigate('/welcome');
                } else {
                    console.log('Login failed:', result.message);
                    alert('Not a registered user. Please register.')
                    navigate('/register');
                }
            })
            .catch((error) => console.log('Error:', error));

    }

	return (
		<>
		<Logo />
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
		  <h2 className="text-2xl font-bold mb-6">Login or Register</h2>
		  <form
			className="flex flex-col items-center border border-gray-300 p-6 rounded-lg bg-white w-full max-w-sm shadow-md"
			onSubmit={handleSubmit}
		  >
			<label htmlFor="username-login-input" className="self-start mb-2 text-gray-700">
			  Username {paw}
			</label>
			<input
			  id="username-login-input"
			  name="username"
			  type="text"
			  value={name}
			  onChange={(event) => setName(event.target.value)}
			  className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
			/>
	
			<label htmlFor="password-login-input" className="self-start mb-2 text-gray-700">
			  Password {paw}
			</label>
			<input
			  id="password-login-input"
			  name="password"
			  type="password"
			  value={password}
			  onChange={(event) => setPassword(event.target.value)}
			  className="w-full p-2 mb-6 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
			/>
	
			<div className="w-full flex flex-col items-center">
			  <button
				type="submit"
				className="w-full p-3 mb-4 bg-orange-400 text-white rounded hover:bg-orange-500 transition-colors"
			  >
				Log in
			  </button>
	
			  <p className="text-sm text-gray-500 my-2">------------------ or ------------------</p>
	
			  <Link to="/register" className="w-full">
				<button
				  type="button"
				  className="w-full p-3 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition-colors"
				>
				  Register
				</button>
			  </Link>
			</div>
		  </form>
		</div>
	  </>
	);
}

export default Login;
