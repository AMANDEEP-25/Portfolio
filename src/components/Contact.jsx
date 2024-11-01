import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Textarea } from "./ui/Textarea";
import { GithubIcon, Linkedin, Mail } from "lucide-react";

export function Contact() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section
      id="contact"
      className="py-16 px-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
    >
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center text-purple-600 dark:text-purple-400"
          {...fadeInUp}
        >
          Get in Touch
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.form
            className="space-y-4"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <Input type="text" placeholder="Your Name" required />
            <Input type="email" placeholder="Your Email" required />
            <Textarea placeholder="Your Message" rows={4} required />
            <Button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white"
            >
              Send Message
            </Button>
          </motion.form>
          <motion.div
            className="flex flex-col justify-center space-y-4"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            <Button
              variant="outline"
              asChild
              className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-400 dark:hover:text-gray-900"
            >
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon className="mr-2 h-4 w-4" /> GitHub
              </a>
            </Button>
            <Button
              variant="outline"
              asChild
              className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-400 dark:hover:text-gray-900"
            >
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </a>
            </Button>
            <Button
              variant="outline"
              asChild
              className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-400 dark:hover:text-gray-900"
            >
              <a href="mailto:your.email@example.com">
                <Mail className="mr-2 h-4 w-4" /> Email
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
