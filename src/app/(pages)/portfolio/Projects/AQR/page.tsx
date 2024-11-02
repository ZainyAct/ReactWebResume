"use client"
import React from 'react';
import ProjectTemplate from '../../../../../../components/ProjectTemplate';

const sections = [
    {
      title: 'Project Overview',
      description: 'For students residing away from home, this enhanced project integrates AI camera vision with an air quality monitoring and automation system. It monitors crucial air quality parameters like CO2, particulate matter, ozone, temperature, and humidity, alongside bolstering security with AI-powered surveillance. The system also leverages a local web server for real-time data visualization and management, crucial for informed decision-making regarding indoor air quality and security.',
      imageUrl: 'image1_url.jpg',
      imageAlt: 'Image 1 Description',
    },
    {
      title: 'Technical Implementation',
      description: (
        <>
          <p>Air Quality Monitoring: A Raspberry Pi collects comprehensive air quality data, with a Flask web server deployed for dynamic data presentation and accessibility.</p>
          <p>Automation: Utilizes another Raspberry Pi to automate devices based on air quality readings, actively optimizing the living environment according to predefined standards.</p>
          <p>AI Camera Vision: Enhances security by monitoring for unauthorized access, with machine learning algorithms analyzing footage to send instant alerts for any detected anomalies.</p>
          <p>Software and Libraries: Python and Adafruit facilitate sensor data processing, Matplotlib for graphical visualization, and TensorFlow for intelligent analysis of security footage.</p>
          <p>Web Server Integration: The Flask web server offers a user-friendly interface for students to monitor their living space’s air quality in real-time, alongside receiving immediate updates on security breaches.</p>
          <p>Full Stack Development: Utilized SQLite3 for data storage and Node.js with Express.js for the backend server, ensuring robust and scalable system architecture.</p>
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
          <p>CO2 Levels: Reduced by up to 25%, maintaining below 800 ppm for optimal cognitive function.</p>
          <p>Particulate Matter: Decreased by over 30%, keeping levels well under the WHO guideline of 10 µg/m³.</p>
          <p>Humidity and Temperature: Consistently within the ideal range of 40-60% RH and 20-22°C, respectively.</p>
          <p>Ozone: Reduced indoor levels by 20%, reducing respiratory risks.</p>
          <p>Security: The AI camera's effectiveness in detecting unauthorized activities stands at 95%, significantly increasing the security of students’ accommodations.</p>
        </>
      ),
      imageUrl: 'image3_url.jpg',
      imageAlt: 'Image 3 Description',
    },
    {
      title: 'Reflection',
      description: 'The AQR project was an enlightening fusion of theory and practice, emphasizing the critical interplay between technology and environmental well-being. It underscored the significant impact engineers have on improving life through innovation.',
    },
    {
      title: 'Skills and Technologies Used',
      description: (
        <ul className="list-disc list-inside text-gray-800">
          <li className="hover:text-blue-500 transition duration-300">Environmental Monitoring: Enhanced expertise in using sensors to measure vital air quality metrics such as CO2, particulate matter, and humidity, highlighting an understanding of environmental science.</li>
          <li className="hover:text-blue-500 transition duration-300">Full Stack Development: SQLite3, Node.js, Express.js</li>
          <li className="hover:text-blue-500 transition duration-300">Microcontroller Programming: Advanced programming skills with Raspberry Pi microcontrollers for data collection, demonstrating proficiency in software development.</li>
          <li className="hover:text-blue-500 transition duration-300">Data Visualization: Employed Flask and Matplotlib for web-based data presentation, showcasing web development and graphical data representation skills.</li>
          <li className="hover:text-blue-500 transition duration-300">Automated Control Systems: Engineered relay control systems for device automation based on environmental data, reflecting knowledge in electrical engineering and automation.</li>
          <li className="hover:text-blue-500 transition duration-300">Innovation: Showcased innovative problem-solving by integrating diverse technologies to address environmental challenges, emphasizing the role of engineering in crafting sustainable solutions.</li>
        </ul>
      ),
    },
  ];
  


const projectTitle = 'Project Title';
const projectDescription = 'Short Project Description';

const ProjectPage = () => {
  return <ProjectTemplate sections={sections} projectTitle={projectTitle} projectDescription={projectDescription} />;
};

export default ProjectPage;
