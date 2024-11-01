import React from "react";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";

export function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section id="about" className="py-16 px-4">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center text-purple-600 dark:text-purple-400"
          {...fadeInUp}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div
            {...fadeInUp}
            className="relative w-64 h-64 rounded-full overflow-hidden shadow-xl"
          >
            <img
              src="/placeholder.svg?height=300&width=300"
              alt="Your Name"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <p className="text-lg mb-4">
              Hello! I'm a passionate web developer with expertise in React,
              Next.js, and modern web technologies. I love creating beautiful
              and functional websites that provide great user experiences.
            </p>
            <p className="text-lg mb-4">
              With a strong foundation in front-end development and a keen eye
              for design, I strive to build responsive and accessible web
              applications that make a difference.
            </p>
            <Button
              asChild
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              <a href="#contact">Let's work together</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
