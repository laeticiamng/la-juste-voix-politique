
import React from 'react';
import KeyMeasureCard, { KeyMeasure } from './KeyMeasureCard';

// Key initiatives/measures
const keyMeasures: KeyMeasure[] = [
  {
    id: 1,
    title: "CNJP — CONTRIBUTION NATIONALE DE JUSTICE PATRIMONIALE",
    description: "Un impôt progressif sur les patrimoines financiers nets > 100 M€, appliqué aux personnes physiques, même si leur fortune est logée dans une société.",
    strengths: [
      "Vise les ultra-riches réels, pas les entrepreneurs",
      "Passe à travers les écrans juridiques (holdings, SCI…)",
      "Peut générer 90 à 130 Mds €/an grâce au taux max 60%",
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
      "18,5 à 25,5 Md€/an dédiés à la réduction de dette (15% CNJP + 100% CER)",
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
