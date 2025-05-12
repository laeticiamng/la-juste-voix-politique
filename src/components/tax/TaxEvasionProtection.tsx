
import React from 'react';
import { ArrowDown } from 'lucide-react';

const TaxEvasionProtection: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border-ljv-gold border p-6 mb-8">
      <h3 className="text-xl font-serif font-bold mb-4 flex items-center gap-2">
        <ArrowDown className="text-ljv-navy" size={24} />
        Protection contre l'évasion fiscale
      </h3>
      
      <div className="prose prose-lg text-gray-700">
        <p className="mb-4">
          Notre système intègre des mécanismes robustes pour éviter l'exil fiscal des grandes fortunes :
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>Imposition différée lors d'un départ à l'étranger pour motifs fiscaux</li>
            <li>Suivi des patrimoines pendant 10 ans après le départ fiscal</li>
            <li>Traçabilité des structures de détention (holdings, trusts, etc.)</li>
          </ul>
          
          <ul className="list-disc pl-5 space-y-2">
            <li>Coopération internationale renforcée pour le partage d'informations</li>
            <li>Dispositifs spécifiques pour les entreprises familiales</li>
            <li>Protection des fondateurs d'entreprises pour éviter la fuite des talents</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TaxEvasionProtection;
