
import React from 'react';
import { manifesteContent } from '../../lib';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowDown, Euro, Shield } from 'lucide-react';

const ManifesteContent: React.FC = () => {
  return (
    <div className="space-y-6 text-ljv-primary dark:text-ljv-primary font-playfair">
      {manifesteContent.content.split('\n\n').map((section, index) => (
        <div key={index} className="mb-8">
          {section.includes('	•') ? (
            <ul className="list-disc pl-6 space-y-2">
              {section.split('\n').map((line, lIndex) => (
                <li key={lIndex} className="text-ljv-primary dark:text-ljv-primary">
                  {line.replace(/^\s*•\s*/, '')}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-ljv-primary dark:text-ljv-primary leading-relaxed">{section}</p>
          )}
        </div>
      ))}
      
      {/* New Income Tax Scale Section */}
      <div className="mt-12 border-t pt-8">
        <h2 className="text-2xl font-serif font-bold mb-4 text-center text-ljv-navy dark:text-ljv-navy">
          Nouvelle grille d'impôt sur le revenu : Fiscalité du mérite
        </h2>
        
        <Card className="bg-white shadow-md border-ljv-gold border mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
              <div className="flex items-center justify-center bg-ljv-navy text-white p-3 rounded-full">
                <Euro size={24} />
              </div>
            <p className="text-lg font-semibold text-ljv-primary dark:text-ljv-primary">
              Notre nouvelle fiscalité ne pénalise pas le travail mais valorise le mérite et l'effort
            </p>
          </div>
          
          <p className="mb-4 text-base font-medium text-ljv-primary dark:text-ljv-primary">
            Nous proposons une refonte complète de la grille d'imposition sur le revenu avec un double objectif :
          </p>
          
          <ul className="list-disc pl-6 space-y-2 mb-4 text-base font-medium text-ljv-primary dark:text-ljv-primary">
            <li>Alléger la pression fiscale sur les revenus du travail et de l'innovation</li>
            <li>Augmenter la contribution sur les revenus patrimoniaux passifs et non-productifs</li>
            <li>Créer un système fiscal plus juste qui ne pousse pas à l'exil fiscal</li>
          </ul>
          
          <div className="flex flex-col md:flex-row items-center gap-4 mb-4 mt-6">
            <div className="flex items-center justify-center bg-ljv-navy text-white p-3 rounded-full">
              <Shield size={24} />
            </div>
            <p className="text-lg font-semibold text-ljv-primary dark:text-ljv-primary">
              Protection contre l'exil fiscal
            </p>
          </div>
          
          <p className="mb-4 text-base font-medium text-ljv-primary dark:text-ljv-primary">
            Notre système inclut des mécanismes anti-évasion robustes :
          </p>
          
          <ul className="list-disc pl-6 space-y-2 text-base font-medium text-ljv-primary dark:text-ljv-primary">
              <li>Imposition différée lors d'un départ à l'étranger pour motifs fiscaux</li>
              <li>Suivi des patrimoines pendant 10 ans après le départ fiscal</li>
              <li>Coopération internationale renforcée pour le partage d'informations fiscales</li>
              <li>Dispositifs spécifiques pour les entreprises familiales et les fondateurs d'entreprises pour éviter la fuite des talents entrepreneuriaux</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="bg-ljv-navy text-white">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4 mb-4">
              <ArrowDown size={24} className="text-ljv-gold" />
              <h3 className="text-xl font-medium">Avantages clés</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-ljv-gold/30 rounded p-4">
                <p className="font-bold mb-2">Pour les actifs</p>
                <p>Diminution du taux marginal sur les tranches moyennes de revenus du travail</p>
              </div>
              
              <div className="border border-ljv-gold/30 rounded p-4">
                <p className="font-bold mb-2">Pour l'innovation</p>
                <p>Abattements spécifiques pour les fondateurs d'entreprises et créateurs</p>
              </div>
              
              <div className="border border-ljv-gold/30 rounded p-4">
                <p className="font-bold mb-2">Pour la justice sociale</p>
                <p>Augmentation progressive de l'imposition des très hauts patrimoines dormants</p>
              </div>
              
              <div className="border border-ljv-gold/30 rounded p-4">
                <p className="font-bold mb-2">Pour la souveraineté</p>
                <p>Réduction de l'incitation à l'exil fiscal et préservation de notre base fiscale</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ManifesteContent;
