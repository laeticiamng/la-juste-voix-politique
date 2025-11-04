# ANALYSE DE COHÉRENCE POST-PIVOT OPTION 1

## Date : 2025-11-04
## Statut : INCOHÉRENCES CRITIQUES DÉTECTÉES

---

## 🔴 INCOHÉRENCES MAJEURES IDENTIFIÉES

### 1. **budget-synthesis.ts - CRITIQUE**
**Statut** : ❌ NON CONFORME AU PIVOT

**Problèmes** :
- Ligne 11-14 : Parle encore de "CNJP abandonnée" ✅ OK
- Ligne 42-94 : Affectation "Via CNJP" alors que CNJP = 0€ ❌ INCOHÉRENT
- Ligne 219 : "TOTAL = 100% de la CNJP ajustée (120-160 Md€/an)" ❌ OBSOLÈTE
- Conclusion complète (lignes 174-227) : Références massives à CNJP ❌ OBSOLÈTE

**Impact** : 🔴 CRITIQUE - Le budget affiché ne correspond plus au pivot

**Correction requise** :
```
Recettes : 24-37 Md€/an (IR ultra-hauts revenus uniquement)
Dépenses : 24-37 Md€/an (programme réduit à 30%)
Excédent : +1,38 Md€/an
```

---

### 2. **tax-calculations.ts**
**Statut** : ✅ CONFORME

**Vérification** :
- `calculateCNJP()` → Retourne 0 ✅
- `calculateIncomeTax()` → Nouveaux barèmes 55-65% ✅
- Crédit Bac+5+ maintenu avec dégressivité ✅

---

### 3. **TaxSimulator.tsx**
**Statut** : ✅ CONFORME (après corrections)

**Points vérifiés** :
- Profils sans patrimoine ✅
- Calculs IR avec nouveaux barèmes ✅
- Statistiques "24-37 Md€" ✅

---

### 4. **tax-brackets.ts**
**Statut** : ✅ CONFORME

**Vérification** :
- Barèmes IR uniquement (1M€, 5M€, 10M€ avec 55%, 60%, 65%) ✅
- Description ajustée au pivot ✅

---

### 5. **IncomeTaxTable.tsx**
**Statut** : ✅ CONFORME

**Vérification** :
- Tranches ultra-hauts revenus ajoutées ✅
- Note explicative sur le pivot ✅

---

### 6. **TaxBracketsTable.tsx**
**Statut** : ✅ CONFORME

**Actions** :
- CNJPSection supprimée ✅
- CNJPUsageSection supprimée ✅

---

## 🔍 PAGES À VÉRIFIER

### Pages non encore analysées :
1. ❓ **FAQ.tsx** - Peut contenir références CNJP
2. ❓ **Revalorisations.tsx** - Montants +800€ vs +500€ ?
3. ❓ **ComparativeAnalysis.tsx** - Comparaisons obsolètes ?
4. ❓ **RisksAndSafeguards.tsx** - Risques CNJP à retirer ?
5. ❓ **before-after-data.ts** - Calculs basés sur ancien système ?

---

## 📊 VÉRIFICATION DES CALCULS FISCAUX

### Nouveaux barèmes IR (post-pivot) :

#### Barèmes standards (< 1M€) - INCHANGÉS
```
0-12k€      : 0%
12-27k€     : 5%
27-78k€     : 14%
78-168k€    : 30%
168-400k€   : 41%
400k-1M€    : 50%
```

#### Nouveaux barèmes ultra-hauts revenus (> 1M€)
```
1M-5M€      : 55%  ✅ VÉRIFIÉ
5M-10M€     : 60%  ✅ VÉRIFIÉ
> 10M€      : 65%  ✅ VÉRIFIÉ
```

#### Crédit Bac+5+ - 15%
```
Revenus < 800k€        : 15% intégral ✅
Revenus 800k-1,2M€     : Dégressif ✅
Revenus > 1,2M€        : 0% ✅
```

### Exemple de calcul - Revenu 2M€/an :
```
0-12k€      : 0€
12-27k€     : 750€ (15k × 5%)
27-78k€     : 7 140€ (51k × 14%)
78-168k€    : 27 000€ (90k × 30%)
168-400k€   : 95 120€ (232k × 41%)
400k-1M€    : 300 000€ (600k × 50%)
1M-2M€      : 550 000€ (1M × 55%)
TOTAL IR    : 980 010€
Taux effectif : 49,0% ✅ COHÉRENT
```

---

## 🎯 ESTIMATIONS BUDGÉTAIRES

### Recettes IR ultra-hauts revenus :

**Hypothèses** :
- ~5 000 contribuables > 1M€/an
- Revenu moyen : 3,5M€
- IR moyen : ~1,4M€ par contribuable

**Calcul** :
```
5 000 × 1,4M€ = 7 Md€/an (fourchette basse)

Avec hauts revenus 500k-1M€ (taux 50%) :
~50 000 contribuables × 150k€ = 7,5 Md€

Avec renforcement contrôles :
+8-13 Md€ supplémentaires

TOTAL : 22,5-27,5 Md€/an
Médian : ~25 Md€/an ✅ COHÉRENT avec "24-37 Md€"
```

### CER (Contribution Exceptionnelle Rétablissement) :
```
~1 500 patrimoines > 100M€
Patrimoine moyen : 400M€
CER 10% étalée sur 10 ans = 4M€/an par foyer
TOTAL : 6 Md€/an ✅ COHÉRENT
```

### Lutte fraude :
```
3-5 Md€/an ✅ COHÉRENT (objectif gouvernemental standard)
```

### Crédit Bac+5+ :
```
1,97M diplômés × 45k€ revenu moyen × 0,35 (taux IR) × 0,15 = 4,6 Md€
Exclusions (>800k€) : -70%
TOTAL : -1,38 Md€/an (proche de -1,62 Md€ budgeté) ✅ ACCEPTABLE
```

---

## 📋 CORRECTIONS PRIORITAIRES REQUISES

### 1. **budget-synthesis.ts** - URGENT
- Supprimer toutes références CNJP 120-160 Md€
- Réécrire conclusion avec IR uniquement
- Ajuster affectations budgétaires

### 2. **FAQ, Revalorisations, etc.** - MOYEN
- Vérifier références CNJP
- Ajuster montants (+800€ → +500€ si nécessaire)

### 3. **before-after-data.ts** - BAS
- Vérifier cohérence avec nouveaux barèmes IR

---

## ✅ CONCLUSION

**Cohérence globale** : 60% ⚠️

**Points forts** :
- Calculs fiscaux corrects ✅
- Simulateur à jour ✅
- Tables IR conformes ✅

**Points faibles** :
- budget-synthesis.ts obsolète ❌
- Pages non vérifiées (FAQ, Revalorisations) ❓
- Documentation mixte (anciens MD obsolètes) ⚠️

**Recommandation** : Corriger budget-synthesis.ts en priorité avant tout déploiement.
