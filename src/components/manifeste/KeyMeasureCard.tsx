
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
    <div className="bg-card rounded-xl shadow-[var(--ljv-shadow-card)] border border-border overflow-hidden hover:shadow-[var(--ljv-shadow-elevated)] transition-all duration-300 hover-scale">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <Badge variant="outline" className="bg-ljv-gold/10 text-ljv-gold border-ljv-gold/30 text-sm">
            Mesure {measure.id}
          </Badge>
        </div>
        
        <h3 className="text-xl font-bold text-ljv-navy mb-3">{measure.title}</h3>
        
        {measure.description && (
          <p className="text-muted-foreground mb-3">{measure.description}</p>
        )}
        
        {measure.slogan && (
          <blockquote className="border-l-4 border-ljv-gold pl-4 italic text-muted-foreground mb-3 bg-ljv-gold/5 py-2 rounded-r">
            "{measure.slogan}"
          </blockquote>
        )}
        
        {measure.examples && (
          <ul className="list-disc pl-6 mb-3 text-muted-foreground space-y-1">
            {measure.examples.map((example, index) => (
              <li key={index} className="marker:text-ljv-gold">{example}</li>
            ))}
          </ul>
        )}
        
        {measure.measures && (
          <ul className="list-disc pl-6 mb-3 text-muted-foreground space-y-1">
            {measure.measures.map((item, index) => (
              <li key={index} className="marker:text-ljv-gold">{item}</li>
            ))}
          </ul>
        )}
        
        {measure.strengths && (
          <div className="mt-4 bg-green-50 dark:bg-green-950/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
            <p className="font-semibold text-ljv-navy mb-2">Pourquoi c'est fort :</p>
            <ul className="list-none space-y-2">
              {measure.strengths.map((strength, index) => (
                <li key={index} className="flex items-start gap-2 text-foreground">
                  <span className="text-ljv-gold font-bold text-lg">✅</span>
                  <span className="pt-0.5">{strength}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {measure.note && (
          <div className="mt-3 text-muted-foreground italic bg-accent/50 rounded p-3">
            {measure.note}
          </div>
        )}
      </div>
    </div>
  );
};

export default KeyMeasureCard;
