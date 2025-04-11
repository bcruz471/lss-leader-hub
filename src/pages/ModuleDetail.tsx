import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AppLayout from '../components/layout/AppLayout';
import { Progress } from '../components/ui/progress';
import { Card, CardContent, CardFooter, CardHeader } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';
import { Textarea } from '../components/ui/textarea';
import { Check, Clock, FileText, Film, Link, Download, ExternalLink, Presentation } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { mockData } from '../data/modules';
import { modules } from '../data/modules';

const ModuleDetail = () => {
  const { moduleId } = useParams();
  const [module, setModule] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [completedActivities, setCompletedActivities] = useState({});
  const [reflection, setReflection] = useState('');
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});

  useEffect(() => {
    const fetchModule = async () => {
      try {
        console.log('Fetching module data for moduleId:', moduleId);
        const response = await fetch(`/api/modules/${moduleId}`);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('API response:', data);

        if (!data) {
          throw new Error('Module data is empty');
        }

        setModule(data);
        setCompletedActivities(
          (data.activities || []).reduce(
            (acc, act, index) => ({ ...acc, [index]: act.completed }),
            {}
          )
        );
      } catch (error) {
        console.error('Error fetching module:', error);
        console.log('Attempting to use fallback mock data for moduleId:', moduleId);

        const fallbackModule = modules.find((mod) => mod.id === moduleId);

        if (fallbackModule) {
          console.log('Fallback module data found:', fallbackModule);
          setModule(fallbackModule);
          setCompletedActivities(
            (fallbackModule.activities || []).reduce(
              (acc, act, index) => ({ ...acc, [index]: act.completed }),
              {}
            )
          );
        } else {
          console.log('No fallback module data available for moduleId:', moduleId);
          setModule(null);
        }
      }
    };

    fetchModule();
  }, [moduleId]);

  if (!module) {
    return <div>Loading...</div>;
  }

  // Function to toggle activity completion
  const toggleActivityCompletion = (activityId: string) => {
    setCompletedActivities(prev => ({
      ...prev,
      [activityId]: !prev[activityId]
    }));
  };

  // Function to select an answer for assessment questions
  const selectAnswer = (questionId: string, optionIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  // Calculate overall completion percentage based on completed activities
  const calculateCompletionPercentage = () => {
    if (!module || !module.activities) {
      return 0; // Return 0 if module or activities are undefined
    }
    const completedCount = Object.values(completedActivities).filter(Boolean).length;
    return Math.round((completedCount / module.activities.length) * 100);
  };

  // Content rendering functions for each tab
  const renderOverview = () => (
    <div className="space-y-6">
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold text-lss-navy mb-4">Learning Objectives</h3>
        <ul className="list-decimal list-inside space-y-2 hidden">
          {module.overview.objectives.map((objective, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="bg-lss-blue text-white flex items-center justify-center rounded-full w-6 h-6 mt-0.5 text-sm flex-shrink-0">
                {index + 1}
              </span>
              <span>{objective}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-6 bg-white rounded-lg shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Clock className="text-lss-navy h-5 w-5" />
          <h3 className="text-xl font-semibold text-lss-navy">Estimated Completion Time</h3>
        </div>
        <p className="text-lg">{module.estimatedTime}</p>
      </div>

      <div className="p-6 bg-white rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold text-lss-navy mb-4">Why This Matters</h3>
        <p className="text-gray-700">{module.overview.importance}</p>
      </div>

      <div className="p-6 bg-white rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold text-lss-navy mb-4">About This Module</h3>
        <p className="text-gray-700">{module.overview.description}</p>
      </div>
    </div>
  );

  const renderActivities = () => (
    <div className="space-y-6">
      {module.activities.map((activity, index) => (
        <Card key={activity.id} className="overflow-hidden border-l-4 hover:shadow-md transition-shadow"
              style={{ borderLeftColor: completedActivities[activity.id] ? '#10B981' : '#6B7280' }}>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{activity.title}</h3>
              <div className="flex items-center gap-3">
                <Badge variant="outline" className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {activity.duration}
                </Badge>
                <Badge 
                  variant={activity.type === 'video' ? 'default' : 
                           activity.type === 'slides' ? 'secondary' : 'outline'}
                  className="flex items-center gap-1"
                >
                  {activity.type === 'video' && <Film className="h-3 w-3" />}
                  {activity.type === 'slides' && <Presentation className="h-3 w-3" />}
                  {activity.type === 'text' && <FileText className="h-3 w-3" />}
                  {activity.type.charAt(0).toUpperCase() + activity.type.slice(1)}
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">{activity.content}</p>
          </CardContent>
          <CardFooter className="justify-between">
            <Button 
              variant="outline" 
              className="text-lss-navy hover:text-lss-navy/90" 
              size="sm"
            >
              Start Activity
            </Button>
            <Button 
              onClick={() => toggleActivityCompletion(activity.id)}
              variant={completedActivities[activity.id] ? "default" : "outline"} 
              className={`flex items-center gap-1 ${completedActivities[activity.id] ? "bg-green-600 hover:bg-green-700" : "text-gray-600"}`}
              size="sm"
            >
              <Check className="h-4 w-4" />
              {completedActivities[activity.id] ? "Completed" : "Mark as Complete"}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );

  const renderReflection = () => (
    <div className="space-y-6">
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold text-lss-navy mb-4">Reflection Prompts</h3>
        <ul className="space-y-4">
          {module.reflectionPrompts.map((prompt, index) => (
            <li key={index} className="p-4 border border-gray-200 rounded-lg bg-gray-50">
              <p className="text-gray-700">{prompt}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-6 bg-white rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold text-lss-navy mb-4">Personal Reflections</h3>
        <Textarea 
          placeholder="Type your reflections here based on the prompts above..."
          className="min-h-[200px]"
          value={reflection}
          onChange={(e) => setReflection(e.target.value)}
        />
        <Button className="mt-4 bg-lss-navy hover:bg-lss-navy/90">Save Reflections</Button>
      </div>
    </div>
  );

  const renderAssessment = () => (
    <div className="space-y-6">
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-lss-navy">Assessment Progress</h3>
          <Badge className="bg-lss-blue">{module.assessment.mastery}% Mastery</Badge>
        </div>
        <Progress value={module.assessment.mastery} className="h-2" />
        <p className="mt-2 text-gray-600 text-sm">Complete all questions to demonstrate mastery of module objectives.</p>
      </div>

      <div className="space-y-6">
        {module.assessment.questions.map((question, qIndex) => (
          <Card key={question.id} className="overflow-hidden">
            <CardHeader className="pb-2 bg-gray-50">
              <h3 className="text-lg font-semibold">Question {qIndex + 1}</h3>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="mb-4 font-medium">{question.question}</p>
              <div className="space-y-2">
                {question.options.map((option, oIndex) => (
                  <div 
                    key={oIndex}
                    onClick={() => selectAnswer(question.id, oIndex)}
                    className={`p-3 border rounded-md cursor-pointer transition-colors
                      ${selectedAnswers[question.id] === oIndex ? 'border-lss-blue bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center
                        ${selectedAnswers[question.id] === oIndex ? 'border-lss-blue bg-lss-blue' : 'border-gray-400'}`}>
                        {selectedAnswers[question.id] === oIndex && <Check className="h-3 w-3 text-white" />}
                      </div>
                      <span>{option}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="flex justify-end">
        <Button className="bg-lss-navy hover:bg-lss-navy/90">Submit Assessment</Button>
      </div>
    </div>
  );

  const renderResources = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {module.resources.map(resource => (
        <Card key={resource.id} className="overflow-hidden">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              {resource.type === 'pdf' && (
                <div className="bg-red-100 p-2 rounded-md">
                  <FileText className="h-5 w-5 text-red-600" />
                </div>
              )}
              {resource.type === 'doc' && (
                <div className="bg-blue-100 p-2 rounded-md">
                  <FileText className="h-5 w-5 text-blue-600" />
                </div>
              )}
              {resource.type === 'link' && (
                <div className="bg-purple-100 p-2 rounded-md">
                  <Link className="h-5 w-5 text-purple-600" />
                </div>
              )}
              <h3 className="font-semibold">{resource.title}</h3>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 text-sm">{resource.description}</p>
          </CardContent>
          <CardFooter>
            {(resource.type === 'pdf' || resource.type === 'doc') && (
              <Button variant="outline" className="text-lss-navy hover:text-lss-navy/90" size="sm">
                <Download className="h-4 w-4 mr-1" />
                Download
              </Button>
            )}
            {resource.type === 'link' && (
              <Button variant="outline" className="text-purple-600 hover:text-purple-700" size="sm">
                <ExternalLink className="h-4 w-4 mr-1" />
                Visit Link
              </Button>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Overview':
        return (
          <div>
            <h2>Learning Objectives</h2>
            <ul>
              {module.overview.objectives.map((obj, index) => (
                <li key={index}>{obj}</li>
              ))}
            </ul>
            <p><strong>Estimated Time:</strong> {module.estimatedTime}</p>
            <p><strong>Why This Matters:</strong> {module.overview.whyItMatters}</p>
            <p><strong>About the Module:</strong> {module.overview.about}</p>
          </div>
        );
      case 'Learning Activities':
        return (
          <div>
            {module.activities.map((activity, index) => (
              <div key={index}>
                <h3>{activity.title}</h3>
                <p>{activity.description}</p>
                <p><strong>Type:</strong> {activity.type}</p>
                <p><strong>Time:</strong> {activity.time}</p>
                <button>Start Activity</button>
              </div>
            ))}
          </div>
        );
      case 'Reflection':
        return (
          <div>
            {module.reflectionPrompts.map((prompt, index) => (
              <div key={index}>
                <p>{prompt}</p>
                <textarea placeholder="Write your reflection here..."></textarea>
                <button>Save Reflection</button>
              </div>
            ))}
          </div>
        );
      case 'Assessment':
        return (
          <div>
            <h2>{module.assessment.title}</h2>
            {module.assessment.questions.map((question, index) => (
              <div key={index}>
                <p>{question.text}</p>
                <ul>
                  {question.options.map((option, optIndex) => (
                    <li key={optIndex}>{option}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );
      case 'Resources':
        return (
          <div>
            {module.resources.map((resource, index) => (
              <div key={index}>
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                {resource.type === 'Download' ? (
                  <a href={resource.link} download>Download</a>
                ) : (
                  <a href={resource.link} target="_blank" rel="noopener noreferrer">Visit Link</a>
                )}
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <AppLayout title="Module Detail">
      {/* Main container with padding to ensure proper spacing */}
      <div className="container mx-auto py-6">
        {/* Header Section with full width */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h1 className="text-2xl font-bold text-lss-navy">{module.title}</h1>
          <p className="text-gray-600 mb-4">Competency: {module.competency}</p>
          
          <div className="flex justify-between items-center mt-4 mb-2">
            <span className="text-sm text-gray-600">Progress</span>
            <span className="text-sm font-medium">{calculateCompletionPercentage()}%</span>
          </div>
          <Progress value={calculateCompletionPercentage()} className="h-2" />
        </div>

        {/* Content area with grid layout for clear separation */}
        <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6">
          {/* Sidebar Navigation - Fixed width column */}
          <div className="bg-white rounded-lg shadow-sm p-4 h-fit sticky top-24">
            <Tabs 
              value={activeTab} 
              onValueChange={setActiveTab}
              orientation="vertical"
              className="w-full"
            >
              <TabsList className="flex flex-col w-full bg-transparent space-y-1 items-stretch h-full">
                <TabsTrigger 
                  value="overview"
                  className="w-full justify-start text-left px-4 py-2 data-[state=active]:bg-blue-50 data-[state=active]:text-lss-navy"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger 
                  value="activities"
                  className="w-full justify-start text-left px-4 py-2 data-[state=active]:bg-blue-50 data-[state=active]:text-lss-navy"
                >
                  Learning Activities
                </TabsTrigger>
                <TabsTrigger 
                  value="reflection"
                  className="w-full justify-start text-left px-4 py-2 data-[state=active]:bg-blue-50 data-[state=active]:text-lss-navy"
                >
                  Reflection
                </TabsTrigger>
                <TabsTrigger 
                  value="assessment"
                  className="w-full justify-start text-left px-4 py-2 data-[state=active]:bg-blue-50 data-[state=active]:text-lss-navy"
                >
                  Assessment
                </TabsTrigger>
                <TabsTrigger 
                  value="resources"
                  className="w-full justify-start text-left px-4 py-2 data-[state=active]:bg-blue-50 data-[state=active]:text-lss-navy"
                >
                  Resources
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Main Content Area - Takes remaining space */}
          <div className="bg-transparent">
            {activeTab === 'overview' && renderOverview()}
            {activeTab === 'activities' && renderActivities()}
            {activeTab === 'reflection' && renderReflection()}
            {activeTab === 'assessment' && renderAssessment()}
            {activeTab === 'resources' && renderResources()}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default ModuleDetail;
