import { Link } from 'react-router-dom'

import meows from './audio';

function playRandomMeow() {
  const randomNum = Math.floor(Math.random() * (meows.length - 0));
  const randomMeow = meows[randomNum];
  new Audio(randomMeow).play();
}

function Navlinks() {
  return (
    <div className='buttons'>
      <button onClick={playRandomMeow}>Meow</button>
      <Link to={'/game'}><button>Play</button></Link>
      <Link to={'/scoreboard'}><button>Scoreboard</button></Link>
      <Link to={'/user-profile'}><button>User Profile</button></Link>
    </div>
  )
}

export default Navlinks