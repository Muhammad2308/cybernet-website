import React, { useEffect } from 'react';
import { SolutionDetailView } from '../../components/SolutionDetailView';
import { SOLUTIONS_DATA } from '../../data/solutionsData';

export const SokIpcrsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "SOK-IPCRS Intelligent Policing & Crime Registry | Cybernet Systems";
  }, []);

  return <SolutionDetailView solution={SOLUTIONS_DATA['sok-ipcrs']} />;
};
