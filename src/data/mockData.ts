// Mock data for our components
import { Assessment, Competency, CompetencyData, Course, PortfolioItem, Recommendation } from "../types";

export const competencyData: CompetencyData = {
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
  ] as Recommendation[]
};

export const assessmentData = {
  assessments: [
    {
      id: "as1",
      title: "Case Study Analysis",
      status: "incomplete",
      dueDate: "April 15, 2025",
      type: "Performance"
    },
    {
      id: "as2",
      title: "Leadership Self-Assessment",
      status: "complete",
      dueDate: "March 30, 2025",
      type: "Quiz"
    }
  ] as Assessment[]
};

export const portfolioData = {
  items: [
    {
      id: "port1",
      title: "School Improvement Plan",
      type: "document",
      date: "March 15, 2025",
      competency: "Decision-Making"
    },
    {
      id: "port2",
      title: "Leadership Workshop Presentation",
      type: "presentation",
      date: "February 22, 2025",
      competency: "Communication"
    }
  ] as PortfolioItem[]
};

// Course data for the courses page
export const coursesData = {
  courses: [
    {
      id: "course1",
      title: "Visionary Leadership for Student-Centered Systems",
      description: "Learn how to craft and communicate a compelling district-wide vision that prioritizes equity, academic excellence, and community engagement.",
      progress: 75,
      tags: ["Required", "Asynchronous"],
      category: "Leadership",
      competency: "Vision & Values",
      imageUrl: "/placeholder.svg"
    },
    {
      id: "course2",
      title: "Strategic Governance and Board Relations",
      description: "Understand the dynamics of working with school boards, managing governance structures, and maintaining focus on long-term student outcomes.",
      progress: 30,
      tags: ["Required", "Live Sessions"],
      category: "Governance",
      competency: "Systems Leadership",
      imageUrl: "/placeholder.svg"
    },
    {
      id: "course3",
      title: "Data-Driven Instructional Leadership",
      description: "Use evidence and analytics to drive instructional decision-making and improve teaching and learning district-wide.",
      progress: 0,
      tags: ["Required", "Asynchronous"],
      category: "Instruction",
      competency: "Decision-Making",
      imageUrl: "/placeholder.svg"
    },
    {
      id: "course4",
      title: "Leading Equitable and Inclusive School Communities",
      description: "Explore frameworks and strategies for closing opportunity gaps and building inclusive environments where all students thrive.",
      progress: 90,
      tags: ["Elective", "Self-Paced"],
      category: "Equity",
      competency: "Instructional Leadership",
      imageUrl: "/placeholder.svg"
    },
    {
      id: "course5",
      title: "Crisis Leadership and Communication",
      description: "Prepare to lead through uncertainty, with practical approaches to crisis communication, staff mobilization, and decision-making under pressure.",
      progress: 45,
      tags: ["Elective", "Live Sessions"],
      category: "Communication",
      competency: "Communication",
      imageUrl: "/placeholder.svg"
    },
    {
      id: "course6",
      title: "Systems Thinking and Organizational Change",
      description: "Apply systems thinking to design sustainable improvements across departments and teams, from HR to curriculum to operations.",
      progress: 10,
      tags: ["Required", "Asynchronous"],
      category: "Leadership",
      competency: "Systems Leadership",
      imageUrl: "/placeholder.svg"
    },
    {
      id: "course7",
      title: "Superintendent Finance & Resource Stewardship",
      description: "Gain a foundational understanding of district budgeting, LCAP alignment, and multi-year financial planning as a superintendent.",
      progress: 5,
      tags: ["Required", "Asynchronous"],
      category: "Finance",
      competency: "Resource Management",
      imageUrl: "/placeholder.svg"
    }
  ] as Course[]
};

// Additional assessment data for the assessments page
export const fullAssessmentsData = {
  assessments: [
    ...assessmentData.assessments,
    {
      id: "as3",
      title: "Case Study: Decision-Making in Action",
      status: "pending",
      dueDate: "April 30, 2025",
      type: "Performance"
    },
    {
      id: "as4",
      title: "Communication Skills Assessment",
      status: "not-started",
      dueDate: "May 15, 2025",
      type: "Quiz"
    },
    {
      id: "as5",
      title: "Leadership Framework Knowledge Check",
      status: "in-progress",
      dueDate: "April 25, 2025",
      type: "Quiz"
    }
  ] as Assessment[]
};

