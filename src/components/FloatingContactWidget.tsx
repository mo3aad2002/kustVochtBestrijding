import { useState } from 'react';
import { MessageCircle, Phone, Mail, MessageSquare, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FloatingContactWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        {isOpen && (
          <div className="mb-4 bg-white rounded-lg shadow-2xl w-80 animate-in slide-in-from-bottom-5">
            <div className="bg-[#34B8C3] text-white p-4 rounded-t-lg">
              <h3 className="font-bold text-lg">Neem Contact Op</h3>
            </div>

            <div className="p-4 space-y-3">
              <a
                href="tel:+32467616349"
                className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition group"
              >
                <div className="bg-[#34B8C3] p-2 rounded-full group-hover:scale-110 transition">
                  <Phone size={20} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-800">Bel nu</p>
                  <p className="text-sm text-gray-600">+32 467 61 63 49</p>
                </div>
              </a>

              <a
                href="mailto:info@kustvochtbestrijding.be"
                className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition group"
              >
                <div className="bg-[#34B8C3] p-2 rounded-full group-hover:scale-110 transition">
                  <Mail size={20} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-800">Email Ons</p>
                  <p className="text-sm text-gray-600">info@kustvochtbestrijding.be</p>
                </div>
              </a>

              <Link
                to="/contact"
                className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition group"
                onClick={() => setIsOpen(false)}
              >
                <div className="bg-[#34B8C3] p-2 rounded-full group-hover:scale-110 transition">
                  <MessageSquare size={20} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-800">Contactformulier</p>
                  <p className="text-sm text-gray-600">Stuur ons een bericht</p>
                </div>
              </Link>
            </div>

            <div className="p-4 pt-0">
              <button
                onClick={() => setIsOpen(false)}
                className="w-full bg-[#34B8C3] text-white py-2 rounded-full hover:bg-[#2a9aa3] transition font-semibold flex items-center justify-center space-x-2"
              >
                <X size={18} />
                <span>Sluiten</span>
              </button>
            </div>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#34B8C3] text-white p-4 rounded-full shadow-2xl hover:bg-[#2a9aa3] transition hover:scale-110 transform"
          aria-label="Contact openen"
        >
          <MessageCircle size={28} />
        </button>
      </div>
    </>
  );
}
