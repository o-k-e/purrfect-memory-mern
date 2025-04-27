import Logo from './Logo.jsx';
import Nav from './Nav.jsx';

function Navbar() {
	return (
		<header
			className="bg-opacity-50 flex flex-wrap items-center justify-between w-full px-15 py-5 border-b border-gray-400 shadow-md"
			style={{ backgroundColor: '#FAEEEE' }}
		>
			<Logo />
			<Nav />
		</header>
	);
}

export default Navbar;
