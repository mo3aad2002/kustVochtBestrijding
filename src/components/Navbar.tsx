import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import logo from '../assets/vochtbestrijding_logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-[#233D60] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Kust Vochtbestrijding Logo"
              className="h-14 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`hover:text-[#34B8C3] transition ${isActive('/') ? 'text-[#34B8C3] font-semibold' : ''}`}
            >
              Home
            </Link>
            <Link
              to="/diensten"
              className={`hover:text-[#34B8C3] transition ${isActive('/diensten') ? 'text-[#34B8C3] font-semibold' : ''}`}
            >
              Diensten
            </Link>
            <Link
              to="/over-ons"
              className={`hover:text-[#34B8C3] transition ${isActive('/over-ons') ? 'text-[#34B8C3] font-semibold' : ''}`}
            >
              Over Ons
            </Link>
            <Link
              to="/contact"
              className={`hover:text-[#34B8C3] transition ${isActive('/contact') ? 'text-[#34B8C3] font-semibold' : ''}`}
            >
              Contact
            </Link>
            <a
              href="tel:+32467616349"
              className="bg-[#34B8C3] text-white px-6 py-2 rounded-lg hover:bg-[#2a9aa3] transition font-semibold flex items-center space-x-2"
            >
              <Phone size={18} />
              <span>Bel nu</span>
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#1a2d4a] border-t border-gray-700">
          <div className="px-4 py-4 space-y-4">
            <Link
              to="/"
              className={`block hover:text-[#34B8C3] transition ${isActive('/') ? 'text-[#34B8C3] font-semibold' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/diensten"
              className={`block hover:text-[#34B8C3] transition ${isActive('/diensten') ? 'text-[#34B8C3] font-semibold' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Diensten
            </Link>
            <Link
              to="/over-ons"
              className={`block hover:text-[#34B8C3] transition ${isActive('/over-ons') ? 'text-[#34B8C3] font-semibold' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Over Ons
            </Link>
            <Link
              to="/contact"
              className={`block hover:text-[#34B8C3] transition ${isActive('/contact') ? 'text-[#34B8C3] font-semibold' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <a
              href="tel:+32467616349"
              className="flex items-center justify-center space-x-2 bg-[#34B8C3] text-white px-6 py-3 rounded-lg hover:bg-[#2a9aa3] transition font-semibold"
            >
              <Phone size={18} />
              <span>Bel nu</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
