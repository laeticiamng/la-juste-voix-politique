
import React from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { taxBrackets, taxBracketsContent } from '@/lib/tax-brackets';
import { Euro, Percent, ArrowDown, ArrowUp } from 'lucide-react';

const formatAmount = (amount: number | null): string => {
  if (amount === null) return '∞';
  
  if (amount >= 1000) {
    return `${amount / 1000} Md€`;
  }
  return `${amount} M€`;
};

const TaxBracketsTable: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-3xl font-serif font-bold mb-4 text-center">
        {taxBracketsContent.title}
      </h2>
      
      <div className="prose prose-lg mx-auto mb-8 text-gray-700">
        <p>{taxBracketsContent.description}</p>
        <div className="whitespace-pre-line">{taxBracketsContent.supplementaryInfo}</div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-8">
        <Table>
          <TableCaption>{taxBracketsContent.notes}</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-1/3">Patrimoine</TableHead>
              <TableHead className="w-1/6 text-center">Taux</TableHead>
              <TableHead>Niveau de richesse</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {taxBrackets.map((bracket, index) => (
              <TableRow key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                <TableCell className="font-medium">
                  {bracket.max 
                    ? `${formatAmount(bracket.min)} à ${formatAmount(bracket.max)}`
                    : `Plus de ${formatAmount(bracket.min)}`
                  }
                </TableCell>
                <TableCell className="font-bold text-center text-ljv-navy">{bracket.rate}%</TableCell>
                <TableCell>{bracket.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="bg-ljv-navy text-white p-6 rounded-lg shadow mb-8">
        <h3 className="text-xl font-serif font-bold mb-2">Pourquoi ce barème ?</h3>
        <p>
          Ce barème équilibré permet de générer les ressources nécessaires à la revitalisation de nos services publics
          sans pour autant décourager l'initiative ou la création de richesse.
          Il concentre l'effort sur ceux qui peuvent contribuer sans impact sur leur niveau de vie.
        </p>
      </div>
      
      {/* Nouveau barème d'impôt sur le revenu */}
      <div className="mt-12 border-t pt-8">
        <h2 className="text-3xl font-serif font-bold mb-4 text-center">
          Nouvelle Fiscalité du Mérite
        </h2>
        
        <div className="prose prose-lg mx-auto mb-8 text-gray-700">
          <p>
            Notre proposition fiscale repose sur un principe simple : <strong>valoriser le mérite et l'effort</strong>, 
            et non pas pénaliser le travail. Nous proposons un système qui récompense ceux qui créent de la valeur 
            tout en maintenant une contribution juste de ceux qui détiennent des patrimoines importants.
          </p>
        </div>
        
        {/* Grille fiscale du revenu */}
        <div className="bg-white rounded-xl shadow-sm border border-ljv-gold p-6 mb-8">
          <h3 className="text-2xl font-serif font-bold mb-4 text-center flex items-center justify-center gap-2">
            <Euro className="text-ljv-navy" size={28} />
            Grille Fiscale du Revenu
          </h3>
          
          <p className="text-center mb-6 text-gray-700">
            Cette grille vise à soulager les classes moyennes et les talents intermédiaires, 
            maintenir une contribution forte des ultra-riches et introduire davantage de progressivité.
          </p>
          
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/2">Revenu imposable annuel</TableHead>
                  <TableHead className="w-1/2 text-center">Taux marginal appliqué</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="bg-gray-50">
                  <TableCell>Jusqu'à 15 000 €</TableCell>
                  <TableCell className="font-bold text-center text-ljv-navy">0 %</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>15 001 € – 30 000 €</TableCell>
                  <TableCell className="font-bold text-center text-ljv-navy">10 %</TableCell>
                </TableRow>
                <TableRow className="bg-gray-50">
                  <TableCell>30 001 € – 50 000 €</TableCell>
                  <TableCell className="font-bold text-center text-ljv-navy">20 %</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>50 001 € – 85 000 €</TableCell>
                  <TableCell className="font-bold text-center text-ljv-navy">30 %</TableCell>
                </TableRow>
                <TableRow className="bg-gray-50">
                  <TableCell>85 001 € – 150 000 €</TableCell>
                  <TableCell className="font-bold text-center text-ljv-navy">35 %</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>150 001 € – 250 000 €</TableCell>
                  <TableCell className="font-bold text-center text-ljv-navy">40 %</TableCell>
                </TableRow>
                <TableRow className="bg-gray-50">
                  <TableCell>250 001 € – 500 000 €</TableCell>
                  <TableCell className="font-bold text-center text-ljv-navy">45 %</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>500 001 € – 1 000 000 €</TableCell>
                  <TableCell className="font-bold text-center text-ljv-navy">50 %</TableCell>
                </TableRow>
                <TableRow className="bg-gray-50">
                  <TableCell>Plus de 1 000 000 €</TableCell>
                  <TableCell className="font-bold text-center text-ljv-navy">55 %</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <blockquote className="italic text-gray-700 text-lg">
              "Quand tu gagnes 45 000 € par an, tu ne devrais pas être taxé comme si tu étais riche. 
              Mais quand tu gagnes 1 million d'euros par an, contribuer à 55 %, ce n'est pas du vol.
              C'est du respect pour ceux qui font vivre la République au quotidien."
            </blockquote>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <h3 className="text-xl font-serif font-bold mb-3 flex items-center gap-2">
              <Euro className="text-ljv-gold" size={24} />
              Fiscalité du travail
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Diminution des taux marginaux sur les revenus du travail</li>
              <li>Abattements spécifiques pour les créateurs d'entreprise</li>
              <li>Valorisation des revenus issus de l'innovation</li>
              <li>Protection des PME et entreprises familiales</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <h3 className="text-xl font-serif font-bold mb-3 flex items-center gap-2">
              <ArrowUp className="text-ljv-gold" size={24} />
              Fiscalité du patrimoine
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Contribution progressive sur les grands patrimoines</li>
              <li>Distinction entre capital productif et non-productif</li>
              <li>Taxation des revenus financiers passifs</li>
              <li>Imposition des très grandes fortunes dormantes</li>
            </ul>
          </div>
        </div>
        
        {/* Protection contre l'exil fiscal */}
        <div className="bg-white rounded-lg shadow-sm border-ljv-gold border p-6 mb-8">
          <h3 className="text-xl font-serif font-bold mb-4 flex items-center gap-2">
            <ArrowDown className="text-ljv-navy" size={24} />
            Protection contre l'évasion fiscale
          </h3>
          
          <div className="prose prose-lg text-gray-700">
            <p className="mb-4">
              Notre système intègre des mécanismes robustes pour éviter l'exil fiscal des grandes fortunes :
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="list-disc pl-5 space-y-2">
                <li>Imposition différée lors d'un départ à l'étranger pour motifs fiscaux</li>
                <li>Suivi des patrimoines pendant 10 ans après le départ fiscal</li>
                <li>Traçabilité des structures de détention (holdings, trusts, etc.)</li>
              </ul>
              
              <ul className="list-disc pl-5 space-y-2">
                <li>Coopération internationale renforcée pour le partage d'informations</li>
                <li>Dispositifs spécifiques pour les entreprises familiales</li>
                <li>Protection des fondateurs d'entreprises pour éviter la fuite des talents</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-ljv-navy text-white p-6 rounded-lg">
          <h3 className="text-xl font-serif font-bold mb-3">Notre vision</h3>
          <p className="mb-4">
            Une fiscalité équilibrée qui génère les ressources nécessaires à notre modèle social sans décourager 
            l'entrepreneuriat et l'innovation. Nous voulons une France qui :
          </p>
          
          <ul className="grid md:grid-cols-2 gap-3">
            <li className="border border-ljv-gold/30 rounded p-3">Récompense le mérite plutôt que la rente</li>
            <li className="border border-ljv-gold/30 rounded p-3">Valorise l'effort plutôt que la spéculation</li>
            <li className="border border-ljv-gold/30 rounded p-3">Protège ses talents entrepreneuriaux</li>
            <li className="border border-ljv-gold/30 rounded p-3">Maintient sa souveraineté fiscale</li>
          </ul>
        </div>
      </div>
      
      {/* CNJP Section */}
      <div className="mt-16 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-3xl font-serif font-bold mb-4 text-center">
          CNJP – CONTRIBUTION NATIONALE DE JUSTICE PATRIMONIALE
        </h2>
        
        <div className="prose prose-lg mx-auto mb-8 text-gray-700">
          <div className="flex items-start gap-4 mb-6">
            <span className="flex-shrink-0 text-2xl">🎯</span>
            <p><strong>Objectif :</strong> Faire contribuer les 0,1 % les plus riches au redressement national, en proportion de leur patrimoine net financier réel.</p>
          </div>
          
          <p className="mb-6">
            Cette contribution vise uniquement les fortunes dont le patrimoine financier net dépasse 100 millions d'euros. 
            Elle ne concerne ni les classes moyennes, ni les professions libérales, ni les entrepreneurs actifs, 
            ni les résidences principales, ni les biens d'usage courant.
          </p>
          
          <p className="mb-6">
            Elle concerne les personnes physiques dont la fortune est largement héritée, dormante, 
            spéculative ou optimisée, souvent logée dans des sociétés qu'elles détiennent ou contrôlent.
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <div className="flex items-start gap-4 mb-4">
              <span className="flex-shrink-0 text-2xl">🧾</span>
              <h3 className="font-bold text-xl">CLARIFICATION LÉGALE : LA CNJP CIBLE LE PATRIMOINE RÉEL, PAS LES ÉCRANS</h3>
            </div>
            
            <p className="mb-4">
              La CNJP ne taxe pas les sociétés. Elle taxe les personnes qui détiennent ces sociétés. 
              Même si la richesse est « dans une société », elle est fiscalement réattribuée à son propriétaire réel si :
            </p>
            
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>la personne détient directement ou indirectement plus de 25 % d'une société ou d'un groupe de sociétés</li>
              <li>cette société détient un patrimoine financier (titres, actions, obligations, portefeuilles, comptes dormants)</li>
              <li>la personne peut disposer de tout ou partie de cette fortune (distribution, plus-value, holding personnelle)</li>
            </ul>
            
            <p className="mb-4">
              Autrement dit : si une personne détient une société qui détient 500 millions d'euros d'actifs financiers, 
              elle est fiscalement réputée détenir ces 500 millions, et sera donc redevable de la CNJP.
            </p>
            
            <p className="mb-4">Ce principe existe déjà dans :</p>
            
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>l'ISF (via la transparence des sociétés)</li>
              <li>l'IFI (notamment les SCI)</li>
              <li>l'exit tax</li>
              <li>la législation anti-évasion (OCDE, Bercy, règles de substance)</li>
            </ul>
            
            <p>
              Cette clause empêche les très grandes fortunes de se dissimuler derrière des holdings familiales, 
              des sociétés patrimoniales ou des montages d'optimisation.
            </p>
          </div>
          
          <div className="bg-ljv-navy text-white p-6 rounded-lg mb-8">
            <div className="flex items-start gap-4 mb-4">
              <span className="flex-shrink-0 text-2xl">📘</span>
              <h3 className="font-bold text-xl">FORMULATION JURIDIQUE PROPOSÉE POUR LA LOI CNJP</h3>
            </div>
            
            <blockquote className="italic border-l-4 border-ljv-gold pl-4 py-2 mb-4">
              "Est réputée détenir un patrimoine net financier imposable, toute personne physique résidant fiscalement en France, 
              ou contrôlant directement ou indirectement une ou plusieurs entités juridiques (société, holding, trust, etc.) 
              détenant un patrimoine financier dont la valorisation cumulée excède 100 millions d'euros."
            </blockquote>
          </div>
          
          <div className="flex items-start gap-4 mb-4">
            <span className="flex-shrink-0 text-2xl">🎯</span>
            <h3 className="font-bold text-xl">Finalité :</h3>
          </div>
          
          <ul className="list-none space-y-2 mb-4">
            <li>➡️ Ne plus taxer les efforts.</li>
            <li>➡️ Faire contribuer ceux qui détiennent sans créer.</li>
            <li>➡️ Rétablir une justice fiscale réelle, au-delà des façades juridiques.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TaxBracketsTable;
