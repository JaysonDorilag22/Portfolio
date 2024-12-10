import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import SkillsTools from './components/SkillsTools';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import { ModeToggle } from './components/mode-toggle';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Portfolio() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <ModeToggle />
      <motion.div initial="hidden" animate="visible" variants={sectionVariants} transition={{ duration: 0.5 }}>
        <Header />
      </motion.div>
      <motion.div initial="hidden" animate="visible" variants={sectionVariants} transition={{ duration: 0.5, delay: 0.2 }}>
        <AboutMe />
      </motion.div>
      <motion.div initial="hidden" animate="visible" variants={sectionVariants} transition={{ duration: 0.5, delay: 0.4 }}>
        <SkillsTools />
      </motion.div>
      <motion.div initial="hidden" animate="visible" variants={sectionVariants} transition={{ duration: 0.5, delay: 0.6 }}>
        <Education />
      </motion.div>
      <motion.div initial="hidden" animate="visible" variants={sectionVariants} transition={{ duration: 0.5, delay: 0.8 }}>
        <Experience />
      </motion.div>
      <motion.div initial="hidden" animate="visible" variants={sectionVariants} transition={{ duration: 0.5, delay: 1.0 }}>
        <Projects />
      </motion.div>
      <motion.div initial="hidden" animate="visible" variants={sectionVariants} transition={{ duration: 0.5, delay: 1.2 }}>
        <ContactMe />
      </motion.div>
    </div>
  );
}