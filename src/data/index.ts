import { Experience, Skill } from '@/types';

export const personalInfo = {
  name: "Koriche Haithem",
  title: "Full-stack Developer and Web Specialist",
  email: "korichehaithem2018@gmail.com",
  phone: "+213555725285",
  location: "Douera, Alger, Algeria",
  github: "https://github.com/Haithemkoriche",
  linkedin: "https://www.linkedin.com/in/korichehaithem/",
  bio: "Development Manager and Full-stack Developer with 5+ years of experience in Laravel, PHP, VueJs, Angular, and FlutterFlow. Currently leading development teams at Doctofree Technologies and WEBGENIUS. Specialized in building scalable web applications, mobile solutions, automation systems, and no-code platforms. Expert in team management, API development, and delivering innovative digital solutions.",
  avatar: "/placeholder-avatar.jpg"
};

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Doctofree Technologies",
    position: "Development Manager",
    duration: "December 2024 - April 2025",
    location: "Hydra, Algeria",
    description: [
      "Led full-stack development using Laravel for backend and comprehensive API management",
      "Designed modern user interfaces with VueJs for responsive frontend development",
      "Created and maintained Python scraping scripts for automated data extraction and processing",
      "Built and maintained robust, secure APIs with Laravel ensuring high performance and reliability",
      "Integrated multiple third-party APIs to expand application functionality and user experience",
      "Managed virtual machines for hosting applications, including installation and configuration",
      "Deployed applications and optimized performance in production environments",
      "Provided technical support, implemented bug fixes, and incorporated user feedback for continuous improvement"
    ],
    technologies: ["Laravel", "VueJs", "Python", "API Development", "MySQL", "Virtual Machines", "Server Management"]
  },
  {
    id: "2", 
    company: "Belsons Technologies",
    position: "Front-end Developer",
    duration: "December 2024 - April 2025",
    location: "Dubai (Remote)",
    description: [
      "Designed responsive user interfaces using Angular framework",
      "Created comprehensive testing scripts using Cypress for automated testing",
      "Integrated third-party APIs to enhance application functionality and user experience",
      "Collaborated with remote teams to deliver high-quality frontend solutions",
      "Maintained code quality standards and implemented best practices for Angular development"
    ],
    technologies: ["Angular", "TypeScript", "Cypress", "API Integration", "HTML5", "CSS3"]
  },
  {
    id: "3",
    company: "WEBGENIUS",
    position: "Full-stack Developer & Agency Manager",
    duration: "May 2024 - Present",
    location: "Cheraga, Algeria",
    description: [
      "Directed overall agency management, overseeing multiple web development projects",
      "Planned and strategized digital solutions for diverse clients across various industries",
      "Coordinated teams of developers, designers, and project managers for optimal project delivery",
      "Increased brand awareness and successfully acquired new clients in the local market",
      "Developed full-stack web applications using modern technologies and frameworks",
      "Implemented project management methodologies to improve team efficiency and client satisfaction"
    ],
    technologies: ["Project Management", "Team Leadership", "Full-stack Development", "Client Relations", "Strategy Planning"]
  },
  {
    id: "4",
    company: "Development Agency",
    position: "Full-Stack Developer",
    duration: "January 2024 - April 2025",
    location: "Batna (Remote)",
    description: [
      "Participated in web and mobile app development for various client projects",
      "Created custom features and integrated third-party APIs for enhanced functionality",
      "Maintained and updated existing applications to ensure optimal user experience",
      "Collaborated with development teams to implement coding best practices and standards",
      "Delivered high-quality solutions within project timelines and client requirements"
    ],
    technologies: ["Web Development", "Mobile Development", "API Integration", "Maintenance", "Team Collaboration"]
  },
  {
    id: "5",
    company: "TABIBLIB TECHNOLOGIES",
    position: "Development Manager",
    duration: "October 2023 - June 2024",
    location: "Hydra, Algeria",
    description: [
      "Led full-stack development using Laravel for backend and comprehensive API management",
      "Designed user interfaces with Bootstrap and Angular for responsive frontend development",
      "Developed mobile and web applications using FlutterFlow and Bubble.io platforms",
      "Created and maintained Python scraping scripts for data extraction and processing",
      "Built and maintained robust, secure APIs with Laravel framework",
      "Integrated third-party APIs to expand application functionality",
      "Managed virtual machines for hosting applications, including installation and configuration",
      "Deployed applications and optimized performance in production environments",
      "Provided technical support, bug fixes, and implemented user feedback"
    ],
    technologies: ["Laravel", "Bootstrap", "Angular", "FlutterFlow", "Bubble.io", "Python", "API Development", "MySQL"]
  },
  {
    id: "6",
    company: "Agency in Turkey",
    position: "WordPress Developer",
    duration: "2023",
    location: "Turkey (Remote)",
    description: [
      "Designed and customized WordPress sites for diverse international clients",
      "Integrated themes and plugins based on specific client requirements and business needs",
      "Optimized websites for SEO performance and improved page load speeds",
      "Resolved technical issues and provided comprehensive post-deployment support",
      "Developed custom WordPress plugins and themes for enhanced functionality"
    ],
    technologies: ["WordPress", "PHP", "MySQL", "SEO", "Plugin Development", "Theme Customization"]
  },
  {
    id: "7",
    company: "Freelance Web Developer",
    position: "Full-stack Developer & System Architect",
    duration: "January 2022 - December 2023",
    location: "Douera, Alger, Algeria",
    description: [
      "Developed and maintained 10+ complex web applications using Laravel framework and PHP, serving over 1000+ active users",
      "Architected and built comprehensive travel management systems including Rihla Tours with booking functionality for flights, hotels, and destinations",
      "Created automated appointment booking systems (BLS Spain Bot) with captcha handling and browser automation using JavaScript and TamperMonkey",
      "Designed and implemented vehicle management systems with fleet tracking, maintenance scheduling, and real-time monitoring capabilities",
      "Built educational management platforms for academic institutions with student registration, course management, and administration tools",
      "Developed electric charging station management systems with user authentication, session tracking, and payment integration"
    ],
    technologies: ["Laravel", "PHP", "WordPress", "MySQL", "PostgreSQL", "Flutter", "FlutterFlow", "Bootstrap", "JavaScript", "CSS3", "HTML5", "Git", "REST APIs", "TamperMonkey"]
  }
];

