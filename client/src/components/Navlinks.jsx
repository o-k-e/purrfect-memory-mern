import { Link } from 'react-router-dom';

import meows from './audio';

function playRandomMeow() {
	const randomNum = Math.floor(Math.random() * (meows.length - 0));
	const randomMeow = meows[randomNum];
	new Audio(randomMeow).play();
}

function Navlinks() {
	return (
		<div className="flex items-center gap-4">
			<button
				onClick={playRandomMeow}
				className="text-gray-700 px-4 py-2 rounded hover:bg-pink-300 transition-colors"
				style={{ backgroundColor: '#F0CDCC' }}
			>
				Meow
			</button>
			<Link to="/game">
				<button
					className="bg-pink-200 text-gray-700 px-4 py-2 rounded hover:bg-pink-300 transition-colors"
					style={{ backgroundColor: '#F0CDCC' }}
				>
					Play
				</button>
			</Link>
			<Link to="/scoreboard">
				<button
					className="bg-pink-200 text-gray-700 px-4 py-2 rounded hover:bg-pink-300 transition-colors"
					style={{ backgroundColor: '#F0CDCC' }}
				>
					Scoreboard
				</button>
			</Link>
			<Link to="/user-profile">
				<button
					className="bg-pink-200 text-gray-700 px-4 py-2 rounded hover:bg-pink-300 transition-colors"
					style={{ backgroundColor: '#F0CDCC' }}
				>
					User Profile
				</button>
			</Link>
		</div>
	);
}

export default Navlinks;
