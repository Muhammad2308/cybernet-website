import React, { useEffect } from 'react';
import { SolutionDetailView } from '../../components/SolutionDetailView';
import { SOLUTIONS_DATA } from '../../data/solutionsData';

export const RidoPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "RIDO Intelligent Mobility & Fleet Platform | Cybernet Systems";
  }, []);

  return <SolutionDetailView solution={SOLUTIONS_DATA.rido} />;
};
