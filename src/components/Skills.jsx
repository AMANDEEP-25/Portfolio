import React from "react";
import { motion } from "framer-motion";
import { Progress } from "./ui/Progress";

const skills = [
  { name: "React", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "CSS", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "Python", level: 70 },
];

export function Skills() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section id="skills" className="py-16 px-4">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center text-purple-600 dark:text-purple-400"
          {...fadeInUp}
        >
          My Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md"
              {...fadeInUp}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
              <Progress
                value={skill.level}
                className="h-2 bg-gray-200 dark:bg-gray-600"
              >
                <div
                  className="h-full bg-purple-600 dark:bg-purple-400 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </Progress>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
