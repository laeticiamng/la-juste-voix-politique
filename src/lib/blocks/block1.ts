import { BlockData } from '../types';

export const block1: BlockData = {
  id: 1,
  title: "Travail & Valeur",
  subtitle: "Reconnaître toutes les formes de contribution",
  description: "Refuser l'idée que seule l'activité salariale mérite reconnaissance. Valoriser tout engagement productif, éducatif, social ou créatif. Reconnaître l'effort, l'intention de progression et l'utilité réelle, même sans contrat de travail formel.",
  measures: [
    "Prime de Progression Individuelle (PPI) - Soutenir financièrement les personnes en transition (formation, reconversion, création de projet utile)",
    "Statut de Contributeur Actif (SCA) - Reconnaître officiellement les engagements non rémunérés mais essentiels",
    "Réforme du RSA : De l'Aide à l'Autonomie - Transformer l'assistanat en accompagnement vers l'emploi avec des aides fléchées pour protéger les enfants",
    "Droit au cumul d'activités et de projets - Permettre le développement d'activités secondaires légales",
    "Compte de Valeur Créée (CVC) - Attribuer des points sociaux pour les actions utiles non salariées",
    "Réseau des Référents Ambition - Accompagner humainement et avec bienveillance chaque citoyen engagé"
  ],
  quotes: [
    "La dignité commence quand on reconnaît ce que chacun peut apporter."
  ],
  detailedMeasures: [
    {
      id: 1,
      title: "Prime de Progression Individuelle (PPI)",
      objective: "Soutenir les individus en phase de transition (formation, reconversion, création de projet utile…).",
      details: [
        "Montant : de 200 à 600 € nets/mois selon le niveau d'investissement",
        "Durée : 6 à 12 mois, renouvelable une fois",
        "Public ciblé : 300 000 bénéficiaires en phase 1"
      ],
      cost: "1,35 milliard €/an",
      financing: "Réaffectation partielle des allocations chômage longue durée + FSE+"
    },
    {
      id: 2,
      title: "Statut de Contributeur Actif (SCA)",
      objective: "Reconnaître les engagements non rémunérés mais essentiels (aidants, parents isolés, bénévoles, créateurs de contenu éducatif ou solidaire…).",
      details: [
        "Création d'un statut officiel avec droits sociaux minimaux",
        "Accès à un guichet unique : Cap Contribution",
        "Public estimé : 2 à 3 millions de personnes"
      ],
      cost: "2 à 3 milliards €/an",
      financing: "Fusion d'aides passives, rationalisation des dispositifs, fonds européens"
    },
    {
      id: 3,
      title: "Droit au cumul d'activités et de projets",
      objective: "Permettre aux salariés, agents publics, ou demandeurs d'emploi de développer une activité secondaire légale.",
      details: [
        "Suppression des blocages réglementaires hors conflits d'intérêt",
        "Déclaration via Cap Contribution",
        "Accompagnement à la création/structuration d'activité"
      ],
      impact: "1 à 2 millions de Français concernés"
    },
    {
      id: 4,
      title: "Compte de Valeur Créée (CVC)",
      objective: "Attribuer des points sociaux à chaque action utile non salariée, traçable, reconnue.",
      details: [
        "Exemples d'actions valorisées : Aide familiale, Création de contenu éducatif, Accompagnement scolaire, Participation citoyenne locale, Bénévolat structuré",
        "Utilisation des points : Accès prioritaire à certains services publics, Réduction sur les transports, la culture, les soins, Accès facilité à des formations ou logements"
      ]
    },
    {
      id: 5,
      title: "Réforme du RSA : De l'Aide à l'Autonomie",
      objective: "Transformer la logique d'assistance en accompagnement vers l'emploi, en garantissant que chaque aide profite réellement aux enfants et encourage le retour à l'activité.",
      details: [
        "🔒 **Principe central** : Personne sur le canapé, personne sur le carreau. On aide pour se relever, pas pour s'enliser.",
        "",
        "**📍 Le problème aujourd'hui**",
        "Le système actuel permet à certaines personnes de vivre uniquement des aides, parfois avec un niveau de vie équivalent ou supérieur à une personne qui travaille à bas salaire. C'est injuste, et ça ne pousse ni vers l'emploi, ni vers la responsabilité. En plus, une partie des aides destinées aux enfants ne profite même pas aux enfants.",
        "",
        "**💡 La philosophie La Juste Voix**",
        "On maintient la solidarité – mais on la rend utile. On passe d'une logique \"Voilà de l'argent, débrouille-toi\" à une logique \"Voilà un avenir, on t'accompagne à le construire.\"",
        "",
        "---",
        "",
        "**🎯 Les 4 piliers de la réforme**",
        "",
        "**1. Aides fléchées pour les enfants**",
        "• Toutes les aides destinées aux enfants sont fléchées : fournitures scolaires, vêtements, activités, alimentation, santé, livres",
        "• Impossible d'acheter alcool, tabac ou produits non-essentiels avec l'argent des enfants",
        "• Chaque euro destiné à un enfant sert à l'enfant",
        "",
        "**2. Contrat d'Engagement Emploi progressif**",
        "• Semaine 1 à 4 : 24 heures/semaine (mise en route + garde et transport réglés)",
        "• Semaine 5 à 12 : 30 heures/semaine (stabilisation du rythme)",
        "• À partir de la semaine 13 : 35 heures/semaine (travail réel, activité réelle, dignité retrouvée)",
        "• Même droits, mêmes devoirs",
        "",
        "**3. Levée des blocages avant d'exiger**",
        "• Pass crèche ou cantine",
        "• Pass mobilité (transport, vélo, permis)",
        "• Accompagnement santé",
        "• Guichet unique administratif",
        "➡️ On supprime les excuses réelles puis on exige comme tout salarié",
        "",
        "**4. Système de bonus et sanctions**",
        "",
        "*Bonus de maintien :*",
        "• +300 € après 4 mois d'activité continue à temps plein (35h)",
        "• +600 € après 7 mois d'activité continue à temps plein",
        "➡️ On récompense l'effort, pas la déclaration d'intention",
        "",
        "*Sanctions progressives en cas de refus injustifié :*",
        "• 1er refus : -30% RSA",
        "• 2e refus : -60% RSA",
        "• 3e refus : suspension",
        "➡️ La solidarité n'est pas un droit sans devoir"
      ],
      impact: "Pour la personne : Un travail, une formation, de vraies compétences, un avenir autonome. Pour les enfants : Meilleure santé, réussite scolaire, avenir sécurisé. Pour la société : Moins de pauvreté durable, plus de contribution, investissement qui rapporte.",
      cost: "2,7-3,9 milliards €/an",
      financing: "Budget IR ultra-hauts revenus + optimisation du RSA actuel + économies sur les aides détournées",
      aidesTransformation: [
        {
          id: "1️⃣",
          name: "RSA (Revenu de Solidarité Active)",
          before: "Une somme d'argent versée chaque mois, sans activité réaliste exigée. On peut rester plusieurs années sans jamais travailler ni se former. Le système entretient l'inactivité et la dépendance.",
          after: "Le RSA devient un tremplin vers l'emploi. La personne signe un Contrat d'Engagement Emploi : dès la 1ère semaine → activité encadrée, en 13 semaines → 35h hebdomadaires comme tout Français salarié. On récompense la continuité, on sanctionne les refus injustifiés.",
          impact: "Le RSA redevient une étape, pas une finalité"
        },
        {
          id: "2️⃣",
          name: "Aide au logement (APL/ALF)",
          before: "Aide versée même si la personne ne fait aucun effort pour trouver un emploi. Cela fige les gens dans leur situation. Les bailleurs doivent souvent gérer les retards de paiement.",
          after: "L'aide au logement est maintenue tant que l'activité prévue dans le contrat est réellement suivie. Pas d'engagement → aide réduite progressivement. La société aide ceux qui avancent.",
          impact: "Le logement devient le socle du retour à l'emploi"
        },
        {
          id: "3️⃣",
          name: "Allocations familiales",
          before: "Versées automatiquement pour chaque enfant, sans condition sur l'école ou la santé. Parfois utilisées pour tout sauf l'enfant.",
          after: "La base reste garantie. Mais un bonus s'ajoute quand l'enfant va en cours régulièrement, fait ses bilans de santé, participe à des activités sportives ou culturelles.",
          impact: "L'argent accompagne les efforts éducatifs et la santé"
        },
        {
          id: "4️⃣",
          name: "Allocation de soutien familial (ASF)",
          before: "Somme versée parce que l'autre parent n'assume pas son rôle. Mais aucune action n'est menée pour récupérer la pension due par le parent défaillant.",
          after: "L'État avance toujours la pension (pour ne pas punir l'enfant), et se charge lui-même de la récupérer auprès du parent manquant. De plus, une partie de l'aide est fléchée cantine / transport scolaire.",
          impact: "On soutient le parent présent, on responsabilise l'autre"
        },
        {
          id: "5️⃣",
          name: "PAJE (Jeune enfant)",
          before: "De l'argent liquide pour un bébé. Mais rien ne garantit qu'il est utilisé pour lait, couches, vêtements, puériculture.",
          after: "La PAJE devient un Pass Bébé : produits vraiment pour le bébé, aucune dépense détournée, soutien direct au bon endroit.",
          impact: "L'enfant est au centre de l'aide"
        },
        {
          id: "6️⃣",
          name: "Allocation de rentrée scolaire",
          before: "Un versement souvent détourné : téléphones, cigarettes, jeux vidéos… Pendant que l'enfant arrive sans matériel à l'école.",
          after: "L'aide prend la forme de coupons fléchés : papeterie, livres, vêtements scolaires, fournitures de sport. Utilisation contrôlée par un simple scan.",
          impact: "La rentrée devient une vraie chance"
        },
        {
          id: "7️⃣",
          name: "Prime de Noël",
          before: "Argent distribué la veille des fêtes : alcool, fêtes improvisées, aucun bénéfice durable pour l'enfant.",
          after: "La prime devient un Bon Noël Enfant : jouets éducatifs, livres, vêtements d'hiver, activités culturelles.",
          impact: "On remet du sens à la solidarité de fin d'année"
        },
        {
          id: "8️⃣",
          name: "Prime d'activité",
          before: "Versée dès les premiers jours d'un travail… Puis diminuée ou supprimée trop vite → peur de perdre → retour à l'inactivité.",
          after: "Elle devient une prime de maintien dans l'emploi : +300 € après 4 mois tenus à temps plein, +600 € après 7 mois.",
          impact: "La personne a intérêt à continuer"
        }
      ]
    },
    {
      id: 6,
      title: "Référents Ambition pour l'emploi et la contribution",
      objective: "Offrir à chaque citoyen en recherche d'emploi ou en transition un suivi humain et bienveillant.",
      details: [
        "10 000 référents formés spécialisés dans l'accompagnement professionnel",
        "Ratio : 1 référent pour 300 bénéficiaires (RSA, SCA, PPI)",
        "Mission : accompagnement vers l'emploi, suivi des contrats d'engagement, orientation, validation des parcours",
        "",
        "⚠️ À distinguer des Référents Projet & Ambition dans les établissements scolaires (voir Bloc 4)"
      ],
      cost: "400 millions €/an",
      financing: "Inclus dans le budget RSA réformé (2,7-3,9 Md€/an)"
    }
  ],
  conclusion: "Proposer une nouvelle vision du travail : moins statique et plus évolutive, moins stigmatisante et plus humaine, moins centrée sur le contrat et plus ouverte à la contribution. Transformer l'idée même d'utilité sociale et proposer un État qui reconnaît, soutient et encourage, plutôt qu'un État qui juge, classe et abandonne.\n\n**💰 Note budgétaire - Cap Contribution :**\nLa plateforme nationale Cap Contribution (guichet unique pour SCA, PPI, CVC, cumul d'activités) nécessite un investissement initial de 80 millions € et un budget de maintenance de 30 millions €/an, financé par le budget de l'État (transformation numérique).\n\n**Synthèse budgétaire Bloc 1 :**\n• RSA réformé (accompagnement emploi, Pass mobilité, crèche, Référents Ambition) : 2,7-3,9 Md€/an → **Financé par budget IR renforcé**\n• PPI : 1,35 Md€/an → Réaffectation allocations chômage + FSE+\n• SCA : 2-3 Md€/an → Fusion aides passives + rationalisation + fonds européens\n• Cap Contribution : 0,08 Md€ (initial) + 0,03 Md€/an → Budget État (transformation numérique)\n**Total général : 6,13-8,26 Md€/an** dont **2,7-3,9 Md€/an financés par IR ultra-hauts revenus**"
};
