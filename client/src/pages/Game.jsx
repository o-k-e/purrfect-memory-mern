import { useState, useEffect } from 'react';
import Card from '../components/game/Card.jsx';
import Navbar from '../components/common/Navbar.jsx';
import meows from '../assets/audio/audio.js';
import purrSound from '../assets/audio/catpurr.mp3';
import backOfCard from '../assets/images/cat-deck.png';

const PAW = '🐾';

function Game() {
  const [cats, setCats] = useState([]);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [stopFlip, setStopFlip] = useState(false);
  const [winner, setWinner] = useState(false);

  useEffect(() => {
    fetchCats();
  }, []);

  useEffect(() => {
    if (firstCard && secondCard) {
      checkIfMatch();
    }
  }, [firstCard, secondCard]);

  async function fetchCats() {
	try {
	  const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=8&api_key=live_Eh5ZLf7mKHLA9mwEJ5hoa8Rykvf1AKghBNe7bgTz41O6HpJmIw0CoTRgrxl2C1CT`
	  );
	  const data = await response.json();
	  const images = data.map((cat) => cat.url);  
	  const duplicatedDeck = [...images, ...images];  
	  const shuffledDeck = shuffleDeck(duplicatedDeck);
	  const deckWithIds = assignIds(shuffledDeck);  
	  setCats(deckWithIds);
	} catch (error) {
	  console.error('Failed to fetch cat images:', error);
	}
  }

  function shuffleDeck(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  function assignIds(array) {
    return array.map((img, index) => ({
      id: index,
      img,
      matched: false,
    }));
  }

  function handleClick(cat) {
    if (stopFlip) return;
    playRandomMeow();
    if (firstCard) {
      setSecondCard(cat);
    } else {
      setFirstCard(cat);
    }
  }

  function checkIfMatch() {
    setStopFlip(true);
    setTimeout(() => {
      if (firstCard.img === secondCard.img) {
        const updatedCats = cats.map((c) =>
          c.img === firstCard.img ? { ...c, matched: true } : c
        );
        setCats(updatedCats);
        checkForWinner(updatedCats);
      }
      resetSelections();
    }, 1000);
  }

  function resetSelections() {
    setFirstCard(null);
    setSecondCard(null);
    setStopFlip(false);
  }

  function checkForWinner(updatedCats) {
    const allMatched = updatedCats.every((cat) => cat.matched);
    if (allMatched) {
      setWinner(true);
      playPurr();
    }
  }

  function playRandomMeow() {
    const randomMeow = meows[Math.floor(Math.random() * meows.length)];
    new Audio(randomMeow).play();
  }

  function playPurr() {
    new Audio(purrSound).play();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-col items-center justify-center flex-grow p-8 bg-gray-50">
        {winner ? (
          <h1 className="text-2xl font-semibold mb-8 text-center animate-bounce text-red-200">
            <p className="pb-5">{PAW} {PAW} {PAW}</p>
            Congratulations, you matched all the kitties!
            <p className="pt-5">{PAW} {PAW} {PAW}</p>
          </h1>
        ) : (
          <div className="grid grid-cols-4 gap-6">
            {cats.length > 0 ? (
              cats.map((cat) => (
                <Card
                  key={cat.id}
                  cat={cat}
                  width={200}
                  height={250}
                  backOfImage={backOfCard}
                  handleClick={handleClick}
                  selected={cat === firstCard || cat === secondCard || cat.matched}
                  stopFlip={stopFlip}
                />
              ))
            ) : (
              'Loading...'
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Game;