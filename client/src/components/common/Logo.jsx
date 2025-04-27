import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import catlogo from '../../assets/images/cat-logo.png';

function Logo() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="h-24 w-24 flex items-center justify-center">
      {isLoggedIn ? (
        <Link to="/game">
          <img src={catlogo} alt="cat logo" className="object-contain" />
        </Link>
      ) : (
        <img src={catlogo} alt="cat logo" className="object-contain" />
      )}
    </div>
  );
}

export default Logo;