import { Link } from 'react-router-dom'
import angryMeow from '../audio/angry-cat-meow.mp3';
import catGrowl from '../audio/cat-growl.mp3';
import catMeow from '../audio/cat-meow.mp3';
import fijiMeow from '../audio/fiji-meow.mp3';
import funnyMeow from '../audio/funny-meow.mp3';

function playRandomMeow() {
  const meows = [angryMeow, catGrowl, catMeow, fijiMeow, funnyMeow];
  const randomNum = Math.floor(Math.random() * (meows.length - 0));
  const randomMeow = meows[randomNum];
  new Audio(randomMeow).play();
}

function Navlinks() {
  return (
    <>
      <button onClick={playRandomMeow}>Meow</button>
      <Link to={'/game'}><button>Play</button></Link>
      <Link to={'/scoreboard'}><button>Scoreboard</button></Link>
      <Link to={'/user-profile'}><button>User Profile</button></Link>
    </>
  )
}

export default Navlinks