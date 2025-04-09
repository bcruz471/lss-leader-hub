
import React from 'react';
import { FolderOpen, FileText, Image, File } from 'lucide-react';

interface PortfolioItem {
  id: string;
  title: string;
  type: 'document' | 'image' | 'presentation' | 'other';
  date: string;
  thumbnail?: string;
}

interface DigitalPortfolioProps {
  items: PortfolioItem[];
}

export const DigitalPortfolio: React.FC<DigitalPortfolioProps> = ({ items }) => {
  // Function to render appropriate icon based on file type
  const renderItemIcon = (type: string) => {
    switch (type) {
      case 'document':
        return <FileText className="h-6 w-6 text-lss-blue" />;
      case 'image':
        return <Image className="h-6 w-6 text-lss-purple" />;
      case 'presentation':
        return <File className="h-6 w-6 text-lss-orange" />;
      default:
        return <File className="h-6 w-6 text-gray-500" />;
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Digital Portfolio</h2>
        <button className="flex items-center gap-2 text-lss-navy font-medium">
          <FolderOpen className="h-5 w-5" />
          View All
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.slice(0, 2).map((item) => (
          <div 
            key={item.id}
            className="p-4 border border-gray-100 rounded-lg transition-all hover:shadow-md cursor-pointer flex gap-4 items-center"
          >
            <div className="bg-gray-100 h-16 w-16 flex items-center justify-center rounded-md">
              {item.thumbnail ? (
                <img 
                  src={item.thumbnail} 
                  alt={item.title} 
                  className="h-full w-full object-cover rounded-md"
                />
              ) : (
                renderItemIcon(item.type)
              )}
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DigitalPortfolio;
