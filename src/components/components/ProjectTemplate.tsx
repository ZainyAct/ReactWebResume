import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Head from 'next/head';
import { motion } from 'framer-motion';
import AnimCursor from './anim_cursor';
import Image, { StaticImageData } from 'next/image';


interface SectionProps {
  title: string;
  description: string | JSX.Element;
  image?: string | StaticImageData;
  imageAlt?: string;
  reverse?: boolean;
}

interface ProjectTemplateProps {
  sections: SectionProps[];
  projectTitle: string;
}

const ProjectTemplate: React.FC<ProjectTemplateProps> = ({ sections, projectTitle }) => {
  return (
    <div className="trans_body w-screen min-h-screen" style={{ marginTop: '130rem' }}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap" rel="stylesheet" />
      </Head>
      <AnimCursor />

      <div className="card p-6 mx-auto">
        {/* Header Section */}
        <header className="header mb-12 text-center pt-20">
          <motion.h1
            className="text-6xl font-semibold text-black mb-4"
            initial="initial"
            whileHover="hover"
            animate="variants"
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
                
                fontWeight: 550,
                fontSize: '2.5rem',
                rotate: 0,
                transition: {
                  duration: 0.3,
                },
              },
            }}
          >
            {projectTitle}
          </motion.h1>
        </header>

        {/* Sections */}
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className={`flex flex-col ${section.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >

            {/* Text Content */}
            <div className="w-full lg:w-1/2 p-4">
              <Card className="card bg-gray-700 text-white">
                <CardHeader>
                  <CardTitle className="font-bold mb-4 flex justify-center">{section.title}</CardTitle>
                  <CardContent className="text-lg text-gray-300">
                    {section.description}
                  </CardContent>
                </CardHeader>
              </Card>
            </div>
            
            {/* Image */}
            {section.image && (
            <div className="w-full lg:w-1/2 p-4">
              {typeof section.image === 'string' ? (
                <img
                  src={section.image}
                  alt={section.imageAlt}
                  className="rounded-lg shadow-lg object-cover w-full h-full"
                />
              ) : (
                <Image
                  src={section.image}
                  alt={section.imageAlt || 'Project image'}
                  className="rounded-lg shadow-lg object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                  placeholder="blur"
                />
              )}
            </div>
            )}
          </motion.div> 
         ))}
      </div>
    </div>
  );
};

export default ProjectTemplate;
