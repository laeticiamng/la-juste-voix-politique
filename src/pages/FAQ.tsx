
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-center">Foire aux questions</h1>
          
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-serif font-bold text-ljv-navy">Questions générales</h2>
              
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-medium mb-2">Qu'est-ce que La Juste Voix ?</h3>
                <p className="text-gray-700">La Juste Voix est un programme politique visant à restaurer la justice, la dignité et l'égalité au cœur de notre République.</p>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-medium mb-2">Comment soutenir le programme ?</h3>
                <p className="text-gray-700">Vous pouvez soutenir La Juste Voix en vous inscrivant à notre newsletter, en partageant nos publications sur les réseaux sociaux, et en participant à nos événements locaux.</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-2xl font-serif font-bold text-ljv-navy">Questions sur les revalorisations</h2>
              
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-medium mb-2">Qui est concerné par les revalorisations salariales ?</h3>
                <p className="text-gray-700">Les revalorisations concernent principalement les métiers essentiels mais sous-valorisés, comme les soignants, les enseignants, les travailleurs sociaux et les forces de l'ordre.</p>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-medium mb-2">Comment seront financées ces revalorisations ?</h3>
                <p className="text-gray-700">Ces revalorisations seront financées notamment par la Contribution Nationale de Justice Patrimoniale (CNJP) et par une réforme de la fiscalité visant à rétablir plus d'équité.</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-2xl font-serif font-bold text-ljv-navy">Questions sur la fiscalité</h2>
              
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-medium mb-2">Qu'est-ce que la CNJP ?</h3>
                <p className="text-gray-700">La Contribution Nationale de Justice Patrimoniale est une mesure fiscale visant les 0,1% les plus riches, dont le patrimoine financier net dépasse 100 millions d'euros. Elle ne concerne pas les classes moyennes, ni les entrepreneurs actifs, ni les résidences principales.</p>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-medium mb-2">Comment sera appliquée la CNJP ?</h3>
                <p className="text-gray-700">La CNJP sera appliquée sur le patrimoine réel des personnes concernées, en tenant compte des actifs détenus directement ou indirectement via des sociétés qu'elles contrôlent, sans possibilité d'évasion fiscale.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
