import Logo from "./Logo.jsx"
import Nav from "./Nav.jsx"

function Navbar() {
  return (
    <header className="bg-pink-100 bg-opacity-50 flex flex-wrap items-center justify-between w-full p-8 border-b border-gray-400 shadow-md">
    <Logo/>
          <Nav/>
      </header>
  )
}

export default Navbar;