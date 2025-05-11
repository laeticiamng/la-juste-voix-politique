
import React from 'react';
import { manifesteContent } from '../../lib';

const ManifesteContent: React.FC = () => {
  return (
    <div className="space-y-6 text-gray-700 font-playfair">
      {manifesteContent.content.split('\n\n').map((section, index) => (
        <div key={index} className="mb-8">
          {section.includes('	•') ? (
            <ul className="list-disc pl-6 space-y-2">
              {section.split('\n').map((line, lIndex) => (
                <li key={lIndex} className="text-gray-700">
                  {line.replace(/^\s*•\s*/, '')}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-700">{section}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default ManifesteContent;
