
import React from 'react';
import { Link } from 'react-router-dom';
import { manifesteContent } from '../lib/data';

const ManifestePage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-center title-gradient">
        Manifeste
      </h1>
      
      <div className="prose prose-lg mx-auto">
        <div className="text-center mb-12">
          <div className="w-16 h-1 bg-ljv-gold mx-auto mb-6"></div>
          <p className="text-2xl font-serif italic text-gray-700">
            "Pour une République juste et digne"
          </p>
        </div>
        
        <div className="space-y-6 text-gray-700">
          {manifesteContent.content.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg font-medium mb-6">Découvrez notre programme en détail :</p>
          <Link to="/#blocks" className="btn-primary">
            Voir les 14 blocs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ManifestePage;
