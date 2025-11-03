
import React from 'react';

const ManifesteBanner: React.FC = () => {
  return (
    <div className="text-center mb-12">
      <div className="w-16 h-1 bg-ljv-gold mx-auto mb-6"></div>
      <p className="text-2xl font-serif italic text-gray-900 dark:text-gray-100 mb-2 font-semibold">
        "Pour une République juste et digne"
      </p>
      <p className="text-lg font-serif text-gray-800 dark:text-gray-200 mb-2 font-medium">
        Une fiscalité du mérite, pas de la rente
      </p>
      <p className="text-md font-serif text-gray-700 dark:text-gray-300 font-medium">
        Récompenser le travail et l'innovation, protéger les talents productifs
      </p>
    </div>
  );
};

export default ManifesteBanner;
