import Logo from './Logo.jsx';
import Nav from './Nav.jsx';

function Navbar() {
	return (
		<header className="bg-opacity-50 bg-[#FAEEEE] flex flex-wrap items-center justify-between w-full px-16 py-5 border-b border-gray-400 shadow-md">
			{' '}
			<Logo />
			<Nav />
		</header>
	);
}

export default Navbar;
