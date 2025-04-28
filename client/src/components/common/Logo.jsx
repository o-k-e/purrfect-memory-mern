import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import catLogo from '../../assets/images/cat-logo.png';

function Logo() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="h-24 w-24 flex items-center justify-center">
      {isLoggedIn ? (
        <Link to="/game">
          <img
            src={catLogo}
            alt="Cat logo"
            className="object-contain"
          />
        </Link>
      ) : (
        <img
          src={catLogo}
          alt="Cat logo"
          className="object-contain"
        />
      )}
    </div>
  );
}

export default Logo;