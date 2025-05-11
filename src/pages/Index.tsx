import React from 'react';
import Hero from '../components/Hero';
import BlockCard from '../components/BlockCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { blocksData } from '../lib';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        
        <section id="blocks" className="section bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Les 14 blocs du programme
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Notre vision pour reconstruire une France juste, digne et solidaire à travers 14 grandes thématiques.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blocksData.map((block, index) => (
                <div key={block.id} className="fade-in">
                  <BlockCard block={block} delay={index} />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="section bg-white">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Rejoignez La Juste Voix
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Ensemble, construisons une France plus juste, plus digne et plus fraternelle. Votre voix compte, faites-la entendre.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="#" className="btn-primary">
                  Je soutiens le programme
                </a>
                <a href="#" className="btn-secondary">
                  Recevoir la newsletter
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
