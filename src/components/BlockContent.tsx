
import React from 'react';
import { BlockData } from '../lib/data';

interface BlockContentProps {
  block: BlockData;
}

const BlockContent: React.FC<BlockContentProps> = ({ block }) => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="mb-10">
        <div className="flex items-start gap-6">
          <span className="block-number font-serif">{block.id}</span>
          <div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-2 text-ljv-navy">
              {block.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-500">
              {block.subtitle}
            </p>
          </div>
        </div>
      </div>
      
      <hr className="my-8 border-gray-200" />
      
      <section className="mb-12">
        <h2 className="text-2xl font-serif font-semibold mb-4">Philosophie</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          {block.description}
        </p>
        
        {block.quotes && block.quotes.length > 0 && (
          <blockquote className="italic text-xl text-gray-600 my-6 pl-6 border-l-4 border-ljv-gold">
            {block.quotes[0]}
          </blockquote>
        )}
      </section>
      
      <section>
        <h2 className="text-2xl font-serif font-semibold mb-6">Nos mesures</h2>
        <ul className="space-y-4">
          {block.measures.map((measure, index) => (
            <li key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-ljv-gold bg-opacity-10 flex items-center justify-center text-ljv-gold font-medium">
                {index + 1}
              </div>
              <div className="text-gray-700">{measure}</div>
            </li>
          ))}
        </ul>
      </section>
      
      <div className="mt-12 flex justify-center">
        <a href="#" className="btn-primary">
          Soutenir ces mesures
        </a>
      </div>
    </div>
  );
};

export default BlockContent;
