
import React from 'react';
import { Euro, ArrowUp } from 'lucide-react';

const TaxFeaturesGrid: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6 mb-8">
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
        <h3 className="text-xl font-serif font-bold mb-3 flex items-center gap-2">
          <Euro className="text-ljv-gold" size={24} />
          Fiscalité du travail
        </h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Diminution des taux marginaux sur les revenus du travail</li>
          <li>Abattements spécifiques pour les créateurs d'entreprise</li>
          <li>Valorisation des revenus issus de l'innovation</li>
          <li>Protection des PME et entreprises familiales</li>
        </ul>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
        <h3 className="text-xl font-serif font-bold mb-3 flex items-center gap-2">
          <ArrowUp className="text-ljv-gold" size={24} />
          Fiscalité du patrimoine
        </h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Contribution progressive sur les grands patrimoines</li>
          <li>Distinction entre capital productif et non-productif</li>
          <li>Taxation des revenus financiers passifs</li>
          <li>Imposition des très grandes fortunes dormantes</li>
        </ul>
      </div>
    </div>
  );
};

export default TaxFeaturesGrid;
