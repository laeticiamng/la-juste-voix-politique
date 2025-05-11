
import { BlockData } from '../types';

export const block4: BlockData = {
  id: 4,
  title: "Éducation & Formation de vie",
  subtitle: "Investir dans notre jeunesse",
  description: "L'éducation est la clé de l'émancipation individuelle et collective. Notre système éducatif doit permettre à chaque enfant de développer son potentiel, quelle que soit son origine sociale.",
  measures: [
    "Réduction des effectifs en classe à 20 élèves maximum",
    "Revalorisation du métier d'enseignant",
    "Gratuité réelle de l'école publique",
    "Refonte des rythmes scolaires",
    "Apprentissage par projets concrets",
    "Éducation écologique et citoyenne"
  ],
  quotes: [
    "Chaque élève a droit à l'ambition. Chaque parcours mérite le respect."
  ],
  detailedMeasures: [
    {
      id: 1,
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
      id: 2,
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
    },
    {
      id: 3,
      title: "Gratuité réelle de l'école publique",
      objective: "Supprimer les inégalités liées au coût caché de l'éducation",
      details: [
        "Fournitures scolaires gratuites pour tous les élèves",
        "Cantine à 1€ pour les familles modestes, gratuite pour les plus précaires",
        "Activités extrascolaires incluses dans le parcours éducatif",
        "Soutien scolaire gratuit et accessible"
      ],
      impact: "Réduction de 40% des inégalités d'accès aux ressources éducatives",
      cost: "1,5 milliard € par an",
      financing: "Budget de l'État et participation des collectivités territoriales"
    },
    {
      id: 4,
      title: "Refonte des rythmes scolaires",
      objective: "Adapter l'enseignement aux rythmes biologiques et capacités d'attention des enfants",
      details: [
        "Journées plus courtes et mieux réparties",
        "Alternance entre temps théoriques et projets pratiques",
        "Intégration du sport quotidien",
        "Réduction des vacances d'été à 6 semaines compensée par des pauses plus régulières"
      ],
      impact: "Amélioration des performances cognitives et réduction de la fatigue",
      cost: "Coût de transition : 500 millions €",
      financing: "Réallocation de ressources existantes"
    },
    {
      id: 5,
      title: "Apprentissage par projets concrets",
      objective: "Développer les compétences pratiques et la motivation des élèves",
      details: [
        "20% du temps scolaire consacré à des projets interdisciplinaires",
        "Partenariats avec des acteurs locaux (entreprises, associations, artisans)",
        "Création dans chaque établissement d'ateliers pratiques (jardins, fablabs, ateliers d'art)",
        "Validation des compétences transversales"
      ],
      impact: "Augmentation de 40% de l'engagement des élèves",
      cost: "800 millions € d'investissement initial",
      financing: "Plan de modernisation des établissements scolaires"
    },
    {
      id: 6,
      title: "Éducation écologique et citoyenne",
      objective: "Former les citoyens de demain aux enjeux environnementaux et sociaux",
      details: [
        "Intégration de l'écologie pratique dans tous les programmes",
        "Éducation aux médias et à l'esprit critique dès le primaire",
        "Apprentissage de la démocratie par des conseils d'élèves avec budget participatif",
        "Service civique écologique et social optionnel intégré au parcours lycéen"
      ],
      impact: "Génération consciente et outillée face aux défis contemporains",
      cost: "400 millions € par an",
      financing: "Budget de l'Éducation nationale et partenariats"
    }
  ],
  conclusion: "L'éducation ne doit pas seulement transmettre des savoirs, mais aussi former des citoyens épanouis, critiques et engagés. Notre approche vise à réconcilier excellence académique et développement personnel, en donnant à chaque enfant les clés de son émancipation intellectuelle et sociale."
};
