import axios from 'axios';

export const fetchModules = async () => {
  try {
    const response = await axios.get('/api/modules');
    return response.data;
  } catch (error) {
    console.error('Error fetching modules:', error);
    return [];
  }
};

export const modules = [
    // Existing modules...
  
    {
      id: "instructional-leadership",
      title: "Instructional Leadership for Equity",
      competency: "Instructional Leadership",
      estimatedTime: "4 hours",
      progress: 0,
      description: "Learn strategies for leading instructional excellence and fostering a culture of continuous improvement.",
      tags: ["Required", "Asynchronous"],
      category: "Leadership",
      overview: {
        objectives: [
          "Develop and support intellectually rigorous and coherent systems of curriculum, instruction, and assessment.",
          "Promote the use of data-driven decision-making to improve teaching and learning.",
          "Foster a culture of continuous improvement among staff.",
        ],
        whyItMatters:
          "Instructional leadership is pivotal in ensuring that all students have access to high-quality education. Superintendents must champion effective teaching strategies and curricula that meet diverse student needs.",
        about:
          "This module delves into strategies for leading instructional excellence, utilizing data to inform practices, and creating professional learning communities.",
      },
      activities: [
        {
          id: "data-driven-decision-making",
          title: "Data-Driven Decision Making",
          description:
            "Explore methods for collecting and analyzing student performance data to inform instructional strategies.",
          type: "Workshop",
          time: "60 minutes",
          completed: false,
        },
        {
          id: "building-professional-learning-communities",
          title: "Building Professional Learning Communities",
          description:
            "Learn how to establish and sustain collaborative teams focused on improving teaching practices.",
          type: "Interactive Session",
          time: "45 minutes",
          completed: false,
        },
        {
          id: "curriculum-alignment-techniques",
          title: "Curriculum Alignment Techniques",
          description:
            "Understand approaches to ensure curriculum coherence across grades and subjects.",
          type: "Seminar",
          time: "50 minutes",
          completed: false,
        },
      ],
      reflectionPrompts: [
        "How can data be effectively used to drive instructional improvements in your district?",
        "What steps can you take to foster a culture of continuous learning among your staff?",
        "How do you ensure that instructional strategies are equitable and inclusive?",
      ],
      assessment: {
        title: "Instructional Leadership Competency Check",
        questions: [
          {
            text: "What is a key benefit of establishing Professional Learning Communities?",
            options: [
              "Reducing teacher workload",
              "Standardizing teaching methods",
              "Enhancing collaborative professional development",
              "Implementing new technology",
            ],
            correctAnswer: 2,
          },
          {
            text: "Which of the following is essential for data-driven decision making?",
            options: [
              "Collecting data annually",
              "Using multiple data sources",
              "Focusing solely on standardized test scores",
              "Relying on anecdotal evidence",
            ],
            correctAnswer: 1,
          },
          {
            text: "Curriculum alignment primarily aims to:",
            options: [
              "Ensure consistency across classrooms",
              "Match teaching to standardized tests",
              "Limit teacher autonomy",
              "Focus on core subjects only",
            ],
            correctAnswer: 0,
          },
        ],
      },
      resources: [
        {
          title: "Guide to Effective Data Use in Schools",
          description:
            "A comprehensive manual on utilizing data to enhance student outcomes.",
          type: "Download",
          link: "/downloads/data-use-guide.pdf",
        },
        {
          title: "Strategies for Building Learning Communities",
          description:
            "Insights and best practices for developing collaborative educator teams.",
          type: "Download",
          link: "/downloads/learning-communities-strategies.pdf",
        },
        {
          title: "Curriculum Alignment Toolkit",
          description:
            "Tools and templates to assist in aligning curriculum effectively.",
          type: "Download",
          link: "/downloads/curriculum-alignment-toolkit.pdf",
        },
      ],
    },
    {
      id: "community-engagement",
      title: "Community and Stakeholder Engagement",
      competency: "Family and Community Engagement",
      estimatedTime: "3.5 hours",
      progress: 0,
      description: "Learn techniques for meaningful stakeholder engagement and leveraging community resources.",
      tags: ["Required", "Asynchronous"],
      category: "Engagement",
      overview: {
        objectives: [
          "Build and maintain positive relationships with families and community partners.",
          "Develop strategies for effective communication with diverse stakeholders.",
          "Mobilize community resources to support student learning and well-being.",
        ],
        whyItMatters:
          "Engaging families and the community is essential for creating supportive environments that enhance student success and foster trust in the educational system.",
        about:
          "This module focuses on techniques for meaningful stakeholder engagement, communication strategies, and leveraging community resources.",
      },
      activities: [
        {
          title: "Effective Communication with Families",
          description:
            "Learn best practices for transparent and culturally responsive communication with student families.",
          type: "Webinar",
          time: "40 minutes",
          completed: false,
        },
        {
          title: "Partnering with Community Organizations",
          description:
            "Explore methods for establishing partnerships that provide additional support and opportunities for students.",
          type: "Panel Discussion",
          time: "50 minutes",
          completed: false,
        },
        {
          title: "Organizing Community Forums",
          description:
            "Understand the logistics and benefits of hosting forums to engage stakeholders in dialogue about school initiatives.",
          type: "Workshop",
          time: "45 minutes",
          completed: false,
        },
      ],
      reflectionPrompts: [
        "What are the key components of effective family engagement in your district?",
        "How can community partnerships enhance educational opportunities for students?",
        "What strategies can you implement to ensure stakeholder voices are heard and valued?",
      ],
      assessment: {
        title: "Community Engagement Mastery Test",
        questions: [
          {
            text: "Which is a critical element of culturally responsive communication?",
            options: [
              "Using technical jargon",
              "Assuming uniformity among cultures",
              "Active listening and empathy",
              "Limiting communication channels",
            ],
            correctAnswer: 2,
          },
          {
            text: "A primary benefit of community partnerships is:",
            options: [
              "Reducing school expenses",
              "Enhancing student support services",
              "Delegating school responsibilities",
              "Increasing standardized test scores",
            ],
            correctAnswer: 1,
          },
          {
            text: "Effective community forums should:",
            options: [
              "Be invitation-only",
              "Focus solely on school achievements",
              "Encourage open dialogue and feedback",
              "Limit participation to educators",
            ],
            correctAnswer: 2,
          },
        ],
      },
      resources: [
        {
          title: "Family Engagement Framework",
          description:
            "A guide to developing systemic, integrated, and sustainable family engagement practices.",
          type: "Download",
          link: "/downloads/family-engagement-framework.pdf",
        },
        {
          title: "Community Partnership Development Guide",
          description:
            "Strategies for creating and maintaining effective school-community partnerships.",
          type: "Download",
          link: "/downloads/community-partnership-guide.pdf",
        },
        {
          title: "Toolkit for Hosting Inclusive Community Forums",
          description:
            "Resources and templates for planning and conducting community forums.",
          type: "Download",
          link: "/downloads/community-forum-toolkit.pdf",
        },
      ],
    },
    {
        id: "ethical-leadership",
        title: "Ethical Leadership in Education",
        competency: "Ethics and Integrity",
        estimatedTime: "3 hours",
        progress: 0,
        description: "Explore the core tenets of ethical leadership and frameworks for ethical decision-making.",
        tags: ["Required", "Asynchronous"],
        category: "Ethics",
        overview: {
          objectives: [
            "Understand the principles of ethical leadership and their application in educational settings.",
            "Recognize and navigate ethical dilemmas commonly faced by superintendents.",
            "Develop strategies to promote integrity and fairness within the school community.",
          ],
          whyItMatters:
            "Ethical leadership is fundamental to building trust and credibility within the educational community. Superintendents must exemplify integrity and fairness to effectively lead and inspire stakeholders.",
          about:
            "This module explores the core tenets of ethical leadership, provides frameworks for ethical decision-making, and examines real-world scenarios to prepare leaders for ethical challenges.",
        },
        activities: [
          {
            title: "Foundations of Ethical Leadership",
            description:
              "Examine the key principles and theories underpinning ethical leadership in education.",
            type: "Reading",
            time: "30 minutes",
            completed: false,
          },
          {
            title: "Case Studies in Educational Ethics",
            description:
              "Analyze real-life scenarios where ethical dilemmas arise in school leadership.",
            type: "Discussion",
            time: "45 minutes",
            completed: false,
          },
          {
            title: "Developing a Personal Code of Ethics",
            description:
              "Create a personalized code of ethics to guide decision-making and leadership practices.",
            type: "Workshop",
            time: "60 minutes",
            completed: false,
          },
        ],
        reflectionPrompts: [
          "Reflect on a time when you faced an ethical dilemma in your professional life. How did you handle it, and what was the outcome?",
          "How can you foster a culture of integrity and ethical behavior among staff and students?",
          "What steps can you take to ensure transparency and fairness in your decision-making processes?",
        ],
        assessment: {
          title: "Ethical Leadership Competency Assessment",
          questions: [
            {
              text: "Which of the following best defines ethical leadership?",
              options: [
                "Prioritizing organizational goals over individual values.",
                "Making decisions based solely on legal requirements.",
                "Demonstrating integrity, fairness, and respect in decision-making.",
                "Avoiding difficult decisions to maintain harmony.",
              ],
              correctAnswer: 2,
            },
            {
              text: "When confronted with an ethical dilemma, a superintendent should:",
              options: [
                "Consult with legal counsel to find a loophole.",
                "Consider the impact on all stakeholders and adhere to ethical principles.",
                "Prioritize the interests of the school board above all.",
                "Delay the decision until the dilemma resolves itself.",
              ],
              correctAnswer: 1,
            },
            {
              text: "Creating a personal code of ethics helps leaders to:",
              options: [
                "Align personal values with organizational policies.",
                "Justify decisions that may be ethically ambiguous.",
                "Avoid accountability for difficult decisions.",
                "Ensure decisions are popular among staff.",
              ],
              correctAnswer: 0,
            },
          ],
        },
        resources: [
          {
            title: "Ethical Leadership in Schools: Creating Community in an Environment of Accountability",
            description:
              "A comprehensive guide on ethical leadership practices in educational settings.",
            type: "Link",
            link: "https://www.amazon.com/Ethical-Leadership-Schools-Environment-Accountability/dp/1412913519",
          },
          {
            title: "California Professional Standards for Education Leaders (CPSEL)",
            description:
              "Standards outlining the expectations for ethical leadership among California educators.",
            type: "Download",
            link: "https://www.ctc.ca.gov/docs/default-source/educator-prep/standards/cpsel-booklet-2014.pdf",
          },
          {
            title: "Ethical Leadership Certification Program",
            description:
              "An online program designed to help educational leaders identify and respond to ethical dilemmas.",
            type: "Link",
            link: "https://learning.thecpt.org/collections/ethical-leadership-certification-program",
          },
        ],
      },
  {
    id: "systems-thinking",
    title: "Systems Thinking and Organizational Change",
    competency: "Systems Leadership",
    estimatedTime: "3.5 hours",
    progress: 0,
    description: "Apply systems thinking to design sustainable improvements across departments and teams.",
    tags: ["Required", "Asynchronous"],
    category: "Leadership",
    overview: {
      objectives: [
        "Understand systems thinking as a framework for school leadership.",
        "Identify key interdependencies within district and school ecosystems.",
        "Apply systems-based strategies for organizational change."
      ],
      whyItMatters: "Systems thinking equips superintendents with the skills to design and implement change that is coherent, scalable, and sustainable across a district.",
      about: "This module introduces systems thinking as a tool for recognizing patterns and root causes in school systems, and applying strategies to lead transformation."
    },
    activities: [
      {
        title: "Introduction to Systems Thinking",
        description: "Explore the foundational concepts of systems thinking in education.",
        type: "Video",
        time: "30 minutes",
        completed: false
      },
      {
        title: "Mapping System Interdependencies",
        description: "Engage in a hands-on activity to identify systems interactions within a district.",
        type: "Workshop",
        time: "45 minutes",
        completed: false
      },
      {
        title: "Organizational Change Simulation",
        description: "Participate in a scenario simulating district-level change management.",
        type: "Simulation",
        time: "60 minutes",
        completed: false
      }
    ],
    reflectionPrompts: [
      "Which systems in your district are most interdependent?",
      "How can identifying root causes help you lead change more effectively?",
      "What resistance might you face when implementing systems-level change?"
    ],
    assessment: {
      title: "Systems Leadership Mastery Assessment",
      questions: [
        {
          text: "What is the primary benefit of using systems thinking?",
          options: [
            "Allows leaders to work independently",
            "Identifies how actions in one area affect others",
            "Replaces the need for team collaboration",
            "Simplifies compliance with regulations"
          ],
          correctAnswer: 1
        },
        {
          text: "Which of the following best defines a system in education?",
          options: [
            "A single classroom",
            "An isolated budget line item",
            "An interconnected set of elements with a purpose",
            "A department with no dependencies"
          ],
          correctAnswer: 2
        }
      ]
    },
    resources: [
      {
        title: "Systems Thinking in Schools",
        description: "A guide for applying systems thinking tools in educational leadership.",
        type: "Download",
        link: "/downloads/systems-thinking-guide.pdf"
      },
      {
        title: "Organizational Change Strategies",
        description: "Templates and planning tools for leading change.",
        type: "Download",
        link: "/downloads/change-strategy-templates.pdf"
      }
    ]
  },
  {
    id: "fiscal-management",
    title: "Superintendent Finance & Resource Stewardship",
    competency: "Resource Management",
    estimatedTime: "4 hours",
    progress: 0,
    description: "Gain foundational understanding of district budgeting, LCAP alignment, and multi-year financial planning.",
    tags: ["Required", "Asynchronous"],
    category: "Operations",
    overview: {
      objectives: [
        "Understand the basics of district finance and budgeting.",
        "Align financial decisions with the LCAP and district priorities.",
        "Use multi-year planning to ensure sustainability and transparency."
      ],
      whyItMatters: "Superintendents are accountable for leading financial planning that supports student outcomes and meets community expectations.",
      about: "This module provides a practical look into budget development, LCAP alignment, and fiscal accountability for superintendents."
    },
    activities: [
      {
        title: "Understanding the LCAP",
        description: "Review the Local Control and Accountability Plan process and alignment techniques.",
        type: "Slides",
        time: "30 minutes",
        completed: false
      },
      {
        title: "Multi-Year Budget Planning",
        description: "Explore case studies in resource allocation and long-term planning.",
        type: "Text",
        time: "45 minutes",
        completed: false
      },
      {
        title: "Fiscal Transparency Simulation",
        description: "Walk through an interactive exercise simulating budget trade-offs and stakeholder communication.",
        type: "Simulation",
        time: "60 minutes",
        completed: false
      }
    ],
    reflectionPrompts: [
      "What are your district's most important budget priorities?",
      "How do you ensure stakeholder understanding and support of your fiscal plans?",
      "What tools do you use to forecast financial sustainability?"
    ],
    assessment: {
      title: "Resource Stewardship Competency Check",
      questions: [
        {
          text: "Which document guides budget priorities in California school districts?",
          options: ["LCAP", "SARC", "WASC", "FERPA"],
          correctAnswer: 0
        },
        {
          text: "What is the purpose of multi-year financial planning?",
          options: [
            "Ensure compliance with attendance accounting",
            "Predict and prepare for future revenue and expense trends",
            "Audit special education funding",
            "Avoid community input"
          ],
          correctAnswer: 1
        }
      ]
    },
    resources: [
      {
        title: "School Finance Handbook",
        description: "An introduction to fiscal operations in California school districts.",
        type: "Download",
        link: "/downloads/school-finance-handbook.pdf"
      },
      {
        title: "LCAP Planning Toolkit",
        description: "Guidance for aligning financial plans with district goals.",
        type: "Download",
        link: "/downloads/lcap-planning-toolkit.pdf"
      }
    ]
  }

];

export const mockData = modules;