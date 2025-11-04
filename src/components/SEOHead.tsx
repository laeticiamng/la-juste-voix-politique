import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  structuredData?: object;
}

const SEOHead: React.FC<SEOProps> = ({
  title = 'La Juste Voix',
  description = 'Un programme politique qui remet la justice, la dignité et la contribution au centre de la République.',
  keywords = 'politique, france, justice sociale, fiscalité, revalorisations, IR ultra-hauts revenus',
  image = '/og-image.jpg',
  url = 'https://lajustevoix.fr',
  type = 'website',
  structuredData
}) => {
  const fullTitle = title === 'La Juste Voix' ? title : `${title} | La Juste Voix`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="La Juste Voix" />
      <meta property="og:locale" content="fr_FR" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="La Juste Voix" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="fr" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

// Common structured data schemas
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "PoliticalParty",
  "name": "La Juste Voix",
  "description": "Un programme politique qui remet la justice, la dignité et la contribution au centre de la République.",
  "url": "https://lajustevoix.fr",
  "foundingDate": "2024",
  "ideology": "Justice sociale",
  "sameAs": [
    "https://twitter.com/lajustevoix",
    "https://facebook.com/lajustevoix"
  ]
};

export const articleSchema = (title: string, description: string, url: string) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": title,
  "description": description,
  "url": url,
  "author": {
    "@type": "Organization",
    "name": "La Juste Voix"
  },
  "publisher": {
    "@type": "Organization",
    "name": "La Juste Voix"
  },
  "datePublished": new Date().toISOString(),
  "dateModified": new Date().toISOString()
});

export default SEOHead;