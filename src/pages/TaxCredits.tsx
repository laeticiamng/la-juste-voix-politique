import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calculator, List, Info } from 'lucide-react';
import TaxCreditSimulator from '@/components/tax/TaxCreditSimulator';
import TaxCreditProfessions from '@/components/tax/TaxCreditProfessions';
import TaxCreditInfo from '@/components/tax/TaxCreditInfo';

const TaxCredits: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-ljv-gold/5">
      <Helmet>
        <title>Crédits d'Impôt Bac+5+ et Bac+10 | La Juste Voix</title>
        <meta 
          name="description" 
          content="Découvrez les crédits d'impôt de 15% pour les diplômés Bac+5+ et 20% pour les doctorats Bac+10. Simulateur interactif et liste complète des professions éligibles." 
        />
      </Helmet>
      
      <Header />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <GraduationCap className="h-16 w-16 text-ljv-navy" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-ljv-navy mb-4">
            Crédits d'Impôt Excellence Académique
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Valorisez votre parcours d'excellence : <strong>15% de crédit d'impôt</strong> pour les diplômés Bac+5+ 
            et <strong>20%</strong> pour les doctorats Bac+10 médecine & pharmacie
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <Badge className="bg-blue-100 text-blue-800 border-blue-300 text-base px-4 py-2">
              🎓 2M+ bénéficiaires Bac+5+
            </Badge>
            <Badge className="bg-teal-100 text-teal-800 border-teal-300 text-base px-4 py-2">
              🔬 50k+ bénéficiaires Bac+10
            </Badge>
            <Badge className="bg-green-100 text-green-800 border-green-300 text-base px-4 py-2">
              💰 +50€ à +500€/mois
            </Badge>
          </div>
        </div>

        {/* Navigation Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="border-2 border-blue-200 hover:border-blue-400 transition-colors cursor-pointer"
            onClick={() => document.getElementById('simulator')?.scrollIntoView({ behavior: 'smooth' })}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-800">
                <Calculator className="h-5 w-5" />
                Simulateur
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700">
                Calculez votre crédit d'impôt en fonction de votre revenu et profession
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-200 hover:border-purple-400 transition-colors cursor-pointer"
            onClick={() => document.getElementById('professions')?.scrollIntoView({ behavior: 'smooth' })}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-800">
                <List className="h-5 w-5" />
                Professions éligibles
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700">
                Liste complète des métiers éligibles aux crédits d'impôt
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-teal-200 hover:border-teal-400 transition-colors cursor-pointer"
            onClick={() => document.getElementById('info')?.scrollIntoView({ behavior: 'smooth' })}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-teal-800">
                <Info className="h-5 w-5" />
                Modalités & Exclusions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700">
                Critères d'éligibilité, règles de non-cumul et dégressivité
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Simulator Section */}
        <div id="simulator" className="mb-16 scroll-mt-24">
          <TaxCreditSimulator />
        </div>

        {/* Professions List */}
        <div id="professions" className="mb-16 scroll-mt-24">
          <TaxCreditProfessions />
        </div>

        {/* Info Section */}
        <div id="info" className="scroll-mt-24">
          <TaxCreditInfo />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TaxCredits;
