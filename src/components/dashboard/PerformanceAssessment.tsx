
import React from 'react';
import { FileCheck, FileX, Clock, AlertCircle } from 'lucide-react';
import { Assessment } from '../../types';

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
      case 'not-started':
        return <div className="bg-gray-400 p-3 rounded-full">
          <AlertCircle className="h-6 w-6 text-white" />
        </div>;
      case 'in-progress':
        return <div className="bg-blue-500 p-3 rounded-full">
          <Clock className="h-6 w-6 text-white" />
        </div>;
      default:
        return <div className="bg-gray-400 p-3 rounded-full">
          <AlertCircle className="h-6 w-6 text-white" />
        </div>;
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
      case 'not-started':
        return 'Not Started';
      case 'in-progress':
        return 'In Progress';
      default:
        return 'Unknown';
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
      case 'not-started':
        return 'text-gray-600';
      case 'in-progress':
        return 'text-blue-600';
      default:
        return 'text-gray-600';
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
