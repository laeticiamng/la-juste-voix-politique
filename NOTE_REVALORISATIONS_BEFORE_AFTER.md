# NOTE SUR LES REVALORISATIONS - before-after-data.ts

## Date : 2025-11-04
## Statut : ⚠️ ATTENTION REQUISE

---

## 🔍 ANALYSE

Le fichier **src/lib/before-after-data.ts** contient 95+ profils métiers avec des revalorisations variées.

### Revalorisations actuellement affichées :
- +500€ brut : Aides-soignants, Professeurs écoles, etc.
- +600€ brut : Infirmiers, Professeurs certifiés, Sages-femmes
- +800€ brut : Professeurs agrégés
- +1000€ brut : Internes en médecine

### Budget post-pivot (IR ultra-hauts revenus) :
- **8-10 Md€/an** pour revalorisations (au lieu de 22-32 Md€ avec CNJP)
- Programme indique **+500€/mois** comme revalorisation standard

---

## ❓ QUESTION DE COHÉRENCE

### Option 1 : Uniformiser à +500€ (PLUS COHÉRENT avec budget réduit)
**Pour** :
- Conforme au budget réduit 8-10 Md€
- Message simple : "Tous les métiers publics +500€"
- Évite les jalousies inter-métiers
- Calculs budgétaires plus clairs

**Contre** :
- Perd la nuance métiers critiques
- Internes médecine méritent peut-être +1000€ vu salaires actuels catastrophiques

### Option 2 : Garder différenciation (PLUS NUANCÉ mais complexe)
**Pour** :
- Reflète mieux priorités métiers (santé +600-1000€, éducation +500-800€)
- Reconnaissance difficultés spécifiques (internes, urgentistes)
- Budget 8-10 Md€ peut supporter si ciblé

**Contre** :
- Plus difficile à communiquer
- Risque de critiques "pourquoi eux plus que nous ?"
- Cohérence avec message "+500€" général

---

## 💡 RECOMMANDATION

### Proposition hybride :
1. **Revalorisation BASE = +500€/mois** (1,5M agents publics essentiels)
2. **Bonus PÉNIBILITÉ = +100-200€** pour métiers critiques spécifiques :
   - Internes médecine : +500€ base + 200€ pénibilité = **+700€ total**
   - Infirmiers/sages-femmes : +500€ base + 100€ pénibilité = **+600€ total**
   - Professeurs agrégés : +500€ (pas de bonus pénibilité)

### Impact budgétaire :
```
Base +500€ pour 1,5M agents : 9 Md€/an
Bonus pénibilité 50k agents critiques (+200€) : +120 M€/an
TOTAL : 9,12 Md€/an ✅ DANS BUDGET 8-10 Md€
```

---

## 🎯 ACTION SUGGÉRÉE

**SI vous voulez simplicité maximale** :
→ Uniformiser tous profils à +500€ brut dans before-after-data.ts
→ Message : "Programme réduit mais ÉGALITAIRE : tous +500€"

**SI vous voulez nuance** :
→ Garder +600€ pour infirmiers/sages-femmes (pénibilité reconnue)
→ Réduire internes de +1000€ à +700€ (plus cohérent avec budget)
→ Uniformiser le reste à +500€
→ Message : "Base +500€ + bonus pénibilité ciblé"

---

## 📋 MODIFICATIONS NÉCESSAIRES (si uniformisation choisie)

### Profils à ajuster dans before-after-data.ts :
- Ligne 22-25 : Infirmiers +600€ → +500€
- Ligne 49 : Internes +1000€ → +700€ ou +500€
- Ligne 70-73 : Sages-femmes +600€ → +500€
- Ligne 96-99 : Professeurs certifiés +600€ → +500€
- Ligne 118-123 : Professeurs agrégés +800€ → +500€
- Etc. (vérifier tous les +600€, +800€, +1000€)

### Fichiers à mettre à jour en conséquence :
- src/pages/Revalorisations.tsx (si mentionne +600€ ou +800€)
- Tout texte mentionnant variations revalorisations

---

## ✅ DÉCISION UTILISATEUR REQUISE

**Question** : Voulez-vous :
1. Uniformiser toutes revalorisations à **+500€** ? (simplicité)
2. Garder différenciation **+500€ à +700€** selon pénibilité ? (nuance)
3. Laisser tel quel avec **+500€ à +1000€** ? (ambitieux mais risque incohérence)

---

**Prochaine étape** : Attendre décision utilisateur avant modification before-after-data.ts
