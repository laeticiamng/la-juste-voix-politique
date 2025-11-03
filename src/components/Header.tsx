
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: "/", label: "Accueil" },
    { path: "/manifeste", label: "Manifeste" },
    { path: "/revalorisations", label: "Revalorisations" },
    { path: "/fiscalite", label: "Fiscalité" },
    { path: "/risques-securisations", label: "Risques" },
    { path: "/faq", label: "FAQ" },
    { path: "/contact", label: "Contact" }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white bg-opacity-95 backdrop-blur-sm shadow-sm" : "bg-transparent"
    }`}>
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className={`font-serif text-2xl font-bold transition-colors ${
            isScrolled ? "text-ljv-navy" : "text-ljv-navy"
          }`}>La Juste Voix</span>
        </Link>

        {/* Mobile menu button */}
        <button 
          className="lg:hidden flex items-center p-2" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            link.path === "/contact" ? (
              <Link 
                key={link.path}
                to={link.path} 
                className="bg-ljv-navy text-white px-5 py-2 rounded-md hover:bg-ljv-navy/90 transition-colors"
              >
                {link.label}
              </Link>
            ) : (
              <Link 
                key={link.path}
                to={link.path} 
                className={`transition-colors ${
                  isActive(link.path) 
                    ? "text-ljv-gold font-medium" 
                    : "text-gray-700 hover:text-ljv-navy"
                }`}
              >
                {link.label}
              </Link>
            )
          ))}
          <ThemeToggle />
        </nav>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white w-full border-t">
          <div className="container mx-auto py-4 px-4 space-y-4">
            {navLinks.filter(link => !link.path.includes("bloc")).map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`block transition-colors py-2 ${
                  isActive(link.path) 
                    ? "text-ljv-gold font-medium" 
                    : "text-gray-700 hover:text-ljv-navy"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            
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
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
