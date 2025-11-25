import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Coins, ShieldCheck, GraduationCap } from "lucide-react";
import { revalorisationsSummary } from "@/lib/revalorisations-data";

const ProgramHighlights: React.FC = () => {
  const highlights = [
    {
      title: "Revalorisations immédiates",
      description: "Une hausse ciblée pour 4M+ de travailleurs essentiels, financée dès la première année.",
      icon: <Coins className="h-6 w-6 text-ljv-gold" />,
      badge: `${revalorisationsSummary.beneficiaries} bénéficiaires`,
      metric: revalorisationsSummary.cost,
      link: "/revalorisations",
      cta: "Découvrir les métiers revalorisés",
    },
    {
      title: "Fiscalité juste et transparente",
      description: "Un IR renforcé à 55-65% au-delà de 1M€/an pour lever 24 à 37 Md€/an sans toucher aux classes moyennes.",
      icon: <ShieldCheck className="h-6 w-6 text-ljv-navy" />,
      badge: "100% chiffré & financé",
      metric: "24-37 Md€ / an",
      link: "/fiscalite",
      cta: "Voir le barème complet",
    },
    {
      title: "Crédits d'impôt excellence",
      description: "15% pour les diplômés Bac+5+ et 20% pour les doctorats médecine/pharmacie pour valoriser l'effort.",
      icon: <GraduationCap className="h-6 w-6 text-ljv-navy" />,
      badge: "+50€ à +500€/mois",
      metric: "2M+ diplômés concernés",
      link: "/credits-impot",
      cta: "Simuler mon crédit d'impôt",
    },
  ];

  return (
    <section className="py-16 bg-white" aria-labelledby="program-highlights-title">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-ljv-navy font-semibold mb-3">
            Cohérence du programme
          </p>
          <h2 id="program-highlights-title" className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Les piliers déjà en place
          </h2>
          <p className="text-lg text-gray-800 dark:text-gray-200 font-medium">
            Toutes nos mesures s'appuient sur des mécanismes existants : revalorisations financées, fiscalité du mérite et
            crédits d'impôt pour l'excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item) => (
            <Card key={item.title} className="h-full border-ljv-gold/30 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-ljv-gold/15 rounded-lg">{item.icon}</div>
                  <CardTitle className="text-xl text-gray-900 dark:text-gray-100">{item.title}</CardTitle>
                </div>
                <Badge className="w-fit bg-ljv-navy text-white">{item.badge}</Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-base text-gray-800 dark:text-gray-200 leading-relaxed">{item.description}</p>
                <div className="flex items-center justify-between p-3 bg-ljv-navy/5 rounded-lg">
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Impact clé</span>
                  <span className="text-lg font-bold text-ljv-navy">{item.metric}</span>
                </div>
                <Link
                  to={item.link}
                  className="inline-flex items-center justify-center w-full rounded-md bg-ljv-navy text-white px-4 py-2 font-semibold hover:bg-ljv-gold transition-colors"
                >
                  {item.cta}
                  <span className="ml-2" aria-hidden>
                    →
                  </span>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramHighlights;
