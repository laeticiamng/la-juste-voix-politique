
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-ljv-navy text-white">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-white font-serif text-xl font-bold">La Juste Voix</span>
            </Link>
            <p className="text-gray-300 text-sm">
              Un programme politique pour restaurer la justice, la dignité et l'égalité au cœur de notre République.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Accueil</Link></li>
              <li><Link to="/manifeste" className="text-gray-300 hover:text-white transition-colors">Manifeste</Link></li>
              <li><Link to="/revalorisations" className="text-gray-300 hover:text-white transition-colors">Revalorisations</Link></li>
              <li><Link to="/fiscalite" className="text-gray-300 hover:text-white transition-colors">Fiscalité</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Blocs thématiques</h3>
            <ul className="space-y-2">
              {[1, 2, 3, 4, 5].map(num => (
                <li key={num}>
                  <Link to={`/bloc/${num}`} className="text-gray-300 hover:text-white transition-colors">
                    Bloc {num}
                  </Link>
                </li>
              ))}
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Voir tous →</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Nous rejoindre</h3>
            <div className="bg-white bg-opacity-10 p-4 rounded-lg">
              <p className="text-sm mb-3">Inscrivez-vous à notre newsletter</p>
              <div className="flex flex-col space-y-2">
                <input 
                  type="email" 
                  placeholder="Votre email" 
                  className="px-3 py-2 bg-white bg-opacity-10 rounded-md focus:outline-none focus:ring-2 focus:ring-ljv-gold text-white placeholder-gray-300"
                />
                <button className="bg-ljv-gold text-ljv-navy px-3 py-2 rounded-md hover:bg-opacity-90 transition-colors">
                  S'inscrire
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white border-opacity-10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-300">© 2025 La Juste Voix. Tous droits réservés.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="#" className="text-gray-300 hover:text-white transition-colors">Mentions légales</Link>
            <Link to="#" className="text-gray-300 hover:text-white transition-colors">Politique de confidentialité</Link>
            <Link to="#" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
