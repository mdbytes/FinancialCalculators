import LumpSumPage from '@/app/_components/lump_sum/LumpSumPage';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Lump Sum',
  description:
    'Financial Calculators for retirement, mortgage, annuities and lump sum payments.',
};

const page = () => {
  return <LumpSumPage />;
};

export default page;
