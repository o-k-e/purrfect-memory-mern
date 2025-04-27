import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Logo from '../components/common/Logo.jsx';

function Welcome() {
	const paw = '🐾';
	const cat = '😺';
	const [user, setUser] = useState('');

	useEffect(() => {
		const loggedInUser = localStorage.getItem('user');
		if (loggedInUser) {
			const userObject = JSON.parse(loggedInUser);
			setUser(userObject.name);
		}
	}, []);

	return (
		<>
			<div className="bg-[#FAEEEE] p-10">
				<Logo />
			</div>

			<div className="flex flex-col items-center min-h-screen pt-30">
				<h1 className="pb-10">
					{paw} {paw} {paw} {cat} {paw} {paw} {paw}
				</h1>
				<h2 className="text-2xl font-bold mb-6 text-center">
					Welcome <span className="text-[#F0CDCC]">{user.toUpperCase()}</span>{' '}
					to the Purrfectly Pawsome Memory Game! 🐾
				</h2>

				<p className="text-lg mb-4 text-center max-w-2xl">
					Match adorable kitty cards and embark on a fur-ociously fun adventure.
				</p>
				<p className="text-lg mb-4 text-center max-w-2xl">
					Sharpen those claws and stretch those paws for a challenge where only
					the sharpest minds will prevail.
				</p>
				<p className="text-lg text-center max-w-2xl">
					Good luck, and may the purrs be ever in your favor!
				</p>

				<h1 className="pt-10">
					{paw} {paw} {paw} {cat} {paw} {paw} {paw}
				</h1>
				<div className="flex justify-center items-center gap-6 mt-8">
					<Link to="/login" className="w-full max-w-xs">
						<button className="w-full p-3 bg-[#F0CDCC] text-gray-700 rounded font-bold hover:bg-red-200 hover:text-gray-800 border border-transparent hover:border-gray-800 transition-colors">
							Login
						</button>
					</Link>

					<Link to="/register" className="w-full max-w-xs">
						<button className="w-full p-3 bg-[#F0CDCC] text-gray-700 rounded font-bold hover:bg-gray-400 transition-colors">
							Register
						</button>
					</Link>
				</div>
			</div>
		</>
	);
}

export default Welcome;
