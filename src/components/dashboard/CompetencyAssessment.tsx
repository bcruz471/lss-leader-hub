
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CompetencyData } from '@/types';

interface CompetencyAssessmentProps {
  overallProgress: number;
  competencies: {
    name: string;
    percentage: number;
    color: string;
  }[];
}

const CompetencyAssessment = ({ 
  competencies, 
  overallProgress 
}: CompetencyAssessmentProps) => {
  const getProgressColorClass = (color: string) => {
    switch(color) {
      case 'lss-blue': return 'bg-lss-blue';
      case 'lss-teal': return 'bg-lss-teal';
      case 'lss-orange': return 'bg-lss-orange';
      case 'lss-purple': return 'bg-lss-purple';
      default: return 'bg-primary';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Competency Assessment</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium">Overall Progress</span>
            <span className="text-sm font-medium">{overallProgress}%</span>
          </div>
          <Progress value={overallProgress} className="h-3 bg-gray-200" />
        </div>

        <div className="space-y-3">
          {competencies.map((competency, i) => (
            <div key={i} className="space-y-1">
              <div className="flex justify-between">
                <span className="text-sm">{competency.name}</span>
                <span className="text-sm">{competency.percentage}%</span>
              </div>
              <Progress 
                value={competency.percentage} 
                className={`h-2 bg-gray-200 ${getProgressColorClass(competency.color)}`}
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CompetencyAssessment;
