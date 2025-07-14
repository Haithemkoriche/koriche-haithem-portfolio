'use client';

import { motion } from 'framer-motion';
import { Database, Monitor, Server, Smartphone, Wrench } from 'lucide-react';
import { skills } from '@/data';
import { Skill } from '@/types';

export default function Skills() {
  const categoryIcons = {
    frontend: Monitor,
    backend: Server,
    database: Database,
    tools: Wrench,
    mobile: Smartphone,
  };

  const categoryColors = {
    frontend: 'from-blue-500 to-cyan-500',
    backend: 'from-green-500 to-emerald-500',
    database: 'from-orange-500 to-red-500',
    tools: 'from-purple-500 to-pink-500',
    mobile: 'from-indigo-500 to-blue-500',
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Always visible fallback header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-16"
        >
          {/* Skills Categories */}
          <div className="space-y-12">
            {skills.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400">Loading skills...</p>
              </div>
            ) : (
              Object.entries(groupedSkills).map(([category, categorySkills]) => {
                const Icon = categoryIcons[category as keyof typeof categoryIcons];
                const colorClass = categoryColors[category as keyof typeof categoryColors];

                return (
                <motion.div
                  key={category}
                  variants={itemVariants}
                  className="space-y-6"
                >
                  {/* Category Header */}
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${colorClass} text-white`}>
                      <Icon size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white capitalize">
                      {category}
                    </h3>
                  </div>

                  {/* Skills Grid */}
                  <motion.div
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {categorySkills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        variants={skillVariants}
                        whileHover={{ scale: 1.05 }}
                        className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {skill.name}
                          </h4>
                          <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                            {skill.level}%
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className={`h-full bg-gradient-to-r ${colorClass} rounded-full`}
                          />
                        </div>

                        {/* Skill Level Indicator */}
                        <div className="mt-3 flex justify-between text-xs text-gray-500 dark:text-gray-400">
                          <span>Beginner</span>
                          <span>Expert</span>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              );
            })
            )}
          </div>

          {/* Additional Skills */}
          <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Other Technologies I Work With
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'REST APIs', 'GraphQL', 'JWT', 'OAuth', 'WebSockets', 'PWA',
                'CI/CD', 'Agile', 'Scrum', 'Unit Testing', 'Integration Testing',
                'SEO', 'Performance Optimization', 'Responsive Design'
              ].map((tech) => (
                <motion.span
                  key={tech}
                  variants={skillVariants}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900 dark:hover:to-purple-900 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-300 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
