
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
    <div className="max-w-5xl mx-auto py-8 px-4">
      <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-center title-gradient animate-fade-in">
        Manifeste
      </h1>
      <div className="w-24 h-1 bg-ljv-gold mx-auto mb-8 rounded-full"></div>
      
      <div className="prose prose-lg mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}>
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
      
      <div className="mt-16 text-center animate-fade-in">
        <Link to="/#blocks" className="btn-primary hover-scale inline-flex items-center gap-2">
          <span>Retour à l'aperçu des blocs</span>
          <span className="text-lg">→</span>
        </Link>
      </div>
    </div>
  );
};

export default ManifestePage;
