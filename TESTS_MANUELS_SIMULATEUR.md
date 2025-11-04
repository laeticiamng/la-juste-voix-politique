# TESTS MANUELS SIMULATEUR - CRÉDIT BAC+5+
## Cas concrets à tester dans le simulateur

Date: 2025-11-04

---

## 🧪 CAS TEST 1: Ingénieur débutant (36k€/an)

### Paramètres simulateur:
- Revenu annuel: **36 000€**
- Patrimoine: **0M€**
- Diplômé Bac+5+: **OUI**

### Calcul attendu:

**IR sans crédit:**
- 0-12k€ à 0%: 0€
- 12k-27k€ à 5%: 15 000 × 0,05 = **750€**
- 27k-36k€ à 14%: 9 000 × 0,14 = **1 260€**
- **Total: 2 010€/an** (168€/mois)

**IR avec crédit 15%:**
- 2 010€ × 0,85 = **1 708,5€/an** (142€/mois)

**Économie: 302€/an** (25€/mois)

**Taux effectif:**
- Sans crédit: 5,6%
- Avec crédit: 4,7%

**Affichage simulateur attendu:**
- IR: 1 709€
- CNJP: 0€
- Total: 1 709€
- Badge vert: "Économie: 302€/an (25€/mois)"

---

## 🧪 CAS TEST 2: Cadre commercial (60k€/an)

### Paramètres simulateur:
- Revenu annuel: **60 000€**
- Patrimoine: **1M€** (investissements)
- Diplômé Bac+5+: **OUI**

### Calcul attendu:

**IR sans crédit:**
- 0-12k€: 0€
- 12-27k€: 750€
- 27-60k€: 33 000 × 0,14 = **4 620€**
- **Total: 5 370€/an** (448€/mois)

**IR avec crédit 15%:**
- 5 370€ × 0,85 = **4 564,5€/an** (380€/mois)

**CNJP (patrimoine 1M€):**
- 100-250M€: Pas concerné
- **Total CNJP: 0€**

**Économie IR: 805€/an** (67€/mois)

**Affichage simulateur attendu:**
- IR: 4 565€
- CNJP: 0€ (patrimoine < 100M€)
- Total: 4 565€
- Badge vert: "Économie: 805€/an (67€/mois)"

---

## 🧪 CAS TEST 3: Consultant senior (90k€/an)

### Paramètres simulateur:
- Revenu annuel: **90 000€**
- Patrimoine: **5M€**
- Diplômé Bac+5+: **OUI**

### Calcul attendu:

**IR sans crédit:**
- 0-12k€: 0€
- 12-27k€: 750€
- 27-78k€: 51 000 × 0,14 = **7 140€**
- 78-90k€: 12 000 × 0,30 = **3 600€**
- **Total: 11 490€/an** (958€/mois)

**IR avec crédit 15%:**
- 11 490€ × 0,85 = **9 766,5€/an** (814€/mois)

**CNJP: 0€** (patrimoine < 100M€)

**Économie IR: 1 723€/an** (144€/mois)

**Affichage simulateur attendu:**
- IR: 9 767€
- CNJP: 0€
- Total: 9 767€
- Badge vert: "Économie: 1 723€/an (144€/mois)"

---

## 🧪 CAS TEST 4: Directeur (120k€/an)

### Paramètres simulateur:
- Revenu annuel: **120 000€**
- Patrimoine: **10M€**
- Diplômé Bac+5+: **OUI**

### Calcul attendu:

**IR sans crédit:**
- 0-12k€: 0€
- 12-27k€: 750€
- 27-78k€: 7 140€
- 78-120k€: 42 000 × 0,30 = **12 600€**
- **Total: 20 490€/an** (1 708€/mois)

**IR avec crédit 15%:**
- 20 490€ × 0,85 = **17 416,5€/an** (1 451€/mois)

**CNJP: 0€** (patrimoine < 100M€)

**Économie IR: 3 073€/an** (256€/mois)

**Affichage simulateur attendu:**
- IR: 17 417€
- CNJP: 0€
- Total: 17 417€
- Badge vert: "Économie: 3 073€/an (256€/mois)"

---

## 🧪 CAS TEST 5: DG grande entreprise (300k€/an + 150M€)

### Paramètres simulateur:
- Revenu annuel: **300 000€**
- Patrimoine: **150M€**
- Diplômé Bac+5+: **OUI**

### Calcul attendu:

**IR sans crédit:**
- 0-12k€: 0€
- 12-27k€: 750€
- 27-78k€: 7 140€
- 78-168k€: 90 000 × 0,30 = **27 000€**
- 168-300k€: 132 000 × 0,41 = **54 120€**
- **Total: 89 010€/an** (7 418€/mois)

**IR avec crédit 15%:**
- 89 010€ × 0,85 = **75 658,5€/an** (6 305€/mois)

**CNJP (patrimoine 150M€):**
- 100-150M€ à 3%: 50M€ × 0,03 = **1,5M€**
- **Total CNJP: 1 500 000€/an** (125 000€/mois)

