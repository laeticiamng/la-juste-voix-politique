import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { manifesteContent, blocksData } from '../lib';
import { Gavel, Heart, GraduationCap, Coins, Home, Earth, Users, Shield } from 'lucide-react';

const getBlockIcon = (id: number) => {
  const icons = {
    1: <Gavel className="h-5 w-5 text-ljv-gold" />,
    2: <Shield className="h-5 w-5 text-ljv-gold" />,
    3: <Heart className="h-5 w-5 text-ljv-gold" />,
    4: <GraduationCap className="h-5 w-5 text-ljv-gold" />,
    5: <Coins className="h-5 w-5 text-ljv-gold" />,
    6: <Home className="h-5 w-5 text-ljv-gold" />,
    7: <Earth className="h-5 w-5 text-ljv-gold" />,
    8: <Users className="h-5 w-5 text-ljv-gold" />
    // Add more icons for other blocks as needed
  };
  return icons[id as keyof typeof icons] || <Gavel className="h-5 w-5 text-ljv-gold" />;
};

// Key initiatives/measures for the top section
const keyMeasures = [
  {
    id: 1,
    title: "CNJP — CONTRIBUTION NATIONALE DE JUSTICE PATRIMONIALE",
    description: "Un impôt progressif sur les patrimoines financiers nets > 100 M€, appliqué aux personnes physiques, même si leur fortune est logée dans une société.",
    strengths: [
      "Vise les ultra-riches réels, pas les entrepreneurs",
      "Passe à travers les écrans juridiques (holdings, SCI…)",
      "Peut générer 70 à 100 Mds €/an",
      "Inédit en France et dans le monde par sa clarté et son barème détaillé"
    ]
  },
  {
    id: 2,
    title: "Revalorisation immédiate de plus de 4 millions de travailleurs essentiels",
    description: "Exemples chiffrés :",
    examples: [
      "+1 000 €/mois pour médecins internes",
      "+600 € pour infirmiers",
      "SMIC horaire obligatoire pour tous les étudiants hospitaliers et stagiaires",
      "+500–600 € pour enseignants, assistants sociaux, éducateurs, ATSEM"
    ],
    strengths: [
      "Tu lies financement clair (CNJP) à revalorisation immédiate.",
      "Tu ne promets pas \"on verra\" : tu dis \"voilà comment, quand, pour qui.\""
    ]
  },
  {
    id: 3,
    title: "Remplacement automatique des députés absents",
    slogan: "Tout travail mérite salaire. Mais tout salaire mérite travail aussi.",
    measures: [
      "25 % d'absences non justifiées = suspension des indemnités",
      "10 absences = remplacement par le suppléant",
      "Inéligibilité pendant 5 ans"
    ],
    note: "Inédit, radical et soutenu par l'opinion."
  },
  {
    id: 4,
    title: "FSCRD — Fonds Souverain Citoyen de Réduction de la Dette",
    description: "Objectif : Rembourser la dette publique sans austérité, en la finançant par la CNJP et la CER.",
    strengths: [
      "Géré par citoyens tirés au sort + experts",
      "Jusqu'à 40 Mds €/an dédiés à la réduction de dette",
      "Supprime l'excuse du \"y a pas d'argent\""
    ]
  },
  {
    id: 5,
    title: "Uniformisation de la consultation médicale à 50 €",
    measures: [
      "Pour tous les médecins, généralistes et spécialistes",
      "Remboursée à 100 % par la Sécurité sociale",
      "Finit avec les consultations à 25–30 €, sources de déséquilibre et de désertification"
    ]
  },
  {
    id: 6,
    title: "Référent \"Projet & Ambition\" dans chaque établissement scolaire",
    measures: [
      "Un adulte formé pour accompagner chaque jeune",
      "Détecter, encourager, et structurer son projet de vie",
      "Fait passer l'orientation de \"par défaut\" à \"par ambition\""
    ]
  },
  {
    id: 7,
    title: "Logement contre contribution locale",
    measures: [
      "Un logement subventionné",
      "En échange : 5 à 15 h/semaine de mission utile pour la commune",
      "Ciblé sur les jeunes, les parents isolés, les personnes en insertion"
    ],
    note: "✔️ Logique de dignité + lien social"
  },
  {
    id: 8,
    title: "Créateur de transmission : un nouveau statut culturel",
    measures: [
      "Artiste ou auteur soutenu = obligation de mission publique : école, prison, hôpital",
      "Création de 10 000 résidences d'artistes-médiateurs",
      "Culture = lien social, outil d'émancipation, pas élitisme sous cloche"
    ]
  },
  {
    id: 9,
    title: "Budget citoyen de 2 milliards €/an",
    measures: [
      "Projets locaux votés par les citoyens dès 16 ans",
      "Portés par associations, communes, collectifs",
      "100 % démocratique, visible, traçable"
    ],
    note: "✔️ Une démocratie participative avec un vrai pouvoir budgétaire"
  },
  {
    id: 10,
    title: "Création d'un Statut de Parent Unique",
    measures: [
      "Quotient familial revu",
      "Priorité en crèche",
      "Aides renforcées à la reconversion"
    ],
    note: "✔️ Tu fais du parent solo un acteur reconnu de la République, pas une case invisible"
  }
];

