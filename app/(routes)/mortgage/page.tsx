import React from 'react';
import MortgagePage from '../../_components/mortgage/MortgagePage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage',
  description:
    'Financial Calculators for retirement, mortgage, annuities and lump sum payments.',
};

const page = () => {
  return <MortgagePage />;
};

export default page;
