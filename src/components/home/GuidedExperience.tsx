import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Users, ShieldAlert, MessageCircle, Compass } from "lucide-react";

const GuidedExperience: React.FC = () => {
  const steps = [
    {
      title: "Lire le manifeste complet",
      description: "Comprendre notre vision, nos 14 blocs et les mesures phares déjà détaillées.",
      icon: <FileText className="h-6 w-6" />,
      badge: "Étape 1",
      link: "/manifeste",
      cta: "Accéder au manifeste",
    },
    {
      title: "Comparer avant / après",
      description: "Visualiser l'impact sur 95+ profils métiers et mesurer les écarts avec le système actuel.",
      icon: <Users className="h-6 w-6" />,
      badge: "Étape 2",
      link: "/comparaison-systeme?tab=profiles",
      cta: "Voir les profils détaillés",
    },
    {
      title: "Consulter risques & sécurisations",
      description: "Découvrir nos garde-fous juridiques, budgétaires et opérationnels déjà prévus.",
      icon: <ShieldAlert className="h-6 w-6" />,
      badge: "Étape 3",
      link: "/risques-securisations",
      cta: "Voir les sécurisations",
    },
    {
      title: "Questions fréquentes",
      description: "Retrouver les réponses concrètes aux cas particuliers et aux interrogations récurrentes.",
      icon: <MessageCircle className="h-6 w-6" />,
      badge: "Étape 4",
      link: "/faq",
      cta: "Consulter la FAQ",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-ljv-navy/5 via-white to-ljv-gold/10" aria-labelledby="guided-experience-title">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <Badge className="bg-ljv-navy text-white px-3 py-1 text-sm inline-flex items-center gap-2">
            <Compass className="h-4 w-4" />
            Parcours guidé
          </Badge>
          <h2 id="guided-experience-title" className="text-3xl md:text-4xl font-serif font-bold mt-4 mb-3">
            Comprendre le programme en 4 étapes
          </h2>
          <p className="text-lg text-gray-800 dark:text-gray-200 font-medium">
            Chaque ressource est déjà disponible : il vous suffit de suivre le fil pour vérifier la cohérence et l'impact de nos propositions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step) => (
            <Card key={step.title} className="h-full border border-ljv-navy/15 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="text-ljv-navy bg-ljv-navy/10">
                    {step.badge}
                  </Badge>
                  <div className="p-2 bg-white rounded-lg border border-ljv-gold/40 text-ljv-navy">
                    {step.icon}
                  </div>
                </div>
                <CardTitle className="text-xl text-gray-900 dark:text-gray-100">{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-base text-gray-800 dark:text-gray-200 leading-relaxed">{step.description}</p>
                <Link
                  to={step.link}
                  className="inline-flex items-center justify-center w-full rounded-md border border-ljv-navy text-ljv-navy px-4 py-2 font-semibold hover:bg-ljv-navy hover:text-white transition-colors"
                >
                  {step.cta}
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

export default GuidedExperience;
