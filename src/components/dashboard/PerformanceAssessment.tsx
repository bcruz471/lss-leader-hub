
import React from 'react';
import { FileCheck, FileX, Clock } from 'lucide-react';

interface Assessment {
  id: string;
  title: string;
  status: 'complete' | 'incomplete' | 'pending';
  dueDate?: string;
}

interface PerformanceAssessmentProps {
  assessments: Assessment[];
}

export const PerformanceAssessment: React.FC<PerformanceAssessmentProps> = ({ assessments }) => {
  // Function to render status icon
  const renderStatusIcon = (status: string) => {
    switch (status) {
      case 'complete':
        return <div className="bg-green-500 p-3 rounded-full">
          <FileCheck className="h-6 w-6 text-white" />
        </div>;
      case 'incomplete':
        return <div className="bg-lss-blue p-3 rounded-full">
          <FileX className="h-6 w-6 text-white" />
        </div>;
      case 'pending':
        return <div className="bg-amber-500 p-3 rounded-full">
          <Clock className="h-6 w-6 text-white" />
        </div>;
      default:
        return null;
    }
  };

  // Function to get status text
  const getStatusText = (status: string) => {
    switch (status) {
      case 'complete':
        return 'Complete';
      case 'incomplete':
        return 'Incomplete';
      case 'pending':
        return 'Pending';
      default:
        return '';
    }
  };

  // Function to get status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'complete':
        return 'text-green-600';
      case 'incomplete':
        return 'text-lss-blue';
      case 'pending':
        return 'text-amber-600';
      default:
        return '';
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm animate-fade-in">
      <h2 className="text-2xl font-bold mb-6">Performance Assessment</h2>
      
      <div className="space-y-4">
        {assessments.map((assessment) => (
          <div 
            key={assessment.id}
            className="p-4 border border-gray-100 rounded-lg flex items-center gap-4 transition-all hover:shadow-md cursor-pointer"
          >
            {renderStatusIcon(assessment.status)}
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{assessment.title}</h3>
              <p className={`text-sm mt-1 ${getStatusColor(assessment.status)}`}>
                {getStatusText(assessment.status)}
                {assessment.dueDate && ` • Due ${assessment.dueDate}`}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerformanceAssessment;
