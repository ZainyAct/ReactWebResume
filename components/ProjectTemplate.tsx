import React from 'react';
import Section from './Section';
import ImageGrid from './ImageGrid';
import Head from 'next/head';
import { motion } from 'framer-motion';
import AnimCursor from './anim_cursor';

interface SectionProps {
  title: string;
  description: string | JSX.Element;
  imageUrl?: string;
  imageAlt?: string;
  reverse?: boolean;
}


interface ProjectTemplateProps {
  sections: SectionProps[];
  projectTitle: string;
  projectDescription: string;
}

const ProjectTemplate: React.FC<ProjectTemplateProps> = ({ sections, projectTitle, projectDescription }) => {
  return (
    <div className="trans_body w-screen">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap" rel="stylesheet" />
      </Head>
      <div className="container p-6">
        <header className="mb-12 p-6 text-center pt-80">
          <motion.h1
            className="text-5xl font-bold text-white mb-2 hover:text-white"
            initial="initial"
            whileHover="hover"
            animate="initial"
            variants={{
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
            }}
          >
            {projectTitle}
          </motion.h1>
          <motion.p
            className="text-lg text-white"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {projectDescription}
          </motion.p>
        </header>

        {sections.map((section, index) => (
          <Section
            key={index}
            title={section.title}
            description={section.description}
            imageUrl={section.imageUrl}
            imageAlt={section.imageAlt}
            reverse={section.reverse}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectTemplate;
