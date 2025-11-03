
import React from 'react';

const ManifesteBanner: React.FC = () => {
  return (
    <div className="text-center mb-12">
      <div className="w-16 h-1 bg-ljv-gold mx-auto mb-6"></div>
      <p className="text-2xl font-serif italic text-ljv-primary dark:text-ljv-primary mb-2">
        "Pour une République juste et digne"
      </p>
      <p className="text-lg font-serif text-ljv-secondary dark:text-ljv-secondary mb-2">
        Une fiscalité du mérite, pas de la rente
      </p>
      <p className="text-md font-serif text-ljv-secondary dark:text-ljv-secondary">
        Récompenser le travail et l'innovation, protéger les talents productifs
      </p>
    </div>
  );
};

export default ManifesteBanner;
