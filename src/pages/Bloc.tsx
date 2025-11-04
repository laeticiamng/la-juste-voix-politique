import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlockContent from '../components/BlockContent';
import { blocksData } from '../lib';

const Bloc = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const blockId = parseInt(id || '1');
  const block = blocksData.find(b => b.id === blockId);
  
  useEffect(() => {
    if (!block) {
      navigate('/');
    }
    window.scrollTo(0, 0);
  }, [block, navigate]);
  
  if (!block) return null;

  const prevBlock = blockId > 1 ? blockId - 1 : null;
  const nextBlock = blockId < 14 ? blockId + 1 : null;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4">
          <BlockContent block={block} />
          
          <div className="max-w-4xl mx-auto py-12 flex justify-between">
            {prevBlock ? (
              <Link to={`/bloc/${prevBlock}`} className="text-gray-900 dark:text-gray-100 hover:text-ljv-gold transition-colors flex items-center gap-2 font-semibold">
                ← Bloc précédent 
              </Link>
            ) : (
              <div></div>
            )}
            
            <Link to="/#blocks" className="text-gray-900 dark:text-gray-100 hover:text-ljv-gold transition-colors font-semibold">
              Tous les blocs
            </Link>
            
            {nextBlock ? (
              <Link to={`/bloc/${nextBlock}`} className="text-gray-900 dark:text-gray-100 hover:text-ljv-gold transition-colors flex items-center gap-2 font-semibold">
                Bloc suivant →
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Bloc;