export const skills: Skill[] = [
  // Backend
  { name: "Laravel", level: 95, category: "backend" },
  { name: "PHP", level: 92, category: "backend" },
  { name: "WordPress", level: 88, category: "backend" },
  { name: "Node.js", level: 75, category: "backend" },
  { name: "Python", level: 80, category: "backend" },
  
  // Frontend
  { name: "JavaScript", level: 85, category: "frontend" },
  { name: "HTML5/CSS3", level: 95, category: "frontend" },
  { name: "TypeScript", level: 75, category: "frontend" },
  { name: "VueJs", level: 85, category: "frontend" },
  { name: "Bootstrap", level: 90, category: "frontend" },
  { name: "React", level: 78, category: "frontend" },
  { name: "Angular", level: 75, category: "frontend" },
  
  // Database
  { name: "MySQL", level: 90, category: "database" },
  { name: "PostgreSQL", level: 85, category: "database" },
  { name: "Firebase", level: 80, category: "database" },
  { name: "SupaBase", level: 75, category: "database" },
  { name: "MongoDB", level: 75, category: "database" },
  
  // Mobile & No-Code
  { name: "Flutter", level: 85, category: "mobile" },
  { name: "FlutterFlow", level: 88, category: "mobile" },
  { name: "Dart", level: 82, category: "mobile" },
  { name: "bubble.io", level: 80, category: "mobile" },
  { name: "WebFlow", level: 75, category: "mobile" },
  { name: "PWA", level: 85, category: "mobile" },
  
  // Tools & Automation
  { name: "Git", level: 88, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Linux", level: 80, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Composer", level: 85, category: "tools" },
  { name: "DevOps", level: 65, category: "tools" },
  { name: "n8n", level: 75, category: "tools" },
  { name: "Make", level: 70, category: "tools" },
  { name: "TelegramBot", level: 80, category: "tools" },
  { name: "Cypress", level: 70, category: "tools" }
];

export const githubUsername = "Haithemkoriche";
