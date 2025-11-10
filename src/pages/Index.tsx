
import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import BlockCard from "../components/BlockCard";
import Footer from "../components/Footer";
import { blocksData } from "../lib/blocks";
import TestimonialsSection from "../components/home/TestimonialsSection";
import NewsletterSignup from "../components/NewsletterSignup";
import SEOHead, { organizationSchema } from "../components/SEOHead";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Accueil"
        description="La Juste Voix - Un programme politique qui remet la justice, la dignité et la contribution au centre de la République. Découvrez nos propositions pour une société plus juste."
        keywords="politique france, justice sociale, programme politique, revalorisations, IR ultra-hauts revenus, fiscalité juste, crédit d'impôt Bac+5"
        structuredData={organizationSchema}
      />
      <Header />
      <main className="flex-grow pt-24">
        <Hero />

        {/* Testimonials Section */}
        <TestimonialsSection />
        
        <div id="blocks" className="container mx-auto px-4 py-16" aria-labelledby="blocks-title">
          <h2 id="blocks-title" className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center">
            <span className="title-gradient">Les 14 blocs de la Juste Voix</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blocksData.map((block) => (
              <BlockCard key={block.id} block={block} />
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <section className="py-16 bg-gray-50" aria-labelledby="newsletter-title">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <NewsletterSignup />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
