
import React from 'react';
import KeyMeasureCard, { KeyMeasure } from './KeyMeasureCard';

// Key initiatives/measures
const keyMeasures: KeyMeasure[] = [
  {
    id: 1,
    title: "IR ULTRA-HAUTS REVENUS — Tranches renforcées 55-65%",
    description: "Trois nouvelles tranches d'impôt sur le revenu exclusivement pour les revenus exceptionnels (> 1M€/an) : 55% (1-5M€), 60% (5-10M€), 65% (>10M€).",
    strengths: [
      "Vise uniquement les 0,01% des contribuables (revenus > 1M€/an)",
      "Viabilité juridique solide garantie par notre approche progressive",
      "Génère 24 à 37 Mds €/an de recettes nettes",
      "Crédit d'impôt Bac+5+ maintenu (15% avec dégressivité)"
    ]
  },
  {
    id: 2,
    title: "Revalorisation de 1,5 million de travailleurs essentiels",
    description: "Exemples chiffrés :",
    examples: [
      "+500 € pour infirmiers, enseignants, assistants sociaux",
      "+500 € pour ATSEM, éducateurs spécialisés",
      "+750 € pour maires ruraux et moyennes communes",
      "Augmentation SMIC et soutiens secteur privé"
    ],
    strengths: [
      "Financement clair (IR ultra-hauts revenus + CER)",
      "Engagement concret : 8-10 Md€/an dédiés aux revalorisations"
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
    title: "FSCRD — Fonds Souverain de Réduction de la Dette (REPORTÉ)",
    description: "Objectif : Rembourser la dette publique sans austérité. Cette mesure ambitieuse est reportée à une Phase 2, conditionnée à une croissance économique soutenue.",
    strengths: [
      "Reporté à Phase 2 conditionnée à croissance >3%/an",
      "Budget actuel insuffisant (24-37 Md€/an vs 130 Md€ prévu)",
      "Maintenu comme objectif à moyen terme"
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
    note: "✔️ Reconnaissance du parent solo comme acteur à part entière de la République, plus une case invisible"
  }
];

const KeyMeasures: React.FC = () => {
  return (
    <div className="my-16">
      <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-center title-gradient">
        Les 10 mesures phares
      </h2>
      <div className="w-24 h-1 bg-ljv-gold mx-auto mt-4 mb-8 rounded-full"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
        {keyMeasures.map((measure, idx) => (
          <div 
            key={measure.id} 
            className="animate-fade-in"
            style={{ animationDelay: `${idx * 0.1}s`, animationFillMode: 'backwards' }}
          >
            <KeyMeasureCard measure={measure} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyMeasures;
