"use client"
import React from 'react';
import ProjectTemplate from '../../../../components/components/ProjectTemplate';

const sections = [
  {
    title: 'Project Overview',
    description: 'Built a dynamic and interactive resume website to showcase my professional experience, projects, and skills. This website serves as a digital portfolio, providing potential employers and collaborators with a comprehensive view of my capabilities. It features a chatbot AI using Llama to replicate my interactions, offering an engaging and personalized user experience.',
    imageUrl: 'image1_url.jpg',
    imageAlt: 'Image 1 Description',
  },
  {
    title: 'Technical Implementation',
    description: (
      <>
        <p>Frontend Development: Utilized React for building a responsive and user-friendly interface. Ensured compatibility across various devices and browsers for optimal accessibility.</p>
        <p>Backend Development: Implemented using Node.js and Express.js to handle server-side operations, ensuring a robust and scalable architecture.</p>
        <p>Database Management: Employed Firebase for real-time data synchronization and SQLite3 for structured data storage, balancing real-time and historical data needs.</p>
        <p>AI Chatbot Integration: Developed a chatbot using Llama, which replicates personal interactions and provides users with information about professional experiences, skills, and projects.</p>
        <p>User Authentication: Incorporated secure user authentication to protect personal data and manage access to the website.</p>
        <p>Deployment and Hosting: Deployed the website on a reliable hosting service to ensure high availability and performance.</p>
      </>
    ),
    imageUrl: 'image2_url.jpg',
    imageAlt: 'Image 2 Description',
    reverse: true,
  },
  {
    title: 'Results and Impact',
    description: (
      <>
        <p>User Engagement: The AI chatbot enhanced user engagement by providing an interactive way to learn about professional experiences and projects.</p>
        <p>Professional Showcase: The website effectively showcased skills, projects, and experiences, serving as a dynamic and interactive resume.</p>
        <p>Technical Proficiency: Demonstrated advanced knowledge in full stack development, AI integration, and user experience design.</p>
      </>
    ),
    imageUrl: 'image3_url.jpg',
    imageAlt: 'Image 3 Description',
  },
  {
    title: 'Reflection',
    description: 'Building this resume website was a comprehensive exercise in full stack development and AI integration. It highlighted the importance of creating engaging user interfaces and leveraging AI to enhance user interaction. The project served as a platform to showcase technical skills and provided a dynamic way to present professional experiences.',
  },
  {
    title: 'Skills and Technologies Used',
    description: (
      <ul className="list-disc list-inside text-gray-800">
        <li className="hover:text-blue-500 transition duration-300">Frontend Development: React</li>
        <li className="hover:text-blue-500 transition duration-300">Backend Development: Node.js, Express.js</li>
        <li className="hover:text-blue-500 transition duration-300">Database Management: Firebase, SQLite3</li>
        <li className="hover:text-blue-500 transition duration-300">AI Integration: Llama</li>
        <li className="hover:text-blue-500 transition duration-300">User Authentication</li>
        <li className="hover:text-blue-500 transition duration-300">Deployment and Hosting</li>
      </ul>
    ),
  },
];


const projectTitle = 'Project Title';
const projectDescription = 'Short Project Description';

const ProjectPage = () => {
  return <ProjectTemplate sections={sections} projectTitle={projectTitle} />;
};

export default ProjectPage;
