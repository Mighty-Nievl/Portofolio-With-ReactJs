import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-8 py-4 flex justify-between items-center relative">
      {/* Logo */}
      <h1 className="text-lg font-bold p-8">Portfolio</h1>

      {/* Tombol hamburger (hanya muncul di mobile) */}
      <button
        className="flex md:hidden focus:outline-none z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Menu mobile */}
      {isOpen && (
        <div className="absolute w-full h-screen bg-gray-900 flex items-center justify-center space-y-6">
          <ul className={styles.navbar} onClick={() => setIsOpen(false)}>
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      )}

      {/* Menu desktop */}
      <ul className="hidden md:flex space-x-6 list-none">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
