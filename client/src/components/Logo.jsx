import { Link } from 'react-router-dom';
import catlogo from '../images/cat-logo.png';

function Logo() {
	return (
<div className="h-24 w-24 flex items-center justify-center">
      <Link to="/welcome">
        <img src={catlogo} alt="cat logo" className="object-contain" />
      </Link>
    </div>
	);
}

export default Logo;
