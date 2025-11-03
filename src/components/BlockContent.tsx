import React from 'react';
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BlockData } from '../lib';
import AidesTransformationTable from './AidesTransformationTable';

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
      
      {block.quotes && block.quotes.length > 0 && (
        <blockquote className="italic text-2xl text-gray-600 my-8 pl-6 border-l-4 border-ljv-gold">
          {block.quotes[0]}
        </blockquote>
      )}
      
      <hr className="my-8 border-gray-200" />
      
      <section className="mb-12">
        <h2 className="text-2xl font-serif font-semibold mb-4">Philosophie</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          {block.description}
        </p>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-serif font-semibold mb-6">Nos mesures</h2>
        
        {block.detailedMeasures ? (
          <div className="space-y-8">
            {block.detailedMeasures.map((measure, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-100 shadow-sm p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-ljv-gold bg-opacity-10 flex items-center justify-center text-ljv-gold font-medium text-lg">
                    {measure.id}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-ljv-navy">{measure.title}</h3>
                    <p className="text-gray-600 italic mt-1">{measure.objective}</p>
                  </div>
                </div>
                
                <div className="pl-14">
                  <div className="space-y-3">
                    {measure.details.map((detail, i) => {
                      if (detail === '') return <div key={i} className="h-2" />;
                      if (detail === '---') return <hr key={i} className="my-6 border-gray-200" />;
                      
                      // Headers (bold text with **)
                      if (detail.startsWith('**') && detail.endsWith('**')) {
                        const text = detail.slice(2, -2);
                        return (
                          <h4 key={i} className="text-lg font-bold text-ljv-navy mt-4 mb-2">
                            {text}
                          </h4>
                        );
                      }
                      
                      // Bullet points
                      if (detail.startsWith('•') || detail.startsWith('*')) {
                        return (
                          <div key={i} className="flex items-start gap-2 ml-4">
                            <span className="text-ljv-gold mt-1">•</span>
                            <span className="text-gray-700 flex-1">{detail.slice(1).trim()}</span>
                          </div>
                        );
                      }
                      
                      // Arrows
                      if (detail.startsWith('➡️')) {
                        return (
                          <p key={i} className="text-primary font-medium italic ml-4 mt-2">
                            {detail}
                          </p>
                        );
                      }
                      
                      // Regular text
                      return (
                        <p key={i} className="text-gray-700 leading-relaxed">
                          {detail}
                        </p>
                      );
                    })}
                  </div>
                  
                  {measure.aidesTransformation && measure.aidesTransformation.length > 0 && (
                    <div className="mt-8">
                      <h4 className="text-2xl font-bold mb-6 text-ljv-navy">🔁 Transformation des aides</h4>
                      <AidesTransformationTable transformations={measure.aidesTransformation} />
                    </div>
                  )}
                  
                  {measure.impact && (
                    <div className="mt-6 bg-gradient-to-r from-primary/5 to-accent/5 p-4 rounded-lg border border-primary/10">
                      <h4 className="text-lg font-bold mb-2 text-primary">💪 Impact estimé</h4>
                      <p className="text-gray-700 leading-relaxed">{measure.impact}</p>
                    </div>
                  )}
                  
                  {(measure.cost || measure.financing) && (
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                      {measure.cost && (
                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                          <h4 className="font-bold text-gray-700 mb-1">💰 Coût estimé</h4>
                          <p className="text-ljv-navy font-medium">{measure.cost}</p>
                        </div>
                      )}
                      
                      {measure.financing && (
                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                          <h4 className="font-bold text-gray-700 mb-1">📊 Financement</h4>
                          <p className="text-ljv-navy font-medium">{measure.financing}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
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
        )}
      </section>
      
      {block.conclusion && (
        <section className="mb-12">
          <h2 className="text-2xl font-serif font-semibold mb-4">Conclusion</h2>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
            <p className="text-lg text-gray-700 leading-relaxed">
              {block.conclusion}
            </p>
          </div>
        </section>
      )}
      
      {block.id === 1 && (
        <section className="mb-12">
          <h2 className="text-2xl font-serif font-semibold mb-4">Cap Contribution — Plateforme centrale du Bloc 1</h2>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
            <h3 className="text-xl font-medium mb-3">Fonction:</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
              <li>Déclaration des projets / activités</li>
              <li>Suivi des points (CVC)</li>
              <li>Dossier de Statut Contributeur Actif</li>
              <li>Accès aux formations, aux aides, à l'accompagnement</li>
            </ul>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-3 rounded border border-gray-100">
                <h4 className="font-medium text-gray-700">Budget de création:</h4>
                <p className="text-ljv-navy">50 à 80 millions €</p>
              </div>
              
              <div className="bg-white p-3 rounded border border-gray-100">
                <h4 className="font-medium text-gray-700">Modèle inspiré:</h4>
                <p className="text-ljv-navy">CPF + Impots.gouv + France Travail</p>
              </div>
            </div>
          </div>
        </section>
      )}
      
      <div className="mt-12 flex justify-center">
        <Button variant="default" className="bg-ljv-navy hover:bg-ljv-gold text-white">
          Soutenir ces mesures
        </Button>
      </div>
    </div>
  );
};

export default BlockContent;
