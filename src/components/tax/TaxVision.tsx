
import React from 'react';

const TaxVision: React.FC = () => {
  return (
    <div className="bg-ljv-navy text-white p-6 rounded-lg">
      <h3 className="text-xl font-serif font-bold mb-3">Notre vision</h3>
      <p className="mb-4">
        Une fiscalité équilibrée qui génère les ressources nécessaires à notre modèle social sans décourager 
        l'entrepreneuriat et l'innovation. Nous voulons une France qui :
      </p>
      
      <ul className="grid md:grid-cols-2 gap-3">
        <li className="border border-ljv-gold/30 rounded p-3">Récompense le mérite plutôt que la rente</li>
        <li className="border border-ljv-gold/30 rounded p-3">Valorise l'effort plutôt que la spéculation</li>
        <li className="border border-ljv-gold/30 rounded p-3">Protège ses talents entrepreneuriaux</li>
        <li className="border border-ljv-gold/30 rounded p-3">Maintient sa souveraineté fiscale</li>
      </ul>
    </div>
  );
};

export default TaxVision;
