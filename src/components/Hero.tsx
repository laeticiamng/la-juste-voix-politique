
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Calculator, ChevronDown, Users, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <Badge variant="outline" className="bg-ljv-gold/10 text-ljv-gold border-ljv-gold/30 text-lg px-4 py-2">
              <Users className="h-4 w-4 mr-2" />
              Plus de 50 000 soutiens
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            <span className="title-gradient">La Juste Voix</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 mb-8 leading-relaxed font-semibold">
            Un programme politique qui remet la justice, la dignité et la contribution au centre de la République.
          </p>
          <blockquote className="italic text-xl md:text-2xl text-gray-900 dark:text-gray-100 mb-10 px-6 border-l-4 border-ljv-gold font-semibold">
            "Parce qu'un pays ne tient pas sur des privilèges, mais sur celles et ceux qui agissent."
          </blockquote>

          {/* CTA Principal plus proéminent */}
          <div className="mb-8">
            <Button asChild className="bg-ljv-navy hover:bg-ljv-gold text-white transition-colors duration-300 text-xl px-8 py-6 h-auto shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all">
              <Link to="/manifeste" className="flex items-center gap-3">
                <BookOpen className="h-6 w-6" />
                Découvrir notre programme complet
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Statistiques clés */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-ljv-gold/20 shadow-md">
              <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">90-130 Md€/an</div>
              <div className="text-sm md:text-base text-gray-800 dark:text-gray-200 font-semibold">CNJP pour financer les réformes</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-ljv-gold/20 shadow-md">
              <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">4M+</div>
              <div className="text-sm md:text-base text-gray-800 dark:text-gray-200 font-semibold">Travailleurs essentiels revalorisés</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-ljv-gold/20 shadow-md">
              <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">60 ans</div>
              <div className="text-sm md:text-base text-gray-800 dark:text-gray-200 font-semibold">Âge de départ à la retraite rétabli</div>
            </div>
          </div>

          {/* Boutons d'action secondaires */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild variant="outline" className="border-ljv-navy text-ljv-navy hover:bg-ljv-navy hover:text-white text-base px-6 py-5 h-auto">
              <Link to="/revalorisations" className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Qui va être revalorisé ?
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-ljv-navy text-ljv-navy hover:bg-ljv-navy hover:text-white text-base px-6 py-5 h-auto">
              <Link to="/fiscalite" className="flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                Simulateur fiscal
              </Link>
            </Button>
          </div>
          
          <div className="mt-12 flex justify-center">
            <a href="#blocks" className="text-gray-900 dark:text-gray-100 hover:text-ljv-gold transition-colors flex flex-col items-center font-semibold">
              <span className="text-sm mb-2">Découvrir les 14 blocs</span>
              <ChevronDown className="h-6 w-6 animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
