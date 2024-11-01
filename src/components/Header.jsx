import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function Header({ darkMode, toggleDarkMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-md"
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-purple-600 dark:text-purple-400">Your Name</a>
        <div className="hidden md:flex space-x-4">
          <a href="#projects" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Skills</a>
          <a href="#about" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">About</a>
          <a href="#contact" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Contact</a>
        </div>
        <div className="flex items-center space-x-4">
          <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
            {darkMode ? '🌞' : '🌙'}
          </button>
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"
          >
            <a href="#projects" className="block py-2 px-4 hover:bg-purple-100 dark:hover:bg-purple-800" onClick={() => setMobileMenuOpen(false)}>Projects</a>
            <a href="#skills" className="block py-2 px-4 hover:bg-purple-100 dark:hover:bg-purple-800" onClick={() => setMobileMenuOpen(false)}>Skills</a>
            <a href="#about" className="block py-2 px-4 hover:bg-purple-100 dark:hover:bg-purple-800" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#contact" className="block py-2 px-4 hover:bg-purple-100 dark:hover:bg-purple-800" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}