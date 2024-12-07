"use client"
import React from 'react';
import ProjectTemplate from '../../../../../components/components/ProjectTemplate';
const AIMouse1 = '/assets/Portfolio/AIMouse/AIMouse1.png';
const AIMouse2 = '/assets/Portfolio/AIMouse/AIMouse2.png';
const AIMouse3 = '/assets/Portfolio/AIMouse/AIMouse3.png';

const sections = [
  {
    title: 'Project Overview',
    description: 'This project focused on developing an innovative hand gesture controlled mouse application, designed to track hand movements in real-time to perform mouse actions without the need for traditional input devices. Utilizing Python, OpenCV for gesture recognition, and PyAutoGUI for executing mouse commands, this application offers a groundbreaking approach to computer interaction, especially for users with physical disabilities or limited mobility.',
    image: AIMouse3,
    imageAlt: 'Image 1 Description',
  },
  {
    title: 'Technical Implementation',
    description: (
      <>
      <ul>
        <b className="list-disc list-inside text-gray-800 text-xl">Gesture Recognition:</b>
        <li>Employed OpenCV, a leading computer vision library, to accurately track hand movements and recognize predefined gestures.</li>
        <b className="list-disc list-inside text-gray-800 text-xl">Application Integration: </b>
        <li>Utilized PyAutoGUI for translating recognized gestures into mouse actions, such as cursor movement and clicks.</li>
        <b className="list-disc list-inside text-gray-800 text-xl">Performance Optimization:</b>
        <li>Implemented threading to ensure smooth performance, preventing lag between gesture recognition and action execution.</li>
        <b className="list-disc list-inside text-gray-800 text-xl">User Interface Design:</b>  
        <li>Developed a straightforward and intuitive interface that easily allows users to control their computer&#39;s mouse through hand gestures.</li>
        </ul>
      </>
    ),
    image: AIMouse1,
    imageAlt: 'Image 2 Description',
    reverse: true,
  },
  {
    title: 'Results and Impact',
    description: (
      <>
          <ul>
        <b className="text-gray-800 text-xl">Functionality:</b>
        <li>Successfully created a fully operational hand gesture controlled mouse, capable of understanding various commands like single-click, double-click, and cursor movement through hand gestures.</li>
        <b className="list-disc list-inside text-gray-800 text-xl">Accessibility: </b>
        <li> Provided an alternative method of interaction for individuals with physical disabilities or those who experience discomfort using traditional input devices, significantly enhancing accessibility and inclusivity.</li>
        <b className="list-disc list-inside text-gray-800 text-xl">Technical Proficiency:</b>
        <li>Demonstrated advanced knowledge in computer vision, human-computer interaction, and application development, showcasing the potential of gesture-based interfaces to revolutionize user experience.</li>
      </ul>
      </>
    ),
    image: AIMouse2,
    imageAlt: 'Image 3 Description',
  },
  {
    title: 'Reflection',
    description: 'This project exemplifies the practical application of computer vision and human-computer interaction principles to create a more accessible and intuitive user interface. It highlights the importance of innovation in technology to address real-world challenges, such as improving computer accessibility for individuals with limited mobility.',
  },
  {
    title: 'Skills and Technologies Used',
    description: (
      <ul>
        <b className="list-disc list-inside text-gray-800 text-xl">Computer Vision:</b>
        <li>Advanced proficiency with OpenCV for real-time hand tracking and gesture recognition.</li>
        <b className="list-disc list-inside text-gray-800 text-xl">Programming:</b>
        <li>Developed using Python, demonstrating strong coding skills and the ability to integrate various libraries.</li>
        <b className="list-disc list-inside text-gray-800 text-xl">Human-Computer Interaction:</b>
        <li>Implemented principles of human-computer interaction to design an application that is both effective and user-friendly.</li>
        <b className="list-disc list-inside text-gray-800 text-xl">Multi-threading:</b>
        <li>Utilized threading to enhance application performance, ensuring a seamless user experience.</li>
      </ul>
    ),
  },
];



const projectTitle = 'AIMouse';

const ProjectPage = () => {
  return <ProjectTemplate sections={sections} projectTitle={projectTitle} />;
};

export default ProjectPage;
