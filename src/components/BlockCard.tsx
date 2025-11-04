import React from 'react';
import { Link } from 'react-router-dom';
import { BlockData } from '../lib';

interface BlockCardProps {
  block: BlockData;
  delay?: number;
}

const BlockCard: React.FC<BlockCardProps> = ({ block, delay = 0 }) => {
  return (
    <Link 
      to={`/bloc/${block.id}`}
      className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100"
      style={{ animationDelay: `${delay * 100}ms` }}
    >
      <div className="p-6">
        <div className="flex items-start gap-4">
          <span className="block-number font-serif">{block.id}</span>
          <div>
            <h3 className="text-xl font-serif font-bold mb-2 text-gray-900 dark:text-gray-100 group-hover:text-ljv-gold transition-colors">
              {block.title}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 font-medium">
              {block.subtitle}
            </p>
          </div>
        </div>
        <p className="text-gray-800 dark:text-gray-200 mt-4 text-sm font-medium leading-relaxed">
          {block.description.length > 100 ? `${block.description.substring(0, 100)}...` : block.description}
        </p>
      </div>
      <div className="bg-gray-50 px-6 py-3 border-t border-gray-100">
        <span className="text-sm text-gray-900 dark:text-gray-100 font-bold flex justify-end items-center">
          En savoir plus →
        </span>
      </div>
    </Link>
  );
};

export default BlockCard;
