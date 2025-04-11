import React from 'react';
import { Lightbulb, CheckCircle, BookOpen, FileText } from 'lucide-react';
import { Recommendation } from '../../types';

interface AiRecommendationsProps {
  recommendations: Recommendation[];
}

export const AiRecommendations: React.FC<AiRecommendationsProps> = ({ recommendations }) => {
  // Function to render the appropriate icon
  const renderIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case 'lightbulb':
        return <Lightbulb className={className} />;
      case 'check':
        return <CheckCircle className={className} />;
      case 'book':
        return <BookOpen className={className} />;
      case 'file':
        return <FileText className={className} />;
      default:
        return <Lightbulb className={className} />;
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold mb-6 text-lss-navy">Courses</h2>
        <button className="flex items-center gap-2 text-lss-navy font-medium" onClick={() => window.location.href='/courses'}>
          <BookOpen className="h-5 w-5" />
          View All
        </button>
      </div>
      
      <div className="space-y-4">
        {recommendations.slice(0, 2).map((recommendation) => (
          <div 
            key={recommendation.id}
            className="p-4 rounded-lg flex items-start gap-4 transition-all hover:shadow-lg cursor-pointer bg-white border border-gray-300"
          >
            <div className="bg-gray-200 p-3 rounded-full flex items-center justify-center">
              {renderIcon(recommendation.icon, "h-6 w-6 text-gray-800")}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{recommendation.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{recommendation.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AiRecommendations;
