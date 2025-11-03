
import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { blocksData } from '../../lib';
import BlockIcon from './BlockIcon';

const ProgramBlocks: React.FC = () => {
  return (
    <div className="my-16">
      <h2 className="text-3xl font-serif font-bold mb-8 text-center">
        Les 14 blocs du programme
        <div className="w-16 h-1 bg-ljv-gold mx-auto mt-4"></div>
      </h2>
      
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="flex justify-center mb-8 flex-wrap">
          <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
          {blocksData.map((block) => (
            <TabsTrigger key={block.id} value={`block-${block.id}`}>
              {`${block.id}. ${block.title.split(' ')[0]}`}
            </TabsTrigger>
          ))}
        </TabsList>
        
        <TabsContent value="overview" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blocksData.map((block) => (
              <Link 
                to={`/bloc/${block.id}`}
                key={block.id} 
                className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-ljv-navy bg-opacity-10 flex items-center justify-center">
                    <BlockIcon id={block.id} />
                  </span>
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-ljv-navy group-hover:text-ljv-gold transition-colors">
                      {block.title}
                    </h3>
                    <p className="text-sm text-ljv-secondary dark:text-ljv-secondary mt-1">
                      {block.subtitle}
                    </p>
                    {block.quotes && block.quotes[0] && (
                      <blockquote className="italic text-sm text-ljv-secondary dark:text-ljv-secondary mt-3 border-l-2 border-ljv-gold pl-3">
                        {block.quotes[0]}
                      </blockquote>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </TabsContent>
        
        {blocksData.map((block) => (
          <TabsContent key={block.id} value={`block-${block.id}`} className="mt-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <div className="flex items-start gap-6 mb-8">
                <span className="block-number font-serif">{block.id}</span>
                <div>
                  <h2 className="text-3xl font-serif font-bold mb-2 text-ljv-navy">
                    {block.title}
                  </h2>
                  <p className="text-xl text-ljv-secondary dark:text-ljv-secondary">
                    {block.subtitle}
                  </p>
                  {block.quotes && block.quotes[0] && (
                    <blockquote className="italic text-lg text-ljv-secondary dark:text-ljv-secondary mt-4 border-l-4 border-ljv-gold pl-4">
                      {block.quotes[0]}
                    </blockquote>
                  )}
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-serif font-semibold mb-4 text-ljv-navy dark:text-ljv-navy">Philosophie</h3>
                <p className="text-ljv-primary dark:text-ljv-primary leading-relaxed">{block.description}</p>
              </div>
              
              <div>
                <h3 className="text-xl font-serif font-semibold mb-6 text-ljv-navy dark:text-ljv-navy">Nos mesures</h3>
                <Accordion type="single" collapsible className="w-full">
                  {block.measures.map((measure, index) => (
                    <AccordionItem key={index} value={`measure-${index}`}>
                      <AccordionTrigger className="text-left text-ljv-primary dark:text-ljv-primary">
                        <div className="flex items-center gap-3">
                          <div className="flex-shrink-0 h-8 w-8 rounded-full bg-ljv-gold bg-opacity-10 flex items-center justify-center text-ljv-gold font-medium">
                            {index + 1}
                          </div>
                          <span>{measure.split(' - ')[0] || measure}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="pl-11 text-ljv-primary dark:text-ljv-primary leading-relaxed">
                          {measure.includes(' - ') ? measure.split(' - ').slice(1).join(' - ') : ''}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
              
              <div className="mt-10 flex justify-center">
                <Link to={`/bloc/${block.id}`}>
                  <Button variant="default" className="bg-ljv-navy hover:bg-ljv-gold text-white">
                    Voir le détail complet
                  </Button>
                </Link>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default ProgramBlocks;
