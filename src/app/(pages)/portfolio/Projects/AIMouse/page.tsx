"use client"
import React from 'react';
import ProjectTemplate from '../../../../../../components/ProjectTemplate';

const sections = [
  {
    title: 'Project Overview',
    description: 'This project focused on developing an innovative hand gesture controlled mouse application, designed to track hand movements in real-time to perform mouse actions without the need for traditional input devices. Utilizing Python, OpenCV for gesture recognition, and PyAutoGUI for executing mouse commands, this application offers a groundbreaking approach to computer interaction, especially for users with physical disabilities or limited mobility.',
    imageUrl: 'image1_url.jpg',
    imageAlt: 'Image 1 Description',
  },
  {
    title: 'Technical Implementation',
    description: (
      <>
        <p>Gesture Recognition: Employed OpenCV, a leading computer vision library, to accurately track hand movements and recognize predefined gestures.</p>
        <p>Application Integration: Utilized PyAutoGUI for translating recognized gestures into mouse actions, such as cursor movement and clicks.</p>
        <p>Performance Optimization: Implemented threading to ensure smooth performance, preventing lag between gesture recognition and action execution.</p>
        <p>User Interface Design: Developed a straightforward and intuitive interface that easily allows users to control their computer's mouse through hand gestures.</p>
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
        <p>Functionality: Successfully created a fully operational hand gesture controlled mouse, capable of understanding various commands like single-click, double-click, and cursor movement through hand gestures.</p>
        <p>Accessibility: Provided an alternative method of interaction for individuals with physical disabilities or those who experience discomfort using traditional input devices, significantly enhancing accessibility and inclusivity.</p>
        <p>Technical Proficiency: Demonstrated advanced knowledge in computer vision, human-computer interaction, and application development, showcasing the potential of gesture-based interfaces to revolutionize user experience.</p>
      </>
    ),
    imageUrl: 'image3_url.jpg',
    imageAlt: 'Image 3 Description',
  },
  {
    title: 'Reflection',
    description: 'This project exemplifies the practical application of computer vision and human-computer interaction principles to create a more accessible and intuitive user interface. It highlights the importance of innovation in technology to address real-world challenges, such as improving computer accessibility for individuals with limited mobility.',
  },
  {
    title: 'Skills and Technologies Used',
    description: (
      <ul className="list-disc list-inside text-gray-800">
        <li className="hover:text-blue-500 transition duration-300">Computer Vision: Advanced proficiency with OpenCV for real-time hand tracking and gesture recognition.</li>
        <li className="hover:text-blue-500 transition duration-300">Programming: Developed using Python, demonstrating strong coding skills and the ability to integrate various libraries.</li>
        <li className="hover:text-blue-500 transition duration-300">Human-Computer Interaction: Implemented principles of human-computer interaction to design an application that is both effective and user-friendly.</li>
        <li className="hover:text-blue-500 transition duration-300">Multi-threading: Utilized threading to enhance application performance, ensuring a seamless user experience.</li>
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
