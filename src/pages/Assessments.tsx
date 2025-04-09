
import React, { useState } from 'react';
import AppLayout from '../components/layout/AppLayout';
import { fullAssessmentsData } from '../data/mockData';
import { Assessment } from '../types';
import { FileCheck, Clock, CheckCircle, AlertCircle, FileText, FilePen, ArrowUpDown } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { Button } from '../components/ui/button';

const statusIcons = {
  "complete": <CheckCircle className="h-5 w-5 text-green-500" />,
  "incomplete": <AlertCircle className="h-5 w-5 text-yellow-500" />,
  "pending": <Clock className="h-5 w-5 text-lss-blue" />,
  "not-started": <FileCheck className="h-5 w-5 text-gray-400" />,
  "in-progress": <Clock className="h-5 w-5 text-lss-orange" />
};

const typeIcons = {
  "Performance": <FilePen className="h-5 w-5 text-lss-purple" />,
  "Quiz": <FileText className="h-5 w-5 text-lss-teal" />
};

const Assessments = () => {
  const [assessments, setAssessments] = useState<Assessment[]>(fullAssessmentsData.assessments);
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [sortConfig, setSortConfig] = useState<{key: keyof Assessment, direction: 'asc' | 'desc'} | null>(null);

  const filteredAssessments = assessments.filter(assessment => {
    if (statusFilter !== 'all' && typeFilter !== 'all') {
      return assessment.status === statusFilter && assessment.type === typeFilter;
    } else if (statusFilter !== 'all') {
      return assessment.status === statusFilter;
    } else if (typeFilter !== 'all') {
      return assessment.type === typeFilter;
    }
    return true;
  });

  const sortedAssessments = [...filteredAssessments].sort((a, b) => {
    if (!sortConfig) return 0;
    
    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];
    
    if (aValue < bValue) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (aValue > bValue) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  const requestSort = (key: keyof Assessment) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  return (
    <AppLayout title="Assessments">
      <div className="grid gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <FileCheck className="h-6 w-6 text-lss-navy" />
              Performance Assessments
            </h2>
            <div className="flex gap-4">
              <select 
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="border border-gray-300 rounded-md p-2 text-sm"
              >
                <option value="all">All Statuses</option>
                <option value="complete">Completed</option>
                <option value="incomplete">Incomplete</option>
                <option value="pending">Pending</option>
                <option value="not-started">Not Started</option>
                <option value="in-progress">In Progress</option>
              </select>
              
              <select 
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="border border-gray-300 rounded-md p-2 text-sm"
              >
                <option value="all">All Types</option>
                <option value="Performance">Performance</option>
                <option value="Quiz">Quiz</option>
              </select>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">Type</TableHead>
                  <TableHead className="cursor-pointer" onClick={() => requestSort('title')}>
                    <div className="flex items-center">
                      Title
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </div>
                  </TableHead>
                  <TableHead className="cursor-pointer" onClick={() => requestSort('status')}>
                    <div className="flex items-center">
                      Status
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </div>
                  </TableHead>
                  <TableHead className="cursor-pointer" onClick={() => requestSort('dueDate')}>
                    <div className="flex items-center">
                      Due Date
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </div>
                  </TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedAssessments.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-4 text-gray-500">
                      No assessments found matching the current filters.
                    </TableCell>
                  </TableRow>
                ) : (
                  sortedAssessments.map((assessment) => (
                    <TableRow key={assessment.id}>
                      <TableCell>
                        {assessment.type && typeIcons[assessment.type]}
                      </TableCell>
                      <TableCell className="font-medium">{assessment.title}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {statusIcons[assessment.status]}
                          <span className="capitalize">{assessment.status.replace('-', ' ')}</span>
                        </div>
                      </TableCell>
                      <TableCell>{assessment.dueDate}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm" className="text-lss-navy hover:text-white hover:bg-lss-navy">
                          {assessment.status === "complete" ? "View" : "Start"}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Assessments;
