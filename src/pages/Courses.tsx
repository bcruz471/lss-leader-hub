
import React, { useState } from 'react';
import AppLayout from '../components/layout/AppLayout';
import { Progress } from '../components/ui/progress';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { coursesData } from '../data/mockData';
import { Course } from '../types';
import { BookOpen, Filter } from 'lucide-react';

const Courses = () => {
  const [filter, setFilter] = useState<string>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  
  const categories = ['all', ...new Set(coursesData.courses.map(course => course.category))];
  const competencies = ['all', ...new Set(coursesData.courses.map(course => course.competency))];
  
  const filteredCourses = coursesData.courses.filter(course => {
    if (filter !== 'all' && categoryFilter !== 'all') {
      return course.competency === filter && course.category === categoryFilter;
    } else if (filter !== 'all') {
      return course.competency === filter;
    } else if (categoryFilter !== 'all') {
      return course.category === categoryFilter;
    }
    return true;
  });

  return (
    <AppLayout title="Courses">
      <div className="grid gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-lss-navy" />
              Available Courses
            </h2>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gray-500" />
                <select 
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="border border-gray-300 rounded-md p-1 text-sm"
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
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="border border-gray-300 rounded-md p-1 text-sm"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>
                      {cat === 'all' ? 'All Categories' : cat}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

const CourseCard = ({ course }: { course: Course }) => {
  const getProgressColor = (progress: number) => {
    if (progress < 25) return 'bg-gray-300';
    if (progress < 50) return 'bg-lss-blue';
    if (progress < 75) return 'bg-lss-teal';
    return 'bg-lss-orange';
  };

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <div className="h-32 bg-gradient-to-r from-lss-navy to-lss-blue flex items-center justify-center p-4">
        <h3 className="text-lg font-bold text-white text-center">{course.title}</h3>
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex flex-wrap gap-2">
          {course.tags.map((tag, index) => (
            <span key={index} className="inline-block bg-lss-purple/20 text-lss-purple text-xs rounded-full px-2 py-1">
              {tag}
            </span>
          ))}
        </div>
      </CardHeader>
      
      <CardContent>
        <p className="text-gray-600 text-sm mb-4">{course.description}</p>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progress</span>
            <span>{course.progress}%</span>
          </div>
          <Progress value={course.progress} className="h-2" />
        </div>
      </CardContent>
      
      <CardFooter>
        <Button className="w-full bg-lss-navy hover:bg-lss-navy/90">Continue Learning</Button>
      </CardFooter>
    </Card>
  );
};

export default Courses;
