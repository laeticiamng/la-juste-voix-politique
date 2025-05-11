
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ManifestePage from '../components/ManifestePage';

const Manifeste = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4">
          <ManifestePage />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Manifeste;
