import React, { useEffect } from 'react';
import { SolutionDetailView } from '../../components/SolutionDetailView';
import { SOLUTIONS_DATA } from '../../data/solutionsData';

export const ShagoPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "SHAGO B2B/B2C Metro eCommerce | Cybernet Systems";
  }, []);

  return <SolutionDetailView solution={SOLUTIONS_DATA.shago} />;
};
