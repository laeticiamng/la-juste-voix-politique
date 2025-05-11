
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-ljv-navy font-serif text-2xl font-bold">La Juste Voix</span>
        </Link>

        {/* Mobile menu button */}
        <button 
          className="lg:hidden flex items-center p-2" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-ljv-navy transition-colors">
            Accueil
          </Link>
          <Link to="/manifeste" className="text-gray-700 hover:text-ljv-navy transition-colors">
            Manifeste
          </Link>
          <div className="relative group">
            <button className="text-gray-700 hover:text-ljv-navy transition-colors flex items-center">
              Blocs
            </button>
            <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block">
              <div className="py-1 grid grid-cols-2 gap-1">
                {Array.from({ length: 14 }).map((_, i) => (
                  <Link 
                    key={i} 
                    to={`/bloc/${i + 1}`} 
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Bloc {i + 1}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link to="/revalorisations" className="text-gray-700 hover:text-ljv-navy transition-colors">
            Revalorisations
          </Link>
          <Link to="#" className="bg-ljv-navy text-white px-5 py-2 rounded-md hover:bg-ljv-navy/90 transition-colors">
            Soutenir
          </Link>
        </nav>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white w-full border-t">
          <div className="container mx-auto py-4 px-4 space-y-4">
            <Link 
              to="/" 
              className="block text-gray-700 hover:text-ljv-navy transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link 
              to="/manifeste" 
              className="block text-gray-700 hover:text-ljv-navy transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Manifeste
            </Link>
            <div className="py-2">
              <div className="text-gray-700 font-medium mb-2">Blocs thématiques</div>
              <div className="grid grid-cols-3 gap-2">
                {Array.from({ length: 14 }).map((_, i) => (
                  <Link 
                    key={i} 
                    to={`/bloc/${i + 1}`} 
                    className="text-sm text-gray-600 hover:text-ljv-navy py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Bloc {i + 1}
                  </Link>
                ))}
              </div>
            </div>
            <Link 
              to="/revalorisations" 
              className="block text-gray-700 hover:text-ljv-navy transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Revalorisations
            </Link>
            <Link 
              to="#" 
              className="block bg-ljv-navy text-white py-2 px-4 rounded-md text-center hover:bg-ljv-navy/90"
              onClick={() => setIsMenuOpen(false)}
            >
              Soutenir
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
