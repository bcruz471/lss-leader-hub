
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
      <h2 className="text-2xl font-bold mb-6">Recommended for You</h2>
      
      <div className="space-y-4">
        {recommendations.map((recommendation) => (
          <div 
            key={recommendation.id}
            className={`p-4 rounded-lg flex items-start gap-4 transition-all hover:shadow-md cursor-pointer bg-${recommendation.color}`}
          >
            <div className="bg-white/20 p-3 rounded-full">
              {renderIcon(recommendation.icon, "h-6 w-6 text-white")}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">{recommendation.title}</h3>
              <p className="text-sm text-white/90 mt-1">{recommendation.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AiRecommendations;
