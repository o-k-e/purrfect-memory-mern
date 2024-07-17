import { Link } from 'react-router-dom'

function Navlinks() {
  return (
    <>
            <Link to={'/game'}><button>Play</button></Link>
            <Link to={'/scoreboard'}><button>Scoreboard</button></Link>
            <Link to={'/user-profile'}><button>User Profile</button></Link>
        </>
  )
}

export default Navlinks