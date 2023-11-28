import React from 'react';
import RetirementPage from '../../_components/retirement/RetirementPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Retirement',
  description:
    'Financial Calculators for retirement, mortgage, annuities and lump sum payments.',
};

const page = () => {
  return <RetirementPage />;
};

export default page;
