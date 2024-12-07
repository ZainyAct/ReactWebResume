import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  title: string;
  description: string | JSX.Element;
  imageUrl?: string;
  imageAlt?: string;
  reverse?: boolean;
}

const wiggle = {
  hover: {
    scale: 1.1,
    rotate: [0, -2, 2, -2, 2, 0],
    transition: {
      duration: 0.3,
      yoyo: 1,
    },
  },
  initial: {
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const Section: React.FC<SectionProps> = ({ title, description, imageUrl, imageAlt, reverse }) => {
  return (
    <section className="mb-12 flex flex-col items-center">
      <motion.div
        className="text-center text-3xl font-semibold text-white mb-4 hover:text-white"
        initial="initial"
        whileHover="hover"
        animate="initial"
        variants={wiggle}
      >
        {title}
      </motion.div>
      <div className={`p-6 bg-white bg-opacity-75 rounded-lg shadow-lg relative flex ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center`}>
        <motion.div
          className="text-gray-800 flex-grow"
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {description}
        </motion.div>
        {imageUrl && (
          <motion.img
            src={imageUrl}
            alt={imageAlt}
            className="w-32 h-32 rounded-lg shadow-lg mt-4 md:mt-0 md:ml-6"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
        )}
      </div>
    </section>
  );
};

export default Section;
