import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import logo from '../assets/vochtbestrijding_logo.png';

export default function Footer() {
  return (
    <footer className="bg-[#233D60] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img
              src={logo}
              alt="Kust Vochtbestrijding Logo"
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-300 text-sm">
              Professionele vochtbestrijding voor uw woning of bedrijf.
              Definitieve oplossingen met garantie.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Snelle Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#34B8C3] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/diensten" className="text-gray-300 hover:text-[#34B8C3] transition">
                  Diensten
                </Link>
              </li>
              <li>
                <Link to="/over-ons" className="text-gray-300 hover:text-[#34B8C3] transition">
                  Over Ons
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-[#34B8C3] transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact Informatie</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin size={20} className="text-[#34B8C3] flex-shrink-0 mt-1" />
                <span className="text-gray-300 text-sm">
                  Kemmelbergstraat 40, Oostende
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={20} className="text-[#34B8C3]" />
                <a href="tel:+32467616349" className="text-gray-300 hover:text-[#34B8C3] transition text-sm">
                  +32 467 61 63 49
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={20} className="text-[#34B8C3]" />
                <a href="mailto:info@kustvochtbestrijding.be" className="text-gray-300 hover:text-[#34B8C3] transition text-sm">
                  info@kustvochtbestrijding.be
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 Kust Vochtbestrijding. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
}
