import React from 'react';
import { FileCheck, FileX, Clock, AlertCircle } from 'lucide-react';
import { Assessment } from '../../types';

interface PerformanceAssessmentProps {
  assessments: Assessment[];
}

export const PerformanceAssessment: React.FC<PerformanceAssessmentProps> = ({ assessments }) => {
  // Function to render status icon
  const renderStatusIcon = (status: string) => {
    let icon;
    switch (status) {
      case 'complete':
        icon = <FileCheck className="h-6 w-6 text-white" />;
        break;
      case 'incomplete':
        icon = <FileX className="h-6 w-6 text-white" />;
        break;
      case 'pending':
        icon = <Clock className="h-6 w-6 text-white" />;
        break;
      case 'not-started':
        icon = <AlertCircle className="h-6 w-6 text-white" />;
        break;
      case 'in-progress':
        icon = <Clock className="h-6 w-6 text-white" />;
        break;
      default:
        icon = <AlertCircle className="h-6 w-6 text-white" />;
        break;
    }
    return <div className="bg-gray-200 p-3 rounded-full flex items-center justify-center">
      {icon}
    </div>;
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
      <h2 className="text-2xl font-bold mb-6 text-lss-navy">Performance Assessment</h2>
      
      <div className="space-y-4">
        {assessments.map((assessment) => (
          <div 
            key={assessment.id}
            className="p-4 border border-gray-300 rounded-lg flex items-center gap-4 transition-all hover:shadow-lg cursor-pointer bg-white"
          >
            {renderStatusIcon(assessment.status)}
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{assessment.title}</h3>
              <p className={`text-sm mt-1 text-gray-600`}>{assessment.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerformanceAssessment;
