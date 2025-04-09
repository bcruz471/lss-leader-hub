
import React from 'react';
import { Progress } from "@/components/ui/progress";

interface CompetencyData {
  name: string;
  percentage: number;
  color: string;
}

interface CompetencyAssessmentProps {
  competencies: CompetencyData[];
  overallProgress: number;
}

export const CompetencyAssessment: React.FC<CompetencyAssessmentProps> = ({ 
  competencies, 
  overallProgress 
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm animate-fade-in">
      <h2 className="text-2xl font-bold mb-6">Competency Assessment</h2>
      
      <div className="space-y-6">
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-700 font-medium">Overall Progress</span>
            <span className="font-bold">{overallProgress}%</span>
          </div>
          <Progress value={overallProgress} className="h-2 bg-gray-200" indicatorClassName="bg-lss-teal" />
        </div>
        
        {competencies.map((competency) => (
          <div key={competency.name}>
            <div className="flex justify-between mb-2">
              <span className="text-gray-700 font-medium">{competency.name}</span>
              <span className="font-bold">{competency.percentage}%</span>
            </div>
            <Progress 
              value={competency.percentage} 
              className="h-2 bg-gray-200" 
              indicatorClassName={`bg-${competency.color}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompetencyAssessment;
