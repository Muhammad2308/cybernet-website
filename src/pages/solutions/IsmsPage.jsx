import React, { useEffect } from 'react';
import { SolutionDetailView } from '../../components/SolutionDetailView';
import { SOLUTIONS_DATA } from '../../data/solutionsData';

export const IsmsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "ISMS SmartSchool Academic Management System | Cybernet Systems";
  }, []);

  return <SolutionDetailView solution={SOLUTIONS_DATA.isms} />;
};