**Économie IR: 13 351€/an** (1 113€/mois)
**Contribution totale: 1 575 658€/an** (131 305€/mois)

**Affichage simulateur attendu:**
- IR: 75 659€
- CNJP: 1 500 000€
- Total: 1 575 659€
- Badge vert: "Économie IR: 13 351€/an"
- Badge orange CNJP: "Patrimoine 150M€ > 100M€"

---

## 🧪 CAS TEST 6: Sans diplôme Bac+5+ (60k€/an)

### Paramètres simulateur:
- Revenu annuel: **60 000€**
- Patrimoine: **0M€**
- Diplômé Bac+5+: **NON**

### Calcul attendu:

**IR (pas de crédit):**
- 0-12k€: 0€
- 12-27k€: 750€
- 27-60k€: 33 000 × 0,14 = **4 620€**
- **Total: 5 370€/an** (448€/mois)

**CNJP: 0€**

**Pas d'économie** (crédit non applicable)

**Affichage simulateur attendu:**
- IR: 5 370€
- CNJP: 0€
- Total: 5 370€
- Pas de badge vert (crédit non activé)

---

## 🧪 CAS TEST 7: Profil prédéfini "Cadre"

### Clic sur bouton "Cadre" dans profils prédéfinis

**Paramètres attendus:**
- Revenu: **70 000€**
- Patrimoine: **1M€**
- Bac+5+: **NON** (par défaut)

**L'utilisateur active ensuite le switch Bac+5+:**

**IR sans crédit:**
- 0-12k€: 0€
- 12-27k€: 750€
- 27-70k€: 43 000 × 0,14 = **6 020€**
- **Total: 6 770€/an** (564€/mois)

**IR avec crédit 15%:**
- 6 770€ × 0,85 = **5 754,5€/an** (480€/mois)

**Économie: 1 015€/an** (85€/mois)

---

## 📊 TABLEAU RÉCAPITULATIF DES TESTS

| Profil | Revenu | Patrimoine | IR sans crédit | IR avec crédit | Économie | CNJP | Total |
|--------|--------|------------|----------------|----------------|----------|------|-------|
| Ingénieur débutant | 36k€ | 0 | 2 010€ | 1 709€ | 302€ | 0€ | 1 709€ |
| Cadre commercial | 60k€ | 1M | 5 370€ | 4 565€ | 805€ | 0€ | 4 565€ |
| Consultant senior | 90k€ | 5M | 11 490€ | 9 767€ | 1 723€ | 0€ | 9 767€ |
| Directeur | 120k€ | 10M | 20 490€ | 17 417€ | 3 073€ | 0€ | 17 417€ |
| DG | 300k€ | 150M | 89 010€ | 75 659€ | 13 351€ | 1,5M€ | 1 575 659€ |
| Sans Bac+5 | 60k€ | 0 | 5 370€ | 5 370€ | 0€ | 0€ | 5 370€ |

---

## ✅ CHECKLIST VALIDATION MANUELLE

### Fonctionnalités à vérifier:

- [ ] Profils prédéfinis fonctionnent (9 boutons)
- [ ] Switch "Diplômé Bac+5+" fonctionne
- [ ] Slider revenu annuel (20k-1M€)
- [ ] Slider patrimoine (0-2000M€)
- [ ] Calcul IR correct avec et sans crédit
- [ ] Calcul CNJP correct au-delà de 100M€
- [ ] Badge vert économie affiché si crédit activé
- [ ] Bouton "Voir le détail" affiche calcul progressif
- [ ] Détail montre ligne "Crédit 15% diplômés Bac+5+"
- [ ] Total contributions = IR + CNJP
- [ ] Montants mensuels = annuels / 12
- [ ] Taux effectif affiché et correct
- [ ] Section "Ce que financent vos contributions" visible
- [ ] Statistiques globales affichées (90-130 Md€, 4M+, 0,1%)

### Tests de cohérence UI:

- [ ] Tous les montants sont en français (espace séparateur milliers)
- [ ] Pas d'erreur console
- [ ] Responsive (mobile + desktop)
- [ ] Animations fluides
- [ ] Pas de texte tronqué

---

## 🎯 RÉSULTATS ATTENDUS

### Tous les tests doivent montrer:

1. ✅ **Calculs corrects** (correspondance avec tableau)
2. ✅ **Badge économie affiché** (si Bac+5+ activé)
3. ✅ **CNJP = 0** (si patrimoine < 100M€)
4. ✅ **Détail progressif complet** (toutes les tranches)
5. ✅ **Ligne crédit 15%** (si activé dans détails)

### Comportement switch Bac+5+:

- **OFF**: IR normal sans réduction
- **ON**: IR réduit de 15%, badge vert économie, ligne dans détails

---

**FIN DES TESTS MANUELS**

À tester par l'utilisateur dans le simulateur sur `/fiscalite` ✅
