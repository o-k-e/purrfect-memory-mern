import { Link } from 'react-router-dom';

import meows from '../../assets/audio/audio';

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
				className="text-gray-700 px-4 py-2 rounded bg-[#F0CDCC] hover:bg-red-200 border border-transparent hover:border-gray-800 transition-colors"
			>
				Meow
			</button>
			<Link to="/game">
				<button
					className="text-gray-700 px-4 py-2 rounded bg-[#F0CDCC] hover:bg-red-200 border border-transparent hover:border-gray-800 transition-colors"
				>
					Play
				</button>
			</Link>
			<Link to="/scoreboard">
				<button
					className="text-gray-700 px-4 py-2 rounded bg-[#F0CDCC] hover:bg-red-200 border border-transparent hover:border-gray-800 transition-colors"
				>
					Scoreboard
				</button>
			</Link>
			<Link to="/user-profile">
				<button
					className="text-gray-700 px-4 py-2 rounded bg-[#F0CDCC] hover:bg-red-200 border border-transparent hover:border-gray-800 transition-colors"
				>
					User Profile
				</button>
			</Link>
		</div>
	);
}

export default Navlinks;
