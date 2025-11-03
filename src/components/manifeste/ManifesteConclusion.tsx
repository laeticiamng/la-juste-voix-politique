
import React from 'react';
import { manifesteContent } from '../../lib';

const ManifesteConclusion: React.FC = () => {
  return (
    <div className="mt-16 mb-12 bg-gray-50 p-8 rounded-xl border border-gray-200">
      <h2 className="text-3xl font-serif font-bold mb-6 text-center text-ljv-navy dark:text-ljv-navy">Conclusion</h2>
      <div className="prose prose-lg mx-auto font-playfair">
        {manifesteContent.conclusion.split('\n\n').map((paragraph, index) => (
          <div key={index} className="mb-6">
            {paragraph.includes('•') ? (
              <ul className="list-disc pl-6 space-y-2">
                {paragraph.split('\n').map((line, i) => (
                  <li key={i} className="text-ljv-primary dark:text-ljv-primary leading-relaxed">{line.replace(/^- /, '').replace(/^\s*•\s*/, '')}</li>
                ))}
              </ul>
            ) : (
              <p className="text-ljv-primary dark:text-ljv-primary leading-relaxed">{paragraph}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManifesteConclusion;
