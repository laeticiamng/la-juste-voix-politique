
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Calculator, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            <span className="title-gradient">La Juste Voix</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
            Un programme politique qui remet la justice, la dignité et la contribution au centre de la République.
          </p>
          <blockquote className="italic text-xl md:text-2xl text-gray-600 mb-10 px-6 border-l-4 border-ljv-gold">
            "Parce qu'un pays ne tient pas sur des privilèges, mais sur celles et ceux qui agissent."
          </blockquote>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-ljv-navy hover:bg-ljv-gold text-white transition-colors duration-300 text-base px-6 py-5 h-auto">
              <Link to="/manifeste" className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Lire le manifeste
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-gray-300 hover:border-ljv-gold text-ljv-navy hover:bg-white text-base px-6 py-5 h-auto">
              <Link to="/revalorisations" className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4" />
                Qui va être revalorisé ?
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-gray-300 hover:border-ljv-gold text-ljv-navy hover:bg-white text-base px-6 py-5 h-auto">
              <Link to="/fiscalite" className="flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                Barème fiscal
              </Link>
            </Button>
          </div>
          <div className="mt-12 flex justify-center">
            <a href="#blocks" className="text-ljv-navy hover:text-ljv-gold transition-colors flex flex-col items-center">
              <span className="text-sm mb-2">Découvrir les blocs</span>
              <ChevronDown className="h-6 w-6 animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
