import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';
import { Progress } from '../components/ui/progress';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Course } from '../types';
import { BookOpen, Filter, Info } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from '@/components/ui/badge';
import { modules } from '../data/modules';

const Courses = () => {
  const [filter, setFilter] = useState<string>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  const categories = ['all', ...new Set(modules.map(module => module.competency))];
  const competencies = ['all', ...new Set(modules.map(module => module.competency))];

  const filteredModules = modules.filter(module => {
    if (filter !== 'all' && categoryFilter !== 'all') {
      return module.competency === filter && module.competency === categoryFilter;
    } else if (filter !== 'all') {
      return module.competency === filter;
    } else if (categoryFilter !== 'all') {
      return module.competency === categoryFilter;
    }
    return true;
  });

  const requiredModules = filteredModules.filter(module => module.tags.includes('Required'));
  const electiveModules = filteredModules.filter(module => module.tags.includes('Elective'));

  return (
    <AppLayout title="Courses">
      <div className="grid gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-lss-navy" />
              Superintendent Readiness Courses
            </h2>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gray-500" />
                <select 
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="border border-gray-300 rounded-md p-1 text-sm"
                >
                  {competencies.map((comp, index) => (
                    <option key={index} value={comp}>
                      {comp === 'all' ? 'All Competencies' : comp}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gray-500" />
                <select 
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="border border-gray-300 rounded-md p-1 text-sm"
                >
                  {categories.map((cat, index) => (
                    <option key={index} value={cat}>
                      {cat === 'all' ? 'All Categories' : cat}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          {requiredModules.length > 0 && (
            <>
              <h3 className="text-lg font-semibold mb-4 text-lss-navy border-b pb-2">Required Modules</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {requiredModules.map((module) => (
                  <CourseCard key={module.id} course={module} />
                ))}
              </div>
            </>
          )}
          
          {electiveModules.length > 0 && (
            <>
              <h3 className="text-lg font-semibold mb-4 text-lss-navy border-b pb-2">Elective Modules</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {electiveModules.map((module) => (
                  <CourseCard key={module.id} course={module} />
                ))}
              </div>
            </>
          )}
          
          {filteredModules.length === 0 && (
            <div className="text-center py-10">
              <p className="text-gray-500">No modules match your filter criteria.</p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setFilter('all');
                  setCategoryFilter('all');
                }}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
};

const getCourseColorScheme = (course: Course) => {
  const competency = course.competency;
  
  if (competency === 'Vision & Values') {
    return 'from-blue-600 to-blue-400';
  } else if (competency === 'Systems Leadership') {
    return 'from-purple-600 to-purple-400';
  } else if (competency === 'Decision-Making') {
    return 'from-sky-600 to-sky-400';
  } else if (competency === 'Instructional Leadership') {
    return 'from-amber-500 to-amber-400';
  } else if (competency === 'Communication') {
    return 'from-red-600 to-red-400';
  } else if (competency === 'Resource Management') {
    return 'from-gray-700 to-gray-500';
  }
  
  return 'from-lss-navy to-lss-blue';
};

const getTagTooltip = (tag: string) => {
  if (tag === 'Asynchronous') {
    return 'Complete at your own pace with video lessons, readings, and assignments';
  } else if (tag === 'Live Sessions') {
    return 'Includes scheduled virtual meetings with facilitators and cohort members';
  } else if (tag === 'Self-Paced') {
    return 'Entirely self-guided with no deadlines; complete as needed';
  } else if (tag === 'Required') {
    return 'Mandatory for program completion';
  } else if (tag === 'Elective') {
    return 'Optional course based on your interests and goals';
  }
  return '';
};

const CourseCard = ({ course }: { course: Course }) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <div className={`h-32 bg-gradient-to-r ${getCourseColorScheme(course)} flex items-center justify-center p-4`}>
        <h3 className="text-lg font-bold text-white text-center">{course.title}</h3>
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex flex-wrap gap-2">
          <TooltipProvider>
            {course.tags.map((tag, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <Badge 
                    variant="outline" 
                    className={`
                      inline-flex items-center gap-1 border 
                      ${tag === 'Required' ? 'bg-blue-100 text-blue-700 border-blue-200' : 
                        tag === 'Elective' ? 'bg-purple-100 text-purple-700 border-purple-200' : 
                        'bg-gray-100 text-gray-700 border-gray-200'}
                    `}
                  >
                    {tag}
                    <Info className="h-3 w-3" />
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{getTagTooltip(tag)}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
          <Badge className="bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-100">
            {course.competency}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent>
        <p className="text-gray-600 text-sm mb-4">{course.description}</p>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progress</span>
            <span>{course.progress}%</span>
          </div>
          <Progress value={course.progress} className={`h-2 ${course.progress > 0 ? 'bg-lss-blue' : 'bg-gray-200'}`} />
        </div>
      </CardContent>
      
      <CardFooter>
        <Link to={`/modules/${course.id}`} className="w-full">
          <Button className="w-full bg-lss-navy hover:bg-lss-navy/90">
            Continue Learning
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default Courses;
