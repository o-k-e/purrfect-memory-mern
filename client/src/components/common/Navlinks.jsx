import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import meows from '../../assets/audio/audio.js';
import Button from './Button.jsx';

function playRandomMeow() {
	const randomIndex = Math.floor(Math.random() * meows.length);
	const randomMeow = meows[randomIndex];
	new Audio(randomMeow).play();
}

function Navlinks() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		const loggedInUser = localStorage.getItem('user');
		if (loggedInUser) {
			setIsLoggedIn(true);
		}
	}, []);

	if (!isLoggedIn) {
		return null;
	}

	return (
		<div className="flex items-center gap-4">
			<Button
				buttonText="Meow"
				onClick={playRandomMeow}
				className="btn-primary"
			/>

			<Link to="/game">
				<Button buttonText="Play" className="btn-primary" />
			</Link>
			<Link to="/scoreboard">
				<Button buttonText="Scoreboard" className="btn-primary" />
			</Link>
			<Link to="/user-profile">
				<Button buttonText="User Profile" className="btn-primary" />
			</Link>
		</div>
	);
}

export default Navlinks;
