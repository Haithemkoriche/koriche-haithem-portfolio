'use client';

import { motion } from 'framer-motion';
import { Code, Coffee, Lightbulb, Users } from 'lucide-react';
import { personalInfo } from '@/data';

export default function About() {
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

  const stats = [
    { icon: Code, label: 'Projects Completed', value: '50+' },
    { icon: Coffee, label: 'Cups of Coffee', value: '1000+' },
    { icon: Lightbulb, label: 'Problems Solved', value: '200+' },
    { icon: Users, label: 'Happy Clients', value: '25+' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
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
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Passionate Developer with a Vision
              </h3>
              
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  Hello! I&apos;m {personalInfo.name}, a dedicated full-stack developer with a passion for creating 
                  innovative digital solutions. My journey in web development started several years ago, and 
                  I&apos;ve been fascinated by the endless possibilities of turning ideas into reality through code.
                </p>
                
                <p>
                  I specialize in modern web technologies including React, Node.js, and TypeScript, with a 
                  strong focus on creating user-friendly applications that solve real-world problems. I believe 
                  in writing clean, maintainable code and following best practices to deliver high-quality solutions.
                </p>
                
                <p>
                  When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source 
                  projects, or sharing knowledge with the developer community. I&apos;m always eager to take on new 
                  challenges and collaborate with talented teams to build amazing products.
                </p>
              </div>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-3"
              >
                {['Problem Solving', 'Team Collaboration', 'Continuous Learning', 'Innovation'].map((trait) => (
                  <span
                    key={trait}
                    className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                  >
                    {trait}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* Visual Element */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl transform rotate-3"></div>
                <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-8">
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">KH</span>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">{personalInfo.name}</h4>
                      <p className="text-gray-600 dark:text-gray-300">{personalInfo.title}</p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Frontend</span>
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <div key={i} className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Backend</span>
                        <div className="flex space-x-1">
                          {[...Array(4)].map((_, i) => (
                            <div key={i} className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          ))}
                          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 dark:text-gray-300">DevOps</span>
                        <div className="flex space-x-1">
                          {[...Array(3)].map((_, i) => (
                            <div key={i} className="w-2 h-2 bg-green-500 rounded-full"></div>
                          ))}
                          {[...Array(2)].map((_, i) => (
                            <div key={i} className="w-2 h-2 bg-gray-300 rounded-full"></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center group"
              >
                <div className="relative inline-block mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    <stat.icon size={24} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
