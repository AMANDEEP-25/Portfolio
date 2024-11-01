import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";

export function Hero() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section className="pt-32 pb-16 px-4">
      <div className="container mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400"
          {...fadeInUp}
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.p
          className="text-xl mb-8"
          {...fadeInUp}
          transition={{ delay: 0.2 }}
        >
          I'm a passionate developer creating amazing web experiences
        </motion.p>
        <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
          <Button
            asChild
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            <a href="#contact">Get in touch</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
