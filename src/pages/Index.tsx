
import React from 'react';
import AppLayout from '../components/layout/AppLayout';
import CompetencyAssessment from '../components/dashboard/CompetencyAssessment';
import AiRecommendations from '../components/dashboard/AiRecommendations';
import PerformanceAssessment from '../components/dashboard/PerformanceAssessment';
import DigitalPortfolio from '../components/dashboard/DigitalPortfolio';
import { competencyData, recommendationData, assessmentData, portfolioData } from '../data/mockData';

const Index = () => {
  return (
    <AppLayout title="Leading for Student Success (LSS) Program">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CompetencyAssessment 
          competencies={competencyData.competencies}
          overallProgress={competencyData.overallProgress}
        />
        
        <AiRecommendations 
          recommendations={recommendationData.recommendations}
        />

        <PerformanceAssessment 
          assessments={assessmentData.assessments}
        />
        
        <DigitalPortfolio 
          items={portfolioData.items}
        />
      </div>
    </AppLayout>
  );
};

export default Index;
