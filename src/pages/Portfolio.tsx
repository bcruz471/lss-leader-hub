
import React, { useState } from 'react';
import AppLayout from '../components/layout/AppLayout';
import { fullPortfolioData } from '../data/mockData';
import { PortfolioItem } from '../types';
import { FolderOpen, File, Download, FilePresentation, FileText, Compass, Filter } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';

const typeIcons = {
  "document": <FileText className="h-10 w-10 text-lss-blue" />,
  "presentation": <FilePresentation className="h-10 w-10 text-lss-orange" />,
  "project": <Compass className="h-10 w-10 text-lss-teal" />,
  "artifact": <File className="h-10 w-10 text-lss-purple" />,
  "reflection": <File className="h-10 w-10 text-lss-navy" />,
  "image": <File className="h-10 w-10 text-gray-500" />,
  "other": <File className="h-10 w-10 text-gray-500" />
};

const Portfolio = () => {
  const [competencyFilter, setCompetencyFilter] = useState<string>('all');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  
  const portfolioItems = fullPortfolioData.items;
  const competencies = ['all', ...new Set(portfolioItems.map(item => item.competency).filter(Boolean) as string[])];
  const types = ['all', ...new Set(portfolioItems.map(item => item.type))];
  
  const filteredItems = portfolioItems.filter(item => {
    if (competencyFilter !== 'all' && typeFilter !== 'all') {
      return item.competency === competencyFilter && item.type === typeFilter;
    } else if (competencyFilter !== 'all') {
      return item.competency === competencyFilter;
    } else if (typeFilter !== 'all') {
      return item.type === typeFilter;
    }
    return true;
  });

  return (
    <AppLayout title="Digital Portfolio">
      <div className="grid gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <FolderOpen className="h-6 w-6 text-lss-navy" />
              Your Portfolio
            </h2>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gray-500" />
                <select 
                  value={competencyFilter}
                  onChange={(e) => setCompetencyFilter(e.target.value)}
                  className="border border-gray-300 rounded-md p-2 text-sm"
                >
                  {competencies.map(comp => (
                    <option key={comp} value={comp}>
                      {comp === 'all' ? 'All Competencies' : comp}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gray-500" />
                <select 
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                  className="border border-gray-300 rounded-md p-2 text-sm"
                >
                  {types.map(type => (
                    <option key={type} value={type}>
                      {type === 'all' ? 'All Types' : type.charAt(0).toUpperCase() + type.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <PortfolioCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

const PortfolioCard = ({ item }: { item: PortfolioItem }) => {
  const icon = typeIcons[item.type] || <File className="h-10 w-10 text-gray-500" />;
  
  const getCompetencyColor = (competency?: string) => {
    switch(competency) {
      case 'Instructional Leadership': return 'bg-lss-blue text-white';
      case 'Decision-Making': return 'bg-lss-orange text-white';
      case 'Communication': return 'bg-lss-teal text-white';
      default: return 'bg-gray-200 text-gray-700';
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardHeader className="pb-2 flex flex-row items-center gap-4">
        {icon}
        <div>
          <CardTitle className="text-lg">{item.title}</CardTitle>
          <p className="text-sm text-gray-500">Added: {item.date}</p>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="flex flex-wrap gap-2 mt-2">
          <span className={`inline-block text-xs font-medium rounded-full px-3 py-1 capitalize ${getCompetencyColor(item.competency)}`}>
            {item.competency || 'General'}
          </span>
          <span className="inline-block bg-gray-200 text-gray-700 text-xs font-medium rounded-full px-3 py-1 capitalize">
            {item.type}
          </span>
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm">
          View
        </Button>
        <Button variant="outline" size="sm" className="flex gap-1">
          <Download className="h-4 w-4" />
          Download
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Portfolio;
