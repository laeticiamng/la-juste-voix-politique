
export type RevalorisationCategory = {
  title: string;
  icon: string;
  color: string;
  items: RevalorisationItem[];
};

export type RevalorisationItem = {
  title: string;
  revalorisation: string;
};

export const revalorisationsData: RevalorisationCategory[] = [
  {
    title: "MÉTIERS DE LA SANTÉ",
    icon: "heart",
    color: "bg-red-100 text-red-800",
    items: [
      {
        title: "Médecins et internes en médecine",
        revalorisation: "+500 €"
      },
      {
        title: "Infirmiers",
        revalorisation: "+500 €"
      },
      {
        title: "Aides-soignants",
        revalorisation: "+500 €"
      },
      {
        title: "Techniciens de laboratoire",
        revalorisation: "+500 €"
      },
      {
        title: "Étudiants en médecine (externes)",
        revalorisation: "SMIC horaire (5h/½ journée – 10h/jour)"
      },
      {
        title: "Médecins libéraux (généralistes et spécialistes)",
        revalorisation: "Consultation revalorisée à 50 €, 100 % Sécu"
      }
    ]
  },
  {
    title: "MÉTIERS DE L'ÉDUCATION",
    icon: "book",
    color: "bg-blue-100 text-blue-800",
    items: [
      {
        title: "Enseignants (école, collège, lycée)",
        revalorisation: "+500 €"
      },
      {
        title: "ATSEM / Agents de cantine scolaire",
        revalorisation: "+500 €"
      },
      {
        title: "Professeurs contractuels / remplaçants",
        revalorisation: "+500 €"
      }
    ]
  },
  {
    title: "MÉTIERS DU SOIN, DU LIEN, DE LA PETITE ENFANCE",
    icon: "users",
    color: "bg-green-100 text-green-800",
    items: [
      {
        title: "Aides à domicile",
        revalorisation: "+500 €"
      },
      {
        title: "Éducateurs spécialisés",
        revalorisation: "+500 €"
      },
      {
        title: "Assistants sociaux",
        revalorisation: "+500 €"
      },
      {
        title: "Auxiliaires de crèche",
        revalorisation: "+500 €"
      },
      {
        title: "Personnels non médicaux en EHPAD",
        revalorisation: "+500 €"
      },
      {
        title: "Bibliothécaires / animateurs socio-culturels",
        revalorisation: "+500 €"
      }
    ]
  },
  {
    title: "MÉTIERS EN TENSION / SERVICE PUBLIC ESSENTIEL",
    icon: "shield",
    color: "bg-orange-100 text-orange-800",
    items: [
      {
        title: "Pompiers professionnels",
        revalorisation: "+500 €"
      },
      {
        title: "Agents de justice / PJJ / MJPM",
        revalorisation: "+500 €"
      },
      {
        title: "Agents de nettoyage hospitalier / transport sanitaire",
        revalorisation: "+500 €"
      },
      {
        title: "Métiers du funéraire",
        revalorisation: "+500 €"
      },
      {
        title: "Agents territoriaux polyvalents",
        revalorisation: "+500 €"
      }
    ]
  },
  {
    title: "ÉTUDIANTS & STAGIAIRES EN FORMATION",
    icon: "graduation-cap",
    color: "bg-purple-100 text-purple-800",
    items: [
      {
        title: "Étudiants en santé (externes, pharma, maïeutique)",
        revalorisation: "SMIC horaire obligatoire"
      },
      {
        title: "Étudiants en formation (tout secteur) avec stage ou travail",
        revalorisation: "SMIC horaire obligatoire"
      }
    ]
  },
  {
    title: "MÉTIERS POLITIQUES & DE DIRECTION",
    icon: "gavel",
    color: "bg-slate-100 text-slate-800",
    items: [
      {
        title: "Députés, sénateurs, ministres",
        revalorisation: "Plafond de rémunération à 10 000 € nets/mois"
      },
      {
        title: "Présence obligatoire à l'Assemblée",
        revalorisation: "Sous peine de suspension, remplacement, inéligibilité"
      },
      {
        title: "Maires (communes rurales/moyennes)",
        revalorisation: "+750 € nets/mois"
      }
    ]
  }
];

export const revalorisationsSummary = {
  beneficiaries: "Plus de 1,5 million d'agents publics essentiels concernés",
  cost: "8 à 10 milliards €/an, entièrement financé par l'impôt sur les ultra-hauts revenus",
  quote: "Quand on revalorise ceux qui soignent, enseignent, accompagnent, protègent ou transmettent…ce n'est pas une dépense. C'est un investissement dans la République.",
  detail: "Cette revalorisation uniforme de +500€ brut/mois concerne tous les agents publics essentiels : enseignants, soignants hospitaliers, forces de l'ordre, pompiers, magistrats, agents territoriaux, travailleurs sociaux, aides à domicile, bibliothécaires, etc. Un message simple et égalitaire.",
  note: "Ces revalorisations représentent environ 35% des recettes de la réforme fiscale (24-37 Md€/an via IR ultra-hauts revenus). C'est un choix politique fort : ceux qui font tenir la République au quotidien doivent être dignement rémunérés."
};