const ManifestePage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto py-8">
      <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-center title-gradient">
        Manifeste
      </h1>
      
      <div className="prose prose-lg mx-auto mb-12">
        <div className="text-center mb-12">
          <div className="w-16 h-1 bg-ljv-gold mx-auto mb-6"></div>
          <p className="text-2xl font-serif italic text-gray-700">
            "Pour une République juste et digne"
          </p>
        </div>
        
        <div className="space-y-6 text-gray-700 font-playfair">
          {manifesteContent.content.split('\n\n').map((section, index) => (
            <div key={index} className="mb-8">
              {section.includes('	•') ? (
                <ul className="list-disc pl-6 space-y-2">
                  {section.split('\n').map((line, lIndex) => (
                    <li key={lIndex} className="text-gray-700">
                      {line.replace(/^\s*•\s*/, '')}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-700">{section}</p>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* 10 Key Measures Section */}
      <div className="my-16">
        <h2 className="text-3xl font-serif font-bold mb-8 text-center">
          Les 10 mesures phares
          <div className="w-16 h-1 bg-ljv-gold mx-auto mt-4"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {keyMeasures.map((measure) => (
            <div key={measure.id} className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <Badge variant="outline" className="bg-ljv-gold/10 text-ljv-gold border-ljv-gold/30 text-sm">
                    Mesure {measure.id}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-bold text-ljv-navy mb-3">{measure.title}</h3>
                
                {measure.description && (
                  <p className="text-gray-700 mb-3">{measure.description}</p>
                )}
                
                {measure.slogan && (
                  <blockquote className="border-l-4 border-ljv-gold pl-4 italic text-gray-600 mb-3">
                    "{measure.slogan}"
                  </blockquote>
                )}
                
                {measure.examples && (
                  <ul className="list-disc pl-6 mb-3 text-gray-700">
                    {measure.examples.map((example, index) => (
                      <li key={index}>{example}</li>
                    ))}
                  </ul>
                )}
                
                {measure.measures && (
                  <ul className="list-disc pl-6 mb-3 text-gray-700">
                    {measure.measures.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
                
                {measure.strengths && (
                  <div className="mt-4">
                    <p className="font-semibold text-ljv-navy mb-2">Pourquoi c'est fort :</p>
                    <ul className="list-none space-y-1">
                      {measure.strengths.map((strength, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-700">
                          <span className="text-ljv-gold font-bold">✅</span>
                          <span>{strength}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {measure.note && (
                  <div className="mt-3 text-gray-700 italic">
                    {measure.note}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* 14 Program Blocks Section */}
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
                      {getBlockIcon(block.id)}
                    </span>
                    <div>
                      <h3 className="text-xl font-serif font-semibold text-ljv-navy group-hover:text-ljv-gold transition-colors">
                        {block.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {block.subtitle}
                      </p>
                      {block.quotes && block.quotes[0] && (
                        <blockquote className="italic text-sm text-gray-600 mt-3 border-l-2 border-ljv-gold pl-3">
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
                    <p className="text-xl text-gray-500">
                      {block.subtitle}
                    </p>
                    {block.quotes && block.quotes[0] && (
                      <blockquote className="italic text-lg text-gray-600 mt-4 border-l-4 border-ljv-gold pl-4">
                        {block.quotes[0]}
                      </blockquote>
                    )}
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-serif font-semibold mb-4">Philosophie</h3>
                  <p className="text-gray-700">{block.description}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-serif font-semibold mb-6">Nos mesures</h3>
                  <Accordion type="single" collapsible className="w-full">
                    {block.measures.map((measure, index) => (
                      <AccordionItem key={index} value={`measure-${index}`}>
                        <AccordionTrigger className="text-left">
                          <div className="flex items-center gap-3">
                            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-ljv-gold bg-opacity-10 flex items-center justify-center text-ljv-gold font-medium">
                              {index + 1}
                            </div>
                            <span>{measure.split(' - ')[0] || measure}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="pl-11 text-gray-700">
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
      
      {manifesteContent.conclusion && (
        <div className="mt-16 mb-12 bg-gray-50 p-8 rounded-xl border border-gray-200">
          <h2 className="text-3xl font-serif font-bold mb-6 text-center">Conclusion</h2>
          <div className="prose prose-lg mx-auto font-playfair">
            {manifesteContent.conclusion.split('\n\n').map((paragraph, index) => (
              <div key={index} className="mb-6">
                {paragraph.includes('•') ? (
                  <ul className="list-disc pl-6 space-y-2">
                    {paragraph.split('\n').map((line, i) => (
                      <li key={i} className="text-gray-700">{line.replace(/^- /, '').replace(/^\s*•\s*/, '')}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-700">{paragraph}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div className="mt-12 text-center">
        <Link to="/#blocks" className="btn-primary">
          Retour à l'aperçu des blocs
        </Link>
      </div>
    </div>
  );
};

export default ManifestePage;
