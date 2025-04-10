
// Define our app's types

export interface Competency {
  name: string;
  percentage: number;
  color: string;
}

export type RecommendationType = "article" | "video" | "course" | "assessment";
export type AssessmentStatus = "complete" | "incomplete" | "pending" | "not-started" | "in-progress";
export type PortfolioItemType = "image" | "document" | "presentation" | "project" | "artifact" | "reflection" | "other";

export interface Recommendation {
  id: string;
  title: string;
  description: string;
  type: RecommendationType;
  color: string;
  icon: "lightbulb" | "book" | "check" | "file" | string;
}

export interface Assessment {
  id: string;
  title: string;
  status: AssessmentStatus;
  dueDate: string;
  type?: "Performance" | "Quiz";
}

export interface PortfolioItem {
  id: string;
  title: string;
  type: PortfolioItemType;
  date: string;
  competency?: string;
}

export interface CompetencyData {
  overallProgress: number;
  competencies: Competency[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  progress: number;
  tags: string[];
  category: string;
  competency: string;
  imageUrl?: string;
}

// New types for module detail page
export interface ModuleActivity {
  id: string;
  title: string;
  type: "video" | "text" | "slides";
  duration: string;
  completed: boolean;
  content: string;
}

export interface ModuleAssessmentQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface ModuleResource {
  id: string;
  title: string;
  type: "pdf" | "doc" | "link";
  description: string;
  downloadUrl?: string;
  url?: string;
}

export interface Module {
  id: string;
  title: string;
  competency: string;
  progress: number;
  estimatedTime: string;
  overview: {
    description: string;
    objectives: string[];
    importance: string;
  };
  activities: ModuleActivity[];
  reflectionPrompts: string[];
  assessment: {
    questions: ModuleAssessmentQuestion[];
    mastery: number;
  };
  resources: ModuleResource[];
}
