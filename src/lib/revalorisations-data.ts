
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
        title: "Médecins internes",
        revalorisation: "+1 000 €"
      },
      {
        title: "Infirmiers",
        revalorisation: "+600 €"
      },
      {
        title: "Aides-soignants",
        revalorisation: "+500 €"
      },
      {
        title: "Techniciens de laboratoire",
        revalorisation: "+400 €"
      },
      {
        title: "Étudiants en médecine (externes)",
        revalorisation: "SMIC horaire (5h/½ journée – 10h/jour)"
      },
      {
        title: "Médecins généralistes (libéraux)",
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
        revalorisation: "+500 à +600 €"
      },
      {
        title: "ATSEM / Agents de cantine scolaire",
        revalorisation: "+400 €"
      },
      {
        title: "Professeurs contractuels / remplaçants",
        revalorisation: "+600 €"
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
        revalorisation: "+550 €"
      },
      {
        title: "Assistants sociaux",
        revalorisation: "+550 €"
      },
      {
        title: "Auxiliaires de crèche",
        revalorisation: "+500 €"
      },
      {
        title: "Personnels non médicaux en EHPAD",
        revalorisation: "+450 €"
      },
      {
        title: "Bibliothécaires / animateurs socio-culturels",
        revalorisation: "+450 €"
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
        revalorisation: "+600 €"
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
        revalorisation: "+400 €"
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
  beneficiaries: "Plus de 4 millions de Français concernés dès la première année",
  cost: "45 milliards €/an, entièrement financé par la CNJP",
  quote: "Quand on revalorise ceux qui soignent, enseignent, accompagnent, protègent ou transmettent…ce n'est pas une dépense. C'est un investissement dans la République."
};
