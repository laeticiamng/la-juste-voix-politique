import { BlockData, DetailedMeasure } from '../types';

export const block4: BlockData = {
  id: 4,
  title: "Éducation & Formation de vie",
  subtitle: "Investir dans notre jeunesse",
  description: "Refuser une école qui trie trop tôt, qui enferme dans des cases, qui décourage les parcours atypiques. Proposer une école qui comprend, valorise, oriente avec bienveillance mais aussi exigence. Créer une école qui ne forme pas seulement des salariés, mais des citoyens confiants, capables d'agir dans le monde.",
  measures: [
    "Référents \"Projet & Ambition\" dans chaque établissement",
    "Orientation multiple & double cursus dans les filières professionnelles",
    "Passerelles réversibles et \"pass formation libre\" jusqu'à 25 ans",
    "Module \"Ouverture & Tolérance\" obligatoire au collège et lycée",
    "Réduction des effectifs en classe à 20 élèves maximum",
    "Revalorisation du métier d'enseignant"
  ],
  quotes: [
    "Chaque élève a droit à l'ambition. Chaque parcours mérite le respect.",
    "Ce n'est pas un échec de changer de direction. Le vrai échec, c'est de n'avoir pas le droit de le faire."
  ],
  detailedMeasures: [
    {
      id: 1,
      title: "Référents \"Projet & Ambition\" dans chaque établissement",
      objective: "Offrir à chaque élève un accompagnement individuel sur son parcours de vie, au-delà des simples notes",
      details: [
        "Détection des blocages personnels ou scolaires",
        "Encouragement des parcours atypiques (art, double voie, création…)",
        "Co-construction du projet avec la famille et les partenaires de terrain",
        "Accompagnement du collège jusqu'au post-bac"
      ],
      impact: "Fin de l'orientation par défaut au profit de choix réfléchis et accompagnés",
      cost: "800 millions € par an",
      financing: "Réallocation des ressources d'orientation existantes et budget de l'Éducation nationale"
    },
    {
      id: 2,
      title: "Orientation multiple & double cursus dans les filières professionnelles",
      objective: "Permettre aux élèves d'avoir deux compétences ou passions sans devoir en abandonner une",
      details: [
        "Possibilité de combiner deux voies pro ou techno dans un cadre organisé",
        "Exemples : mécanique + sport / petite enfance + coiffure / restauration + événementiel",
        "Modules croisés, parcours sur 3 ans, avec passerelles flexibles",
        "Certification double-compétence reconnue"
      ],
      impact: "Valorisation des filières professionnelles et réduction du sentiment de \"piège\" dans une voie unique",
      cost: "500 millions € d'investissement initial",
      financing: "Plan de modernisation de l'enseignement professionnel"
    },
    {
      id: 3,
      title: "Passerelles réversibles et \"pass formation libre\" jusqu'à 25 ans",
      objective: "Supprimer la fatalité de l'erreur d'orientation",
      details: [
        "Réorientation libre jusqu'à 25 ans sans perte de droits",
        "Création d'un pass formation libre à 18 ans (valable 5 ans)",
        "Possibilité de seconde chance (nouveau CAP, formation complémentaire…)",
        "Accompagnement personnalisé pour les pivots vers une autre voie"
      ],
      impact: "Réduction du décrochage scolaire et du chômage des jeunes",
      cost: "1,2 milliard € par an",
      financing: "Budget de l'État et fonds européens pour l'emploi des jeunes"
    },
    {
      id: 4,
      title: "Module \"Ouverture & Tolérance\" obligatoire au collège et lycée",
      objective: "Préparer les jeunes à la diversité du réel, pas seulement aux examens",
      details: [
        "1h/semaine de la 5e à la Terminale",
        "Thèmes : croyances, cultures, sexualités, handicaps, égalité, citoyenneté",
        "Témoignages, débats, ateliers pratiques",
        "Projets communs entre élèves de filières différentes",
        "Stages dans des EHPAD, associations, structures sociales",
        "Rencontres locales : \"Ma différence est une richesse\""
      ],
      impact: "Transformation de l'école en lieu d'ouverture plutôt que de reproduction des stéréotypes",
      cost: "300 millions € par an",
      financing: "Budget de l'Éducation nationale"
    },
    {
      id: 5,
      title: "Classes à taille humaine",
      objective: "Garantir à chaque élève l'attention nécessaire à sa réussite",
      details: [
        "Maximum 20 élèves par classe en primaire et collège",
        "Maximum 25 élèves par classe au lycée",
        "Dédoublement systématique dans les zones d'éducation prioritaire",
        "Assistant pédagogique dans chaque classe de CP-CE1"
      ],
      impact: "Réduction de 30% du décrochage scolaire précoce",
      cost: "2,5 milliards € par an",
      financing: "Réallocation du budget de l'Éducation nationale et participation des collectivités territoriales"
    },
    {
      id: 6,
      title: "Revalorisation du métier d'enseignant",
      objective: "Restaurer l'attractivité du métier d'enseignant et reconnaître son importance sociale",
      details: [
        "Augmentation des salaires de 20% sur 5 ans",
        "Formation continue obligatoire et qualitative",
        "Autonomie pédagogique accrue",
        "Décharge administrative et recentrage sur la pédagogie",
        "Accompagnement des nouveaux enseignants par un mentor"
      ],
      impact: "Réduction de 50% des postes vacants en 3 ans",
      cost: "3 milliards € par an",
      financing: "Budget de l'État et plan d'investissement dans l'éducation"
    }
  ],
  conclusion: "Proposer une école qui sème l'ambition dès le collège, qui valorise les chemins non linéaires, qui offre des secondes chances sans stigmatiser, et qui prépare au réel, pas seulement aux diplômes. Transformer l'école en espace de liberté intérieure, en tremplin de projet, et en communauté qui accompagne. Ne pas changer l'école pour qu'elle fasse rêver, mais pour qu'elle ne brise plus l'élan."
};
