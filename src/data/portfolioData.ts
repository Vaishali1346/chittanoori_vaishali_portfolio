export interface Profile {
  name: string;
  role: string;
  email: string;
  phone: string;
  linkedin: string;
  linkedinDisplay: string;
  leetcode: string;
  github: string;
  githubDisplay: string;
  avatar: string;
}

export interface HeroData {
  headline: string;
  subheading: string;
}

export interface AboutData {
  objective: string;
  highlights: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  cgpa: string;
}

export interface SkillsGroup {
  languages: string[];
  databases: string[];
  core: string[];
  web: string[];
  tools: string[];
}

export interface InternshipProject {
  title: string;
  description: string;
  impact: string;
  tech: string[];
}

export interface ExperienceData {
  company: string;
  role: string;
  period: string;
  projects: InternshipProject[];
}

export interface ProjectItem {
  name: string;
  category: string;
  description: string;
  features: string[];
  tech: string[];
  github: string;
  demo?: string;
  icon: string;
  gradient: string;
}

export interface HackathonData {
  name: string;
  category: string;
  description: string;
  features: string[];
  tech: string[];
  github: string;
}

export interface StatItem {
  stat: string;
  label: string;
}

export interface CertificationItem {
  title: string;
  description: string;
}

export interface GithubRepo {
  name: string;
  url: string;
  lang: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export const profile: Profile = {
  name: "Chittanoori Vaishali",
  role: "Computer Science (Data Science) Undergraduate | Aspiring Software Engineer",
  email: "chittanoorivaishali@gmail.com",
  phone: "+91 7013540223",
  linkedin: "https://www.linkedin.com/in/vaishali-chittanoori-6aa288293/",
  linkedinDisplay: "Chittanoori Vaishali",
  leetcode: "https://leetcode.com/u/Vaishali_413/",
  github: "https://github.com/Vaishali1346",
  githubDisplay: "Vaishali1346",
  avatar: "https://avatars.githubusercontent.com/u/208835762?v=4"
};

export const heroData: HeroData = {
  headline: "Computer Science (Data Science) Student | Software Developer | Problem Solver",
  subheading: "Building practical software solutions with Python, SQL, automation, and modern web technologies."
};

export const aboutData: AboutData = {
  objective: "Computer Science (Data Science) undergraduate with hands-on experience in software development through a Wells Fargo Technology Internship. Proficient in Python, SQL, and web technologies, with experience building automation frameworks, full-stack applications, and data-driven solutions. Eager to contribute to innovative software engineering solutions while continuously expanding technical expertise.",
  highlights: [
    "B.Tech Computer Science (Data Science)",
    "G. Narayanamma Institute of Technology and Science",
    "CGPA 9.11",
    "Wells Fargo Technology Internship",
    "Python, SQL & Full-stack development",
    "Automation & Data-driven problem solving"
  ]
};

export const educationList: EducationItem[] = [
  {
    institution: "G. Narayanamma Institute of Technology and Science, Hyderabad",
    degree: "B.Tech in Computer Science (Data Science)",
    period: "2023 – 2027",
    cgpa: "9.11"
  },
  {
    institution: "Ignite Junior College, Hyderabad",
    degree: "Intermediate – MPC",
    period: "2021 – 2023",
    cgpa: "9.82"
  },
  {
    institution: "Sujatha Public School, Moinabad",
    degree: "Class X",
    period: "2020 – 2021",
    cgpa: "8.6"
  }
];

export const skillsData: SkillsGroup = {
  languages: ["Python", "C", "SQL"],
  databases: ["MySQL", "SQL Server", "MongoDB"],
  core: ["Data Structures & Algorithms", "Object-Oriented Programming", "DBMS", "Machine Learning"],
  web: ["React.js", "Node.js"],
  tools: ["Power BI", "VS Code", "Git", "GitHub", "Postman", "PyYAML", "Hive", "Beeline", "SuperPuTTy"]
};

export const experienceData: ExperienceData = {
  company: "Wells Fargo",
  role: "Technology Intern",
  period: "May 2026 – July 2026",
  projects: [
    {
      title: "Hive Schema Validation Automation",
      description: "Developed a Python-based framework to automate Hive deployment validation using YAML configurations. Reduced validation time from approximately 12 hours to 15 minutes, significantly improving deployment efficiency.",
      impact: "12 Hours → 15 Minutes",
      tech: ["Python", "Hive", "PyYAML", "SuperPuTTy", "Beeline"]
    },
    {
      title: "Secure API Egress Monitoring",
      description: "Developed a solution to validate outbound API payloads against enterprise data-sharing policies. Implemented metadata-driven validation to improve compliance and reduce data exposure risks.",
      impact: "Compliance & Risk Reduction",
      tech: ["Node.js", "MongoDB", "Postman", "Power BI"]
    }
  ]
};

export const projectsList: ProjectItem[] = [
  {
    name: "SecureClaim AI",
    category: "AI / Full-Stack Project",
    description: "A full-stack insurance fraud detection system trained on Automobile, Home, and Health claim datasets. Uses XGBoost and FastAPI to generate a fraud risk score and automatically classify claims as ACCEPT or REJECT through a React-based interactive web interface.",
    features: [
      "XGBoost ML model for fraud risk scoring",
      "FastAPI backend for claim processing",
      "React-based interactive web interface",
      "Multi-domain claim support (Auto, Home, Health)"
    ],
    tech: ["React", "FastAPI", "XGBoost", "Python"],
    github: "https://github.com/Vaishali1346/SecureClaim-ai",
    icon: "shield-check",
    gradient: "from-teal-500 to-cyan-500"
  },
  {
    name: "Q-Health: Smart OPD Booking System",
    category: "Full-Stack Healthcare Application",
    description: "A full-stack Digital Clinic Booking and Smart Queue Management System for online appointment scheduling, digital token generation with QR codes, real-time queue tracking, and AI-assisted triage.",
    features: [
      "Online appointment scheduling",
      "Digital token generation with QR codes",
      "Real-time queue tracking",
      "AI-assisted triage & priority scoring"
    ],
    tech: ["React", "Node.js", "SQL Server", "Google Gemini AI"],
    github: "https://github.com/Vaishali1346/Smart-OPD-Booking-System",
    icon: "stethoscope",
    gradient: "from-blue-500 to-indigo-500"
  },
  {
    name: "Question Paper Generator",
    category: "Academic / Full-Stack Project",
    description: "A web-based system to generate question papers based on exam patterns and course outcomes. Provides role-based access to Faculty, HOD, and Exam Cell, each with their own dashboard and permissions.",
    features: [
      "Automated question paper generation",
      "Role-based access (Faculty, HOD, Exam Cell)",
      "Dedicated dashboards per role",
      "Streamlined academic workflow"
    ],
    tech: ["React", "Node.js", "MySQL"],
    github: "https://github.com/Vaishali1346/webproject_questionpapergenerator",
    icon: "file-text",
    gradient: "from-violet-500 to-purple-500"
  }
];

export const hackathonData: HackathonData = {
  name: "KFlow Collaboration Suite",
  category: "Hackathon Project",
  description: "A unified developer collaboration platform featuring a team knowledge base, team channels, real-time video huddles, and interactive architecture flowcharts. Built as a comprehensive workspace for engineering teams.",
  features: [
    "Unified developer knowledge base",
    "Team channels for communication",
    "Real-time video huddles",
    "Interactive architecture flowcharts"
  ],
  tech: ["React", "Tailwind CSS", "JavaScript"],
  github: "https://github.com/Vaishali1346/kflow-collaboration-suite"
};

export const statsList: StatItem[] = [
  { stat: "Top 12%", label: "LeetCode Ranking" },
  { stat: "150+", label: "Problems Solved" },
  { stat: "9.11", label: "B.Tech CGPA" },
  { stat: "Wells Fargo", label: "Technology Internship" }
];

export const certificationsList: CertificationItem[] = [
  { title: "Power BI", description: "Business Intelligence & Data Visualization" },
  { title: "Google AI Essentials", description: "Fundamentals of Artificial Intelligence" },
  { title: "Google Prompting Essentials", description: "Crafting effective prompts to communicate with AI tools" },
  { title: "Python Basics", description: "Core Python programming concepts" },
  { title: "SQL Fundamentals", description: "Querying and database management" },
  { title: "Java Programming Fundamentals", description: "OOP and Java basics" }
];

export const githubRepos: GithubRepo[] = [
  { name: "SecureClaim AI", url: "https://github.com/Vaishali1346/SecureClaim-ai", lang: "TypeScript" },
  { name: "Smart OPD Booking System", url: "https://github.com/Vaishali1346/Smart-OPD-Booking-System", lang: "TypeScript" },
  { name: "KFlow Collaboration Suite", url: "https://github.com/Vaishali1346/kflow-collaboration-suite", lang: "JavaScript" },
  { name: "Question Paper Generator", url: "https://github.com/Vaishali1346/webproject_questionpapergenerator", lang: "Python" }
];

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Hackathon", href: "#hackathon" },
  { label: "Achievements", href: "#achievements" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" }
];
