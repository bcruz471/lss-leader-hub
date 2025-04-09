
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
  icon: string;
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
