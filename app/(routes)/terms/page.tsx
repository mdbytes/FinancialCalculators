import Terms from '@/app/_components/terms/Terms';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Terms',
  description:
    'Financial Calculators for retirement, mortgage, annuities and lump sum payments.',
};

const page = () => {
  return <Terms />;
};

export default page;
