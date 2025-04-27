import { Link } from 'react-router-dom';
import catlogo from '../images/cat_logo.png';

function Logo() {
	return (
<div className="h-32 w-32 flex items-center justify-center">
      <Link to="/welcome">
        <img src={catlogo} alt="cat logo" className="object-contain" />
      </Link>
    </div>
	);
}

export default Logo;
