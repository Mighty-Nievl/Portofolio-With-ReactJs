import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-8 py-4 flex justify-between items-center relative">
      {/* Logo */}
      <h1 className="text-lg font-bold">Portfolio</h1>

      {/* Tombol hamburger → hanya di mobile */}
      <button
        className="block md:hidden focus:outline-none z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Menu desktop */}
      <ul className="hidden md:block space-x-6 list-none">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      {/* Menu mobile → hanya muncul di mobile & saat isOpen true */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-gray-900 flex items-center justify-center md:hidden">
          <ul className={`${styles.navbar} flex flex-col items-center space-y-6 text-lg`}>
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
