
import React from 'react';

const MeritFiscalityHeader: React.FC = () => {
  return (
    <div className="mt-12 border-t pt-8">
      <h2 className="text-3xl font-serif font-bold mb-4 text-center">
        Nouvelle Fiscalité du Mérite
      </h2>
      
      <div className="prose prose-lg mx-auto mb-8 text-gray-700">
        <p>
          Notre proposition fiscale repose sur un principe simple : <strong>valoriser le mérite et l'effort</strong>, 
          et non pas pénaliser le travail. Nous proposons un système qui récompense ceux qui créent de la valeur 
          tout en maintenant une contribution juste de ceux qui détiennent des patrimoines importants.
        </p>
      </div>
    </div>
  );
};

export default MeritFiscalityHeader;
