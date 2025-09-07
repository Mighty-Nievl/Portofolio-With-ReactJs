import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-8 py-4 flex justify-between items-center relative">
      {/* Logo */}
      <h1 className="text-xl font-bold p-8">Portfolio</h1>

      {/* Menu desktop */}
      <ul className="hidden md:flex space-x-6 list-none">
        <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
        <li><Link to="/about" className="hover:text-blue-400">About</Link></li>
        <li><Link to="/projects" className="hover:text-blue-400">Projects</Link></li>
        <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
      </ul>

      {/* Tombol hamburger (hanya muncul di mobile) */}
      <button 
        className="block md:hidden focus:outline-none z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Menu mobile */}
      {isOpen && (
        <div className="absolute w-full h-screen bg-gray-900 flex flex-col items-end pe-8 justify-center space-y-6 md:hidden">
          <ul className="flex flex-col items-center space-y-6 text-lg">
            <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
            <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
