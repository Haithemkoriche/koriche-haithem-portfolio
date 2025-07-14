import { Experience, Skill } from '@/types';

export const personalInfo = {
  name: "Koriche Haithem",
  title: "Full-stack Developer and Web Specialist",
  email: "korichehaithem2018@gmail.com",
  phone: "+213555725285",
  location: "Douera, Alger, Algeria",
  github: "https://github.com/Haithemkoriche",
  linkedin: "https://www.linkedin.com/in/korichehaithem/",
  bio: "Full-stack Developer and Web Specialist with 5+ years of experience in Laravel, PHP, WordPress, and FlutterFlow. Specialized in building scalable web applications, automation systems, and mobile solutions. Passionate about creating innovative solutions and expanding expertise in DevOps & Cloud Technologies.",
  avatar: "/placeholder-avatar.jpg"
};

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Freelance Web Developer",
    position: "Full-stack Developer & System Architect",
    duration: "January 2022 - Present",
    location: "Douera, Alger, Algeria",
    description: [
      "Developed and maintained 10+ complex web applications using Laravel framework and PHP, serving over 1000+ active users",
      "Architected and built comprehensive travel management systems including Rihla Tours with booking functionality for flights, hotels, and destinations",
      "Created automated appointment booking systems (BLS Spain Bot) with captcha handling and browser automation using JavaScript and TamperMonkey",
      "Designed and implemented vehicle management systems with fleet tracking, maintenance scheduling, and real-time monitoring capabilities",
      "Built educational management platforms for academic institutions with student registration, course management, and administration tools",
      "Developed electric charging station management systems with user authentication, session tracking, and payment integration",
      "Implemented responsive web solutions using modern frontend technologies (Bootstrap, JavaScript, CSS3) ensuring mobile-first design",
      "Managed database architecture and optimization using MySQL and PostgreSQL for high-performance applications",
      "Built mobile applications using FlutterFlow and Flutter framework for cross-platform deployment",
      "Currently expanding expertise in DevOps practices and Cloud Technologies (AWS, Docker) for scalable deployments"
    ],
    technologies: ["Laravel", "PHP", "WordPress", "MySQL", "PostgreSQL", "Flutter", "FlutterFlow", "Bootstrap", "JavaScript", "CSS3", "HTML5", "Git", "REST APIs", "TamperMonkey"]
  },
  {
    id: "2",
    company: "Web Development Projects",
    position: "PHP Developer & Database Designer",
    duration: "March 2020 - December 2021",
    location: "Algeria",
    description: [
      "Developed tourism and travel management systems with advanced booking algorithms and payment gateway integration",
      "Created appointment booking and automation systems for government services, reducing manual processing time by 80%",
      "Built comprehensive educational management platforms with student enrollment, grade tracking, and parent portal features",
      "Implemented vehicle and fleet management systems with GPS tracking, maintenance alerts, and reporting dashboards",
      "Designed and developed e-commerce solutions with inventory management, order processing, and customer relationship tools",
      "Worked on various PHP-based web applications with emphasis on security, performance optimization, and scalability",
      "Collaborated with clients to gather requirements, provide technical consultations, and deliver customized solutions",
      "Implemented database normalization and query optimization techniques resulting in 60% improved application performance"
    ],
    technologies: ["PHP", "MySQL", "CSS3", "JavaScript", "Bootstrap", "HTML5", "jQuery", "AJAX", "JSON", "XML"]
  },
  {
    id: "3",
    company: "Self-Learning & Academic Projects",
    position: "Software Development Student",
    duration: "September 2019 - February 2020",
    location: "Algeria",
    description: [
      "Completed intensive self-study program covering fundamental programming concepts and web development technologies",
      "Built portfolio of personal projects demonstrating proficiency in PHP, MySQL, and frontend technologies",
      "Studied database design principles, normalization, and relationship modeling for efficient data management",
      "Developed understanding of software development lifecycle, version control (Git), and project management",
      "Created responsive web interfaces using HTML5, CSS3, and JavaScript with focus on user experience",
      "Practiced object-oriented programming principles and design patterns in PHP development",
      "Learned about web security best practices including SQL injection prevention and data validation",
      "Participated in online coding communities and contributed to open-source projects for practical experience"
    ],
    technologies: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "Git", "Bootstrap", "jQuery"]
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
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "Bootstrap", level: 90, category: "frontend" },
  { name: "React", level: 78, category: "frontend" },
  { name: "Vue.js", level: 70, category: "frontend" },
  { name: "TypeScript", level: 75, category: "frontend" },
  
  // Database
  { name: "MySQL", level: 90, category: "database" },
  { name: "PostgreSQL", level: 85, category: "database" },
  { name: "Firebase", level: 80, category: "database" },
  { name: "MongoDB", level: 75, category: "database" },
  
  // Mobile
  { name: "Flutter", level: 85, category: "mobile" },
  { name: "FlutterFlow", level: 88, category: "mobile" },
  { name: "Dart", level: 82, category: "mobile" },
  
  // Tools
  { name: "Git", level: 88, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Linux", level: 80, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Composer", level: 85, category: "tools" },
  { name: "DevOps", level: 65, category: "tools" }
];

export const githubUsername = "Haithemkoriche";
