import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Star, ChevronDown, Droplets, Bug, Wind, Search } from 'lucide-react';
import logo from '../assets/vochtbestrijding_logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const servicesRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const services = [
    { name: 'Gratis Vocht Inspectie', icon: Search, path: '/diensten#inspectie' },
    { name: 'Vocht op Muren', icon: Droplets, path: '/diensten#vocht' },
    { name: 'Schimmel', icon: Bug, path: '/diensten#schimmel' },
    { name: 'Condensatie', icon: Wind, path: '/diensten#condensatie' },
  ];

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

            <div className="relative" ref={servicesRef}>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`flex items-center space-x-1 hover:text-[#34B8C3] transition ${isActive('/diensten') ? 'text-[#34B8C3] font-semibold' : ''}`}
              >
                <span>Diensten</span>
                <ChevronDown size={16} className={`transform transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl overflow-hidden z-50">
                  {services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <Link
                        key={index}
                        to={service.path}
                        onClick={() => setIsServicesOpen(false)}
                        className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-[#34B8C3] hover:text-white transition-colors group"
                      >
                        <Icon size={20} className="flex-shrink-0" />
                        <span className="text-sm font-medium">{service.name}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

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

            <div className="flex items-center space-x-1 bg-[#1a2d4a] px-4 py-2 rounded-lg border border-gray-700">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <span className="text-sm font-semibold ml-1.5">4.9/5.0</span>
              <span className="text-xs text-gray-400">(371+)</span>
            </div>

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

            <div className="flex items-center justify-center space-x-1 bg-[#233D60] px-4 py-3 rounded-lg border border-gray-700">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <span className="text-sm font-semibold ml-1.5">4.9/5.0</span>
              <span className="text-xs text-gray-400">(371+)</span>
            </div>

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
