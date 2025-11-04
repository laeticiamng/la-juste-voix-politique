
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ChevronDown, ChevronUp, HelpCircle, Search, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

type FAQCategory = 'general' | 'revalorisations' | 'fiscalite' | 'programme' | 'initiatives';
type FAQItem = {
  question: string;
  answer: string;
  category: FAQCategory;
  badge?: string;
};

const faqItems: FAQItem[] = [
  // General questions
  {
    question: "Qu'est-ce que La Juste Voix ?",
    answer: "La Juste Voix est un programme politique visant à restaurer la justice, la dignité et l'égalité au cœur de notre République. Notre vision se fonde sur une reconnaissance juste des contributions de chacun à la société et une répartition plus équitable des richesses.",
    category: 'general',
  },
  {
    question: "Comment soutenir le programme ?",
    answer: "Vous pouvez soutenir La Juste Voix de plusieurs façons : en vous inscrivant à notre newsletter pour rester informé, en partageant nos publications sur les réseaux sociaux, en participant à nos événements locaux, ou en devenant bénévole pour aider à diffuser nos idées dans votre région.",
    category: 'general',
  },
  {
    question: "Qui sont les fondateurs de La Juste Voix ?",
    answer: "La Juste Voix a été fondée par un collectif de citoyens engagés venant d'horizons divers : professeurs, soignants, entrepreneurs, étudiants et retraités. Notre mouvement transcende les clivages traditionnels pour proposer une vision renouvelée et juste de la société.",
    category: 'general',
  },
  {
    question: "Est-ce un mouvement politique ou associatif ?",
    answer: "La Juste Voix est un mouvement politique à part entière qui vise à transformer notre système en profondeur pour plus de justice et d'équité. Nous sommes indépendants des partis traditionnels et nous nous définissons par nos valeurs et nos propositions concrètes plutôt que par un positionnement sur l'échiquier politique classique.",
    category: 'general',
  },
  
  // Revalorisations questions
  {
    question: "Qui est concerné par les revalorisations salariales ?",
    answer: "Les revalorisations concernent principalement les métiers essentiels mais sous-valorisés, comme les soignants, les enseignants, les travailleurs sociaux, les forces de l'ordre, mais aussi les métiers de service à la personne et du secteur médico-social. Notre programme cible spécifiquement les professions dont l'utilité sociale est inversement proportionnelle à la rémunération actuelle.",
    category: 'revalorisations',
  },
  {
    question: "Comment seront financées ces revalorisations ?",
    answer: "Ces revalorisations seront financées principalement par la Contribution Nationale de Justice Patrimoniale (CNJP) qui génère 90 à 130 milliards €/an en ciblant les patrimoines financiers nets supérieurs à 100 millions €. Les revalorisations des métiers publics représentent 25% de la CNJP, soit 22,5 à 32,5 milliards €/an, complétées par la lutte contre l'évasion fiscale et une réforme fiscale plus progressive.",
    category: 'revalorisations',
  },
  {
    question: "Quels seront les montants des revalorisations ?",
    answer: "Les revalorisations varieront selon les métiers et leur niveau actuel de sous-rémunération. Pour les soignants, nous prévoyons une augmentation moyenne de 20%, pour les enseignants de 15 à 25% selon l'ancienneté, et pour les métiers du soin aux personnes âgées jusqu'à 30%. Chaque secteur fait l'objet d'une analyse spécifique détaillée dans notre programme.",
    category: 'revalorisations',
  },
  {
    question: "Ces revalorisations concernent-elles aussi le secteur privé ?",
    answer: "Notre programme prévoit des incitations fiscales pour les entreprises qui alignent leurs politiques salariales avec nos objectifs de justice. De plus, la revalorisation du SMIC et des négociations de branches permettront de tirer vers le haut l'ensemble des salaires du secteur privé, particulièrement dans les métiers essentiels sous-rémunérés.",
    category: 'revalorisations',
  },
  
  // Fiscalité questions
  {
    question: "Qu'est-ce que la CNJP ?",
    answer: "La Contribution Nationale de Justice Patrimoniale est une mesure fiscale ciblant les 0,1% des Français les plus fortunés, dont le patrimoine financier net dépasse 100 millions d'euros. Elle ne concerne pas les classes moyennes, ni les entrepreneurs actifs, ni les résidences principales. Son objectif est de réduire les inégalités extrêmes de patrimoine et de financer les services publics essentiels.",
    category: 'fiscalite',
  },
  {
    question: "Comment sera appliquée la CNJP ?",
    answer: "La CNJP sera appliquée sur le patrimoine réel des personnes concernées, en tenant compte des actifs détenus directement ou indirectement via des sociétés qu'elles contrôlent. Un dispositif anti-évasion robuste sera mis en place, avec une coopération internationale renforcée pour éviter les stratégies d'évitement. Les résidences principales et les actifs professionnels sont exclus de l'assiette.",
    category: 'fiscalite',
  },
  {
    question: "Allez-vous augmenter les impôts des classes moyennes ?",
    answer: "Non, notre programme ne prévoit aucune augmentation d'impôt pour les classes moyennes. Au contraire, nous proposons une refonte de l'impôt sur le revenu qui sera plus favorable aux revenus modestes et moyens, avec une progressivité plus juste. Seuls les très hauts revenus et les grandes fortunes contribueront davantage.",
    category: 'fiscalite',
  },
  {
    question: "Comment comptez-vous lutter contre l'évasion fiscale ?",
    answer: "Notre plan comporte plusieurs volets : renforcement des effectifs de contrôle fiscal, nouvelles technologies de détection des fraudes, coopération internationale accrue, sanctions dissuasives pour les intermédiaires qui facilitent l'évasion, et protection des lanceurs d'alerte. Nous évaluons à 20 milliards d'euros par an les recettes supplémentaires qui peuvent être recouvrées.",
    category: 'fiscalite',
  },
  
  // Programme questions
  {
    question: "Quelles sont les principales mesures de votre programme ?",
    answer: "Notre programme s'articule autour de 14 blocs thématiques couvrant la justice sociale, la transition écologique, la rénovation démocratique, et la vitalité économique. Parmi nos mesures phares : la revalorisation des métiers essentiels, la CNJP, un plan massif de rénovation écologique, le renforcement des services publics, et une démocratie plus participative.",
    category: 'programme',
  },
  {
    question: "Quelle est votre position sur l'Europe ?",
    answer: "Nous sommes profondément pro-européens mais défendons une Europe refondée sur la justice sociale et la transition écologique. Nous proposons une harmonisation fiscale et sociale par le haut, un Green New Deal européen, et une démocratisation des institutions européennes pour les rapprocher des citoyens.",
    category: 'programme',
  },
  {
    question: "Comment comptez-vous faire face à l'urgence climatique ?",
    answer: "Notre plan climat prévoit un investissement massif de 50 milliards par an dans la transition écologique : rénovation thermique des bâtiments, développement des énergies renouvelables, transformation de notre agriculture, mobilités propres, et préservation de la biodiversité. Nous planifions également une réorientation de l'économie vers des activités durables et une fiscalité écologique juste.",
    category: 'programme',
  },
  {
    question: "Quelle est votre vision pour l'éducation ?",
    answer: "Nous défendons une éducation émancipatrice qui réduit les inégalités sociales. Notre plan prévoit : classes à effectifs réduits, revalorisation du métier d'enseignant, renforcement de l'éducation artistique et civique, lutte contre le décrochage scolaire, et gratuité effective de l'école. L'éducation est pour nous le premier investissement d'avenir.",
    category: 'programme',
  },
  
  // Initiatives phares
  {
    question: "Qu'est-ce que la CNJP (Contribution Nationale de Justice Patrimoniale) ?",
    answer: "La CNJP est un impôt progressif sur les patrimoines financiers nets supérieurs à 100 millions d'euros, appliqué aux personnes physiques, même si leur fortune est logée dans une société. Elle vise les ultra-riches réels et non les entrepreneurs, passe à travers les écrans juridiques (holdings, SCI…), et peut générer entre 90 et 130 milliards d'euros par an grâce à un taux maximal de 60% sur les patrimoines > 50 Md€. Cette mesure est inédite en France et dans le monde par sa clarté et son barème détaillé.",
    category: 'initiatives',
    badge: 'Phare',
  },
  {
    question: "Comment fonctionnent les revalorisations des travailleurs essentiels ?",
    answer: "Notre plan prévoit la revalorisation immédiate de plus de 4 millions de travailleurs essentiels. Par exemple : +1 000 €/mois pour les médecins internes, +600 € pour les infirmiers, SMIC horaire obligatoire pour tous les étudiants hospitaliers et stagiaires, et +500-600 € pour les enseignants, assistants sociaux, éducateurs et ATSEM. Ce qui rend cette mesure inédite est qu'elle lie un financement clair (CNJP) à une revalorisation immédiate, avec des montants précis et des bénéficiaires clairement identifiés.",
    category: 'initiatives',
    badge: 'Phare',
  },
  {
    question: "Comment comptez-vous assurer la présence des députés à l'Assemblée ?",
    answer: "Nous proposons un système de remplacement automatique des députés absents, suivant le principe 'Tout travail mérite salaire. Mais tout salaire mérite travail aussi'. La mesure prévoit que 25% d'absences non justifiées entraînent une suspension des indemnités, 10 absences mènent au remplacement par le suppléant, et une inéligibilité pendant 5 ans. Cette mesure inédite et radicale est fortement soutenue par l'opinion publique.",
    category: 'initiatives',
    badge: 'Phare',
  },
  {
    question: "Qu'est-ce que le FSCRD (Fonds Souverain Citoyen de Réduction de la Dette) ?",
    answer: "Le FSCRD est un fonds souverain dont l'objectif est de rembourser la dette publique sans austérité, en la finançant par la CNJP et la CER. Ce qui rend ce fonds particulièrement innovant est qu'il sera géré par des citoyens tirés au sort assistés d'experts, avec 18,5 à 25,5 milliards d'euros par an dédiés à la réduction de la dette (15% de la CNJP de 90-130 Md€ + 100% de la CER de 5-6 Md€/an). Cette mesure supprime l'excuse du 'y a pas d'argent' souvent utilisée pour justifier l'inaction.",
    category: 'initiatives',
    badge: 'Phare',
  },
  {
    question: "Comment allez-vous réformer les consultations médicales ?",
    answer: "Nous proposons une uniformisation de la consultation médicale à 50 euros, tant pour les généralistes que pour les spécialistes, remboursée à 100% par la Sécurité sociale. Cette mesure met fin aux consultations à 25-30 euros, qui sont source de déséquilibre et de désertification médicale. Elle vise à revaloriser la profession médicale tout en garantissant un accès équitable aux soins pour tous les citoyens.",
    category: 'initiatives',
    badge: 'Phare',
  },
  {
    question: "Qu'est-ce que le référent 'Projet & Ambition' dans les établissements scolaires ?",
    answer: "Notre programme prévoit la mise en place d'un référent 'Projet & Ambition' dans chaque établissement scolaire. Il s'agit d'un adulte formé pour accompagner chaque jeune, détecter, encourager et structurer son projet de vie. L'objectif est de faire passer l'orientation scolaire d'une logique 'par défaut' à une logique 'par ambition', permettant ainsi à chaque élève de développer pleinement son potentiel en fonction de ses aspirations.",
    category: 'initiatives',
    badge: 'Phare',
  },
  {
    question: "En quoi consiste le programme 'Logement contre contribution locale' ?",
    answer: "Le programme 'Logement contre contribution locale' offre un logement subventionné en échange de 5 à 15 heures par semaine de mission utile pour la commune. Il est ciblé principalement sur les jeunes, les parents isolés et les personnes en insertion. Ce dispositif s'inscrit dans une logique de dignité et de renforcement du lien social, permettant aux personnes concernées de bénéficier d'un logement abordable tout en contribuant positivement à leur communauté.",
    category: 'initiatives',
    badge: 'Phare',
  },
  {
    question: "Que propose le nouveau statut 'Créateur de transmission' dans le domaine culturel ?",
    answer: "Le statut 'Créateur de transmission' est une nouvelle approche du soutien à la culture qui associe le soutien aux artistes et auteurs à une obligation de mission publique dans les écoles, les prisons ou les hôpitaux. Notre programme prévoit la création de 10 000 résidences d'artistes-médiateurs. Cette initiative vise à transformer la culture en un véritable outil de lien social et d'émancipation, s'éloignant d'une vision élitiste 'sous cloche'.",
    category: 'initiatives',
    badge: 'Phare',
  },
  {
    question: "Comment fonctionnera le budget citoyen ?",
    answer: "Notre programme inclut un budget citoyen de 2 milliards d'euros par an, dédié à des projets locaux votés par les citoyens dès l'âge de 16 ans. Ces projets pourront être portés par des associations, des communes ou des collectifs citoyens. Ce dispositif 100% démocratique, visible et traçable représente une véritable démocratie participative avec un pouvoir budgétaire concret, permettant aux citoyens de s'impliquer directement dans les décisions qui affectent leur quotidien.",
    category: 'initiatives',
    badge: 'Phare',
  },
  {
    question: "Qu'implique la création d'un Statut de Parent Unique ?",
    answer: "La création d'un Statut de Parent Unique comprend une révision du quotient familial, une priorité en crèche, et des aides renforcées à la reconversion professionnelle. Cette mesure vise à faire du parent solo un acteur reconnu de la République, plutôt qu'une simple 'case invisible' dans les formulaires administratifs. Elle répond aux défis spécifiques auxquels sont confrontés les parents qui élèvent seuls leurs enfants, en leur offrant un soutien adapté à leur situation particulière.",
    category: 'initiatives',
    badge: 'Phare',
  },
];

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState<FAQCategory>('general');
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Toggle FAQ item open/closed
  const toggleItem = (index: number) => {
    setOpenItems(openItems.includes(index) 
      ? openItems.filter(i => i !== index) 
      : [...openItems, index]
    );
  };

  // Filter FAQ items by search term and category
  const filteredItems = faqItems.filter(item => {
    const matchesSearch = searchTerm === '' || 
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = activeCategory === item.category;
    
    return matchesSearch && matchesCategory;
  });

  const categories: { id: FAQCategory; label: string }[] = [
    { id: 'general', label: 'Questions générales' },
    { id: 'initiatives', label: '10 Mesures Phares' },
    { id: 'revalorisations', label: 'Revalorisations' },
    { id: 'fiscalite', label: 'Fiscalité' },
    { id: 'programme', label: 'Programme' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">
              <span className="title-gradient">Foire aux questions</span>
            </h1>
            <p className="text-xl text-gray-900 dark:text-gray-100 max-w-2xl mx-auto font-semibold">
              Découvrez les réponses aux questions les plus fréquemment posées sur La Juste Voix, notre programme et nos propositions.
            </p>
          </div>

          {/* Search bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher une question..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-ljv-gold"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={`rounded-full ${
                  activeCategory === category.id
                    ? "bg-ljv-navy hover:bg-ljv-navy/90"
                    : "border-gray-300 text-gray-700"
                }`}
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* FAQ items */}
          <div className="max-w-3xl mx-auto space-y-6">
            {filteredItems.length === 0 ? (
              <div className="text-center py-8">
                <HelpCircle className="mx-auto mb-3 text-gray-400" size={48} />
                <p className="text-lg text-gray-900 dark:text-gray-100 font-semibold">Aucune question ne correspond à votre recherche.</p>
                <Button 
                  className="mt-4 bg-ljv-navy hover:bg-ljv-gold text-white"
                  onClick={() => {setSearchTerm(''); setActiveCategory('general');}}
                >
                  Réinitialiser la recherche
                </Button>
              </div>
            ) : (
              filteredItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full p-5 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{item.question}</h3>
                      {item.badge && (
                        <Badge variant="outline" className="bg-ljv-gold/10 text-ljv-gold border-ljv-gold/30">
                          {item.badge}
                        </Badge>
                      )}
                    </div>
                    {openItems.includes(index) ? (
                      <ChevronUp className="flex-shrink-0 text-ljv-gold" />
                    ) : (
                      <ChevronDown className="flex-shrink-0 text-ljv-navy" />
                    )}
                  </button>
                  
                  {openItems.includes(index) && (
                    <div className="p-5 bg-gray-50">
                      <p className="text-gray-900 dark:text-gray-100 font-medium leading-relaxed">{item.answer}</p>
                      {activeCategory === 'initiatives' && (
                        <div className="mt-4">
                          <Link to="/manifeste" className="text-gray-900 dark:text-gray-100 hover:text-ljv-gold flex items-center gap-2 font-semibold">
                            En savoir plus sur notre manifeste <ExternalLink size={16} />
                          </Link>
                        </div>
                      )}
                    </div>
                  )}
                </motion.div>
              ))
            )}
          </div>

          {/* Contact section */}
          <div className="mt-16 max-w-3xl mx-auto bg-gradient-to-br from-ljv-navy to-ljv-navy/90 text-white p-8 rounded-lg">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Vous avez d'autres questions ?</h2>
              <p className="mb-6">N'hésitez pas à nous contacter directement par email ou en utilisant notre formulaire de contact.</p>
              <Button asChild className="bg-ljv-gold hover:bg-white hover:text-ljv-navy">
                <Link to="/contact">Nous contacter</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
