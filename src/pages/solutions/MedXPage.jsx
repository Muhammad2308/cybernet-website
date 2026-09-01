import React, { useEffect } from 'react';
import { SolutionDetailView } from '../../components/SolutionDetailView';
import { SOLUTIONS_DATA } from '../../data/solutionsData';

export const MedXPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "MED-X Sovereign Healthcare EMR Platform | Cybernet Systems";
  }, []);

  return <SolutionDetailView solution={SOLUTIONS_DATA['med-x']} />;
};
