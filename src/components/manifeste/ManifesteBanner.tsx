
import React from 'react';

const ManifesteBanner: React.FC = () => {
  return (
    <div className="text-center mb-12">
      <div className="w-16 h-1 bg-ljv-gold mx-auto mb-6"></div>
      <p className="text-2xl font-serif italic text-gray-700 mb-2">
        "Pour une République juste et digne"
      </p>
      <p className="text-lg font-serif text-gray-600">
        Une fiscalité du mérite, pas de la rente
      </p>
    </div>
  );
};

export default ManifesteBanner;
