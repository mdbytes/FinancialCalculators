import AnnuityValuation from '@/app/_components/annuity/AnnuityValuation';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Annuity',
  description:
    'Financial Calculators for retirement, mortgage, annuities and lump sum payments.',
};

const page = () => {
  return <AnnuityValuation />;
};

export default page;
