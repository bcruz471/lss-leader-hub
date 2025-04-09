
// Mock data for our components

export const competencyData = {
  overallProgress: 60,
  competencies: [
    { name: "Instructional Leadership", percentage: 80, color: "lss-blue" },
    { name: "Decision-Making", percentage: 50, color: "lss-blue" },
    { name: "Communication", percentage: 70, color: "lss-teal" }
  ]
};

export const recommendationData = {
  recommendations: [
    {
      id: "rec1",
      title: "Understanding Data-Driven Decision Making",
      description: "Learn how to leverage data for more effective leadership decisions.",
      type: "course",
      color: "lss-purple",
      icon: "lightbulb"
    },
    {
      id: "rec2",
      title: "Effective Team Communication",
      description: "Improve your communication skills to better lead your team.",
      type: "course",
      color: "lss-orange",
      icon: "book"
    }
  ]
};

export const assessmentData = {
  assessments: [
    {
      id: "as1",
      title: "Case Study Analysis",
      status: "incomplete",
      dueDate: "April 15, 2025"
    },
    {
      id: "as2",
      title: "Leadership Self-Assessment",
      status: "complete",
      dueDate: "March 30, 2025"
    }
  ]
};

export const portfolioData = {
  items: [
    {
      id: "port1",
      title: "School Improvement Plan",
      type: "document",
      date: "March 15, 2025",
    },
    {
      id: "port2",
      title: "Leadership Workshop Presentation",
      type: "presentation",
      date: "February 22, 2025",
    }
  ]
};
