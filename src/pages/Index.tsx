
import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import BlockCard from "../components/BlockCard";
import Footer from "../components/Footer";
import { blocks } from "../lib";
import CNJPSummary from "../components/home/CNJPSummary";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <Hero />
        
        {/* CNJP Summary Section */}
        <div className="container mx-auto px-4 my-16">
          <CNJPSummary />
        </div>
        
        <div id="blocks" className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center">
            Les 14 blocs de la Juste Voix
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blocks.map((block) => (
              <BlockCard key={block.id} block={block} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
