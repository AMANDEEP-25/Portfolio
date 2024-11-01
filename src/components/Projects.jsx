import React from "react";

import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React and Node.js",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "AI Chatbot",
    description: "An intelligent chatbot powered by machine learning",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    description:
      "A comprehensive analytics dashboard for social media management",
    image: "/placeholder.svg?height=200&width=300",
  },
];

export function Projects() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section
      id="projects"
      className="py-16 px-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
    >
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center text-purple-600 dark:text-purple-400"
          {...fadeInUp}
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              {...fadeInUp}
              transition={{ delay: index * 0.2 }}
            >
              <img
                src={project.image}
                alt={project.title}
                width={300}
                height={200}
                className="w-full"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-purple-600 dark:text-purple-400">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
