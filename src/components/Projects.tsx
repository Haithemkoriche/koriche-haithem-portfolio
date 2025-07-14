'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Star, GitFork, Calendar } from 'lucide-react';
import { fetchGitHubProjects, formatDate, truncateText } from '@/utils/github';
import { githubUsername } from '@/data';
import { Project } from '@/types';

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const fetchedProjects = await fetchGitHubProjects(githubUsername);
        setProjects(fetchedProjects);
      } catch (error) {
        console.error('Failed to load projects:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  // Featured projects (manually curated)
  const featuredProjects = [
    {
      id: 999,
      name: "Rihla Tours",
      description: "Complete travel management system with booking functionality for flights, hotels, and destinations. Features admin dashboard, client management, and reservation system.",
      html_url: "https://github.com/Haithemkoriche/Rihla_Tours",
      homepage: "",
      language: "PHP",
      topics: ["php", "mysql", "bootstrap", "travel", "booking-system"],
      stargazers_count: 1,
      forks_count: 0,
      created_at: "2023-08-20T00:00:00Z",
      updated_at: "2024-11-30T00:00:00Z",
      fork: false
    },
    {
      id: 998,
      name: "BLS Spain Appointment Bot",
      description: "Automated bot system for securing appointments at BLS Spain visa center. Features auto-login, captcha handling, and appointment booking automation.",
      html_url: "https://github.com/Haithemkoriche/BlsSpainAppointement",
      homepage: "",
      language: "JavaScript",
      topics: ["automation", "bot", "appointment", "visa", "tampermonkey"],
      stargazers_count: 2,
      forks_count: 2,
      created_at: "2023-05-10T00:00:00Z",
      updated_at: "2024-10-22T00:00:00Z",
      fork: false
    },
    {
      id: 997,
      name: "Vehicle Management System",
      description: "Comprehensive vehicle management application for tracking and managing fleet operations. Built with PHP and MySQL for efficient vehicle administration.",
      html_url: "https://github.com/Haithemkoriche/vehiculs-managment-system",
      homepage: "",
      language: "PHP",
      topics: ["php", "mysql", "vehicle-management", "fleet", "administration"],
      stargazers_count: 0,
      forks_count: 0,
      created_at: "2023-03-15T00:00:00Z",
      updated_at: "2024-09-18T00:00:00Z",
      fork: false
    },
    {
      id: 996,
      name: "Electric Station Management",
      description: "Management system for electric charging stations with user authentication, station monitoring, and charging session tracking.",
      html_url: "https://github.com/Haithemkoriche/elec-station",
      homepage: "",
      language: "PHP",
      topics: ["php", "electric-vehicles", "charging-station", "management"],
      stargazers_count: 0,
      forks_count: 0,
      created_at: "2023-01-20T00:00:00Z",
      updated_at: "2024-08-12T00:00:00Z",
      fork: false
    },
    {
      id: 995,
      name: "Academy School Management",
      description: "Educational institution management system for handling student registrations, course management, and academic administration.",
      html_url: "https://github.com/Haithemkoriche/acadmey_marame_school_gestion_inscription",
      homepage: "",
      language: "CSS",
      topics: ["education", "school-management", "student-registration", "academic"],
      stargazers_count: 0,
      forks_count: 0,
      created_at: "2022-11-10T00:00:00Z",
      updated_at: "2024-07-25T00:00:00Z",
      fork: false
    },
    {
      id: 994,
      name: "TBL Backend System",
      description: "Backend API system built with PHP for handling business logic and data management operations.",
      html_url: "https://github.com/Haithemkoriche/tbl_backend",
      homepage: "",
      language: "PHP",
      topics: ["php", "backend", "api", "business-logic"],
      stargazers_count: 0,
      forks_count: 0,
      created_at: "2022-09-05T00:00:00Z",
      updated_at: "2024-06-30T00:00:00Z",
      fork: false
    }
  ];

  const allProjects = loading ? featuredProjects : [...featuredProjects, ...projects];

  const getLanguageColor = (language: string) => {
    const colors: Record<string, string> = {
      JavaScript: 'bg-yellow-500',
      TypeScript: 'bg-blue-500',
      Python: 'bg-green-500',
      React: 'bg-cyan-500',
      Vue: 'bg-emerald-500',
      PHP: 'bg-purple-500',
      Java: 'bg-orange-500',
      'C++': 'bg-red-500',
      CSS: 'bg-blue-400',
      HTML: 'bg-orange-400',
    };
    return colors[language] || 'bg-gray-500';
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A showcase of my recent work and contributions to the developer community
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
          </motion.div>

          {/* Loading State */}
          {loading && (
            <motion.div variants={itemVariants} className="text-center">
              <div className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                <span>Loading projects from GitHub...</span>
              </div>
            </motion.div>
          )}

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {allProjects.slice(0, 6).map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Project Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${getLanguageColor(project.language)}`}></div>
                      <span className="text-sm text-gray-600 dark:text-gray-300">{project.language}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Star size={14} />
                        <span className="text-xs">{project.stargazers_count}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <GitFork size={14} />
                        <span className="text-xs">{project.forks_count}</span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {project.name}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                    {truncateText(project.description || 'No description available.', 120)}
                  </p>

                  {/* Topics */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.topics.slice(0, 3).map((topic) => (
                      <span
                        key={topic}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs font-medium"
                      >
                        {topic}
                      </span>
                    ))}
                    {project.topics.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-xs">
                        +{project.topics.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Updated Date */}
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-4">
                    <Calendar size={12} className="mr-1" />
                    Updated {formatDate(project.updated_at)}
                  </div>
                </div>

                {/* Project Footer */}
                <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700/50 border-t border-gray-200 dark:border-gray-600">
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-3">
                      <a
                        href={project.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                      >
                        <Github size={16} />
                        <span className="text-sm">Code</span>
                      </a>
                      {project.homepage && (
                        <a
                          href={project.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                        >
                          <ExternalLink size={16} />
                          <span className="text-sm">Live</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View More Button */}
          <motion.div variants={itemVariants} className="text-center">
            <a
              href={`https://github.com/${githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-medium rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-200 hover:scale-105"
            >
              <Github size={20} />
              <span>View All Projects on GitHub</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
