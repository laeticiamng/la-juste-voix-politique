
import React from 'react';
import { Link } from 'react-router-dom';
import ManifesteBanner from './manifeste/ManifesteBanner';
import ManifesteContent from './manifeste/ManifesteContent';
import KeyMeasures from './manifeste/KeyMeasures';
import ProgramBlocks from './manifeste/ProgramBlocks';
import ManifesteConclusion from './manifeste/ManifesteConclusion';
import { manifesteContent } from '../lib';

const ManifestePage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto py-8">
      <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-center title-gradient">
        Manifeste
      </h1>
      
      <div className="prose prose-lg mx-auto mb-12">
        <ManifesteBanner />
        <ManifesteContent />
      </div>
      
      {/* 10 Key Measures Section */}
      <KeyMeasures />
      
      {/* 14 Program Blocks Section */}
      <ProgramBlocks />
      
      {manifesteContent.conclusion && (
        <ManifesteConclusion />
      )}
      
      <div className="mt-12 text-center">
        <Link to="/#blocks" className="btn-primary">
          Retour à l'aperçu des blocs
        </Link>
      </div>
    </div>
  );
};

export default ManifestePage;
