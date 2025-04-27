import { useState, useEffect } from 'react';
import Card from '../components/game/Card.jsx';
import Navbar from "../components/common/Navbar.jsx";
import meows from '../assets/audio/audio.js';
import purr from '../assets/audio/catpurr.mp3';
import backofcard from '../assets/images/cat-deck.png';

function Game() {
	const imageUrl = backofcard;
	const paw = '🐾';

	const [cats, setCats] = useState(null);
	const [firstCard, setFirstCard] = useState(null);
	const [secondCard, setSecondCard] = useState(null);
	const [stopFlip, setStopFlip] = useState(false);
	const [winner, setWinner] = useState(false);

	function shuffleDeck(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const random = Math.floor(Math.random() * (i + 1));
			[array[i], array[random]] = [array[random], array[i]];
		}
	}

	function addID(array) {
		let catArray = [];
		for (let i = 0; i < array.length; i++) {
			let object = { id: i, img: array[i], matched: false };
			catArray.push(object);
		}
		return catArray;
	}

	useEffect(() => {
		const fetchData = async () => {
			const data = await (
				await fetch(
					'https://api.thecatapi.com/v1/images/search?limit=6&api_key=live_Eh5ZLf7mKHLA9mwEJ5hoa8Rykvf1AKghBNe7bgTz41O6HpJmIw0CoTRgrxl2C1CT'
				)
			).json();
			const cards = [];
			data.map((datum) => {
				cards.push(datum.url);
			});
			let deck = cards;
			deck.push(...cards);
			shuffleDeck(deck);
			let catArray = addID(deck);
			setCats(catArray);
		};
		fetchData();
	}, []);

	function handleClick(cat) {
		playRandomMeow();
		if (firstCard !== null) {
			setSecondCard(cat);
		} else {
			setFirstCard(cat);
		}
	}

	function removeSelection() {
		setFirstCard(null);
		setSecondCard(null);
		setStopFlip(false);
	}

	function checkIfOver() {
		let counter = 0;
		for (let cat of cats) {
			if (cat.matched === true) {
				counter++;
				if (counter === 12) {
					setWinner(true);
				}
			}
		}
	}

	function playRandomMeow() {
		const randomNum = Math.floor(Math.random() * (meows.length - 0));
		const randomMeow = meows[randomNum];
		new Audio(randomMeow).play();
	}

	function playPurr() {
		new Audio(purr).play();
	}

	useEffect(() => {
		function checkIfMatch() {
			setTimeout(() => {
				if (firstCard && secondCard) {
					setStopFlip(true);
					if (firstCard.img === secondCard.img) {
						firstCard.matched = true;
						secondCard.matched = true;
					}
					removeSelection();
					checkIfOver();
				}
			}, 1000);
		}
		checkIfMatch();
	}, [firstCard, secondCard]);

	return (
		<div className="min-h-screen flex flex-col">
			<Navbar />
			<div className="flex flex-col items-center justify-center flex-grow p-8 bg-gray-50">
				{winner ? (
					<h1 className="text-2xl font-semibold mb-8 text-center animate-bounce text-red-200">
						<p className="pb-5">
							{paw} {paw} {paw}
						</p>
						Congratulations, you matched all the kitties!
						<p className="pt-5">
							{paw} {paw} {paw}
						</p>
						{playPurr()}
					</h1>
				) : (
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
						{cats
							? cats.map((cat) => (
									<Card
										key={cat.id}
										cat={cat}
										width={200}
										height={250}
										backOfImage={imageUrl}
										handleClick={handleClick}
										selected={
											cat === firstCard ||
											cat === secondCard ||
											cat.matched === true
										}
										stopFlip={stopFlip}
									/>
							  ))
							: 'Loading...'}
					</div>
				)}
			</div>
		</div>
	);
}

export default Game;
