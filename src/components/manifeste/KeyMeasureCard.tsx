
import React from 'react';
import { Badge } from "../ui/badge";

export type KeyMeasure = {
  id: number;
  title: string;
  description?: string;
  slogan?: string;
  examples?: string[];
  measures?: string[];
  strengths?: string[];
  note?: string;
};

interface KeyMeasureCardProps {
  measure: KeyMeasure;
}

const KeyMeasureCard: React.FC<KeyMeasureCardProps> = ({ measure }) => {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <Badge variant="outline" className="bg-ljv-gold/10 text-ljv-gold border-ljv-gold/30 text-sm">
            Mesure {measure.id}
          </Badge>
        </div>
        
        <h3 className="text-xl font-bold text-ljv-navy mb-3">{measure.title}</h3>
        
        {measure.description && (
          <p className="text-gray-700 mb-3">{measure.description}</p>
        )}
        
        {measure.slogan && (
          <blockquote className="border-l-4 border-ljv-gold pl-4 italic text-gray-600 mb-3">
            "{measure.slogan}"
          </blockquote>
        )}
        
        {measure.examples && (
          <ul className="list-disc pl-6 mb-3 text-gray-700">
            {measure.examples.map((example, index) => (
              <li key={index}>{example}</li>
            ))}
          </ul>
        )}
        
        {measure.measures && (
          <ul className="list-disc pl-6 mb-3 text-gray-700">
            {measure.measures.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
        
        {measure.strengths && (
          <div className="mt-4">
            <p className="font-semibold text-ljv-navy mb-2">Pourquoi c'est fort :</p>
            <ul className="list-none space-y-1">
              {measure.strengths.map((strength, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-700">
                  <span className="text-ljv-gold font-bold">✅</span>
                  <span>{strength}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {measure.note && (
          <div className="mt-3 text-gray-700 italic">
            {measure.note}
          </div>
        )}
      </div>
    </div>
  );
};

export default KeyMeasureCard;
