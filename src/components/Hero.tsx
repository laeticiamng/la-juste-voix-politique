
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            <span className="title-gradient">La Juste Voix</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
            Un programme politique qui vise à restaurer la justice, la dignité et l'égalité au cœur de notre République.
          </p>
          <blockquote className="italic text-xl md:text-2xl text-gray-600 mb-10 px-6 border-l-4 border-ljv-gold">
            "L'économie doit servir l'Homme, et non l'inverse."
          </blockquote>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/manifeste" className="btn-primary">
              Lire le manifeste
            </Link>
            <Link to="/revalorisations" className="btn-secondary">
              Qui va être revalorisé ?
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