// Additional portfolio data for the portfolio page
export const fullPortfolioData = {
  items: [
    ...portfolioData.items,
    {
      id: "port3",
      title: "Equity Audit Reflection",
      type: "reflection",
      date: "April 1, 2025",
      competency: "Instructional Leadership"
    },
    {
      id: "port4",
      title: "Communication Strategy Proposal",
      type: "project",
      date: "March 10, 2025",
      competency: "Communication"
    },
    {
      id: "port5",
      title: "Staff Development Planning Document",
      type: "artifact",
      date: "February 15, 2025",
      competency: "Instructional Leadership"
    },
    {
      id: "port6",
      title: "Budget Allocation Analysis",
      type: "document",
      date: "January 20, 2025",
      competency: "Decision-Making"
    }
  ] as PortfolioItem[]
};

// Module data for the module detail page
export const moduleData = {
  id: "module1",
  title: "Visionary Leadership for Student-Centered Systems",
  competency: "Vision & Values",
  progress: 65,
  estimatedTime: "4 hours",
  overview: {
    description: "This module helps you develop and articulate a clear, compelling vision for student success that can guide your entire district. Learn to align systems, resources, and stakeholders around shared educational goals.",
    objectives: [
      "Develop a student-centered vision that prioritizes equity and excellence",
      "Align district systems and resources with your vision",
      "Build stakeholder buy-in and community engagement",
      "Measure progress toward vision implementation"
    ],
    importance: "As a superintendent, your vision sets the direction for the entire district. This module provides research-backed frameworks to ensure your vision resonates with stakeholders and leads to meaningful student outcomes."
  },
  activities: [
    {
      id: "act1",
      title: "Understanding Vision vs. Mission",
      type: "video",
      duration: "15 minutes",
      completed: true,
      content: "In this video, Dr. Maria Hernandez explains the critical difference between organizational vision and mission statements, with examples from high-performing school districts."
    },
    {
      id: "act2",
      title: "Equity-Centered Vision Framework",
      type: "slides",
      duration: "25 minutes",
      completed: true,
      content: "This presentation walks through the five components of an equity-centered vision, with real-world examples from California districts that have successfully implemented transformative change."
    },
    {
      id: "act3",
      title: "Stakeholder Engagement Strategies",
      type: "text",
      duration: "20 minutes",
      completed: false,
      content: "Learn practical approaches to engaging diverse stakeholders in vision development and implementation. This reading covers techniques for building authentic community partnerships that sustain vision work."
    },
    {
      id: "act4",
      title: "Vision Implementation Case Study",
      type: "video",
      duration: "30 minutes",
      completed: false,
      content: "Superintendent Dr. James Williams shares how his district translated vision into action through strategic planning, resource alignment, and continuous improvement cycles."
    }
  ],
  reflectionPrompts: [
    "What aspects of your district's current vision are most compelling to stakeholders? Which elements need strengthening?",
    "How would you assess your district's alignment between stated vision and actual resource allocation?",
    "What barriers exist to implementing your vision, and how might you address them?",
    "How will you know if your vision is making a difference for students? What evidence would you look for?"
  ],
  assessment: {
    questions: [
      {
        id: "q1",
        question: "Which of the following is NOT typically part of an effective district vision?",
        options: [
          "Aspirational goals for student outcomes",
          "Detailed operational procedures",
          "Core values that guide decision-making",
          "A focus on equity and excellence"
        ],
        correctAnswer: 1
      },
      {
        id: "q2",
        question: "A superintendent is analyzing district data and finds that the vision statement doesn't align with current resource allocation. The BEST next step would be to:",
        options: [
          "Immediately change the vision to match current spending",
          "Conduct a root cause analysis of the misalignment",
          "Ignore the discrepancy since budgets are separate from vision",
          "Ask the board to create a new vision statement"
        ],
        correctAnswer: 1
      },
      {
        id: "q3",
        question: "When developing a district vision, which stakeholder group should be engaged FIRST?",
        options: [
          "School board members only",
          "Administrative cabinet only",
          "Teachers and staff only",
          "Representatives from multiple stakeholder groups"
        ],
        correctAnswer: 3
      }
    ],
    mastery: 33
  },
  resources: [
    {
      id: "res1",
      title: "Vision Communication Toolkit",
      type: "pdf",
      description: "Templates and examples for communicating your vision to different stakeholder groups",
      downloadUrl: "#"
    },
    {
      id: "res2",
      title: "Measuring Vision Impact - Research Brief",
      type: "pdf",
      description: "Research-based indicators for measuring the impact of your vision on student outcomes",
      downloadUrl: "#"
    },
    {
      id: "res3",
      title: "EdSource: Leading with Vision",
      type: "link",
      description: "Case studies of California superintendents who have successfully implemented transformative visions",
      url: "https://edsource.org"
    },
    {
      id: "res4",
      title: "Vision to Action: Strategic Planning Guide",
      type: "doc",
      description: "Step-by-step guide to translating vision into actionable strategic plans",
      downloadUrl: "#"
    }
  ]
};
