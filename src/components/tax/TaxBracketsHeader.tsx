
import React from 'react';
import { taxBracketsContent } from '@/lib/tax-brackets';

const TaxBracketsHeader: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl font-serif font-bold mb-4 text-center">
        {taxBracketsContent.title}
      </h2>
      
      <div className="prose prose-lg mx-auto mb-8 text-gray-700">
        <p>{taxBracketsContent.description}</p>
        <div className="whitespace-pre-line">{taxBracketsContent.supplementaryInfo}</div>
      </div>
    </>
  );
};

export default TaxBracketsHeader;
