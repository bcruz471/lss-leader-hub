import React from 'react';
import AppLayout from '../components/layout/AppLayout';
import CompetencyAssessment from '../components/dashboard/CompetencyAssessment';
import AiRecommendations from '../components/dashboard/AiRecommendations';
import PerformanceAssessment from '../components/dashboard/PerformanceAssessment';
import DigitalPortfolio from '../components/dashboard/DigitalPortfolio';
import { mockData as modules } from '../data/modules';

const Index = () => {
  const competencyData = {
    competencies: modules.map(module => ({
      name: module.competency,
      percentage: module.progress,
      color: "#000000" // Default color, replace with actual logic if available
    })),
    overallProgress: modules.reduce((acc, module) => acc + module.progress, 0) / modules.length,
  };

  const recommendationData = {
    recommendations: modules.map(module => ({
      id: module.id,
      title: module.title,
      description: module.description,
      type: "article" as const, // Valid RecommendationType
      color: "#000000", // Default color, replace with actual logic if available
      icon: "lightbulb" // Default icon, replace with actual logic if available
    })),
  };

  const assessmentData = {
    assessments: modules.map(module => ({
      id: module.id,
      title: module.assessment.title,
      status: "pending" as const, // Valid AssessmentStatus
      dueDate: "2025-12-31", // Default due date, replace with actual logic if available
      type: "Quiz" as const // Valid type for Assessment
    })),
  };

  const portfolioData = {
    items: modules.map(module => ({
      id: module.id,
      title: module.title,
      type: "project" as const, // Valid PortfolioItemType
      date: "2025-01-01", // Default date, replace with actual logic if available
      competency: module.competency
    })),
  };

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
