import React from 'react';
import { motion } from 'framer-motion';

const headingVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.2, duration: 0.8 } },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { type: 'spring', bounce: 0.3, duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const HeroSection = () => (
  <section className="bg-gradient-to-br from-[#0a174e] to-[#1a2a6b] text-white py-20 px-4">
    <div className="max-w-6xl mx-auto text-center">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.7 }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent"
          variants={headingVariants}
        >
          Unlock Your Potential
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto"
          variants={headingVariants}
        >
          Join OponMeta's comprehensive learning platform and transform your career with world-class courses, mentorship, and hands-on workshops.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={staggerContainer}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-lg font-bold rounded-lg shadow-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-200"
            variants={buttonVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Learning Now
          </motion.button>
          <motion.button
            className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 text-lg font-bold rounded-lg hover:bg-yellow-400 hover:text-[#0a174e] transition-all duration-200"
            variants={buttonVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Courses
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection; 