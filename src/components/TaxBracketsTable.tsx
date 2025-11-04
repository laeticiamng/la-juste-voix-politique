
import React from 'react';
import TaxBracketsHeader from './tax/TaxBracketsHeader';
import ContributionTable from './tax/ContributionTable';
import BaremeBenefit from './tax/BaremeBenefit';
import MeritFiscalityHeader from './tax/MeritFiscalityHeader';
import IncomeTaxTable from './tax/IncomeTaxTable';
import TaxFeaturesGrid from './tax/TaxFeaturesGrid';
import TaxEvasionProtection from './tax/TaxEvasionProtection';
import TaxVision from './tax/TaxVision';
import CNJPSection from './tax/CNJPSection';
import CNJPUsageSection from './tax/CNJPUsageSection';
import RetirementReformSection from './tax/RetirementReformSection';
import TaxSimulator from './TaxSimulator';
import TechnicalProfessionsTaxCredit from './tax/TechnicalProfessionsTaxCredit';

const TaxBracketsTable: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <TaxBracketsHeader />
      
      {/* Simulateur interactif */}
      <TaxSimulator />
      
      <ContributionTable />
      <BaremeBenefit />
      
      {/* Nouvelle fiscalité du mérite section */}
      <MeritFiscalityHeader />
      <IncomeTaxTable />
      
      {/* Crédit d'impôt professions techniques */}
      <TechnicalProfessionsTaxCredit />
      
      <TaxFeaturesGrid />
      <TaxEvasionProtection />
      <TaxVision />
      
      {/* CNJP Section */}
      <CNJPSection />
      
      {/* Nouvelles sections */}
      <CNJPUsageSection />
      <RetirementReformSection />
    </div>
  );
};

export default TaxBracketsTable;
