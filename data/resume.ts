export const RESUME_DATA = {
  name: "Suryansh Pandey",
  initials: "SP",
  location: "Remote / India",
  locationLink: "https://www.google.com/maps/place/India",
  about:
    "Senior Backend & AI Engineer with 4+ years of experience building scalable distributed systems, AI automation platforms, and enterprise-grade security products. Specialized in Python microservices, event-driven architectures, LLM-powered agents, and cloud-native platforms.",
  summary:
    "Proven track record of delivering high-performance backend systems, agentic AI workflows, and DevSecOps automation used by global enterprises. Expert in Python, Django, FastAPI, LangChain, and Cloud Remediation.",
  avatarUrl: "/images/profile.jpg", // Placeholder
  personalWebsiteUrl: "https://github.com/suryanshp1",
  contact: {
    email: "suryanshp1@gmail.com",
    tel: "+918174075586",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/suryanshp1",
        icon: "Github",
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/suryanshp1",
        icon: "Linkedin",
      },
      {
        name: "X",
        url: "https://x.com/", // Placeholder if needed
        icon: "Twitter",
      },
    ],
  },
  education: [
    {
      school: "University (Implied)",
      degree: "Bachelor's Degree in Computer Science (Implied)",
      start: "2018",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Strobes Security, Inc.",
      link: "https://strobes.co",
      badges: ["Remote", "Senior Engineer"],
      title: "Senior Software Engineer (Backend & Platform)",
      start: "Aug 2025",
      end: "Jan 2026",
      description:
        "Designed a GitHub Issues bi-directional sync platform using GraphQL APIs. Built high-performance Engagement & Assessment Export System. Reduced priority score computation time from 2000+ seconds to under 100 seconds. Improved platform reliability by strengthening automated test coverage.",
    },
    {
      company: "Strobes Security, Inc.",
      link: "https://strobes.co",
      badges: ["Remote", "AI Automation"],
      title: "Software Engineer (Backend & AI Automation)",
      start: "Jan 2024",
      end: "Jul 2025",
      description:
        "Architected Custom Dashboard Framework. Built Strobes AI Automation Agent for vulnerability lifecycle. Developed Code Patch Automation Agent using AIDER and Claude. Built Cloud Remediation Agent using LangChain, Terraform, Celery. Contributed to Strobes Pulse AI.",
    },
    {
      company: "Strobes Security, Inc.",
      link: "https://strobes.co",
      badges: ["Hyderabad"],
      title: "Junior Software Engineer (Backend)",
      start: "Apr 2022",
      end: "Dec 2023",
      description:
        "Built Asset & Vulnerability Archival System. Implemented Microsoft Teams integration. Optimized bulk operations improving execution speed and scalability.",
    },
    {
      company: "Strobes Security, Inc.",
      link: "https://strobes.co",
      badges: ["Intern"],
      title: "Software Engineering Intern",
      start: "Nov 2021",
      end: "Mar 2022",
      description:
        "Developed a full-stack Blog Platform using Django REST Framework, GraphQL, JWT, and PostgreSQL.",
    },
  ],
  skills: [
    "Python",
    "Django",
    "FastAPI",
    "GraphQL",
    "Celery",
    "RabbitMQ",
    "Redis",
    "PostgreSQL",
    "MongoDB",
    "Elasticsearch",
    "LangChain",
    "LangGraph",
    "CrewAI",
    "RAG",
    "Vector DBs",
    "Docker",
    "Terraform",
    "AWS",
    "GitHub Actions",
  ],
  projects: [
    {
      title: "python-SAST-agent",
      techStack: ["Python", "Docker", "GitHub API"],
      description:
        "Autonomous SAST agent that detects vulnerabilities, generates fixes, and creates pull requests. Implemented CI-ready Docker workflows and Slack alerts.",
      link: {
        label: "GitHub",
        href: "https://github.com/suryanshp1",
      },
    },
    {
      title: "Bluesky AI Agent",
      techStack: ["Python", "LangChain", "Groq", "Atproto"],
      description:
        "Agentic content automation platform using multi-agent orchestration. Enabled real-time Bluesky integration for LLM-powered workflows.",
      link: {
        label: "GitHub",
        href: "https://github.com/suryanshp1",
      },
    },
  ],
} as const;
