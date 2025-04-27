import { Link } from 'react-router-dom';
import catlogo from '../images/catlogo.png';

function Logo() {
	return (
		<div className="h-16 w-16 flex items-center">
      <Link to="/welcome">
        <img src={catlogo} alt="cat logo" className="h-16 w-16 object-contain" />
      </Link>
    </div>
	);
}

export default Logo;
