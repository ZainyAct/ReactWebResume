"use client"
import React from 'react';
import ProjectTemplate from '../../../../../components/components/ProjectTemplate';


const sections = [
    {
      title: 'Project Overview',
      description: 'The HUD Glasses project is a significant advancement in wearable technology, integrating AI capabilities with user-friendly design principles to enhance everyday interactions. Powered by a Raspberry Pi Zero 2 and equipped with a Pi Camera, these glasses utilize sophisticated hardware components to enable features such as facial recognition and real-time language translation. The software, leveraging tools like OpenCV and Deep Translator, ensures seamless performance and intuitive user experiences.',
      imageUrl: 'image1_url.jpg',
      imageAlt: 'Image 1 Description',
    },
    {
      title: 'Technical Implementation',
      description: (
        <>
          <p>Facial Recognition with OpenCV: Leveraged OpenCV&#39;s advanced facial recognition capabilities to enable the glasses to identify individuals in real-time. Implemented robust algorithms to detect and analyze facial features, ensuring accurate and reliable recognition performance. Optimized the software to run efficiently on the Raspberry Pi Zero 2, balancing computational complexity with real-time processing requirements.</p>
          <p>Real-time Language Translation: Implemented Deep Translator for real-time language translation, seamlessly integrating it with the HUD display and bone conduction headphones, facilitating effortless cross-language communication.</p>
          <p>Speech Recognition & Audio Output: Utilized SpeechRecognition for converting spoken language to text, enabling user interaction. Integrated gTTS to generate clear audio from translated text, ensuring natural-sounding output.</p>
          <p>3D Printed Frame Design: Utilized SolidWorks for frame design, ensuring precise dimensions and ergonomic fit, and PrusaSlicer for prototype printing, enabling rapid iteration and customization.</p>
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
          <p>Seamless Communication and Enhanced Understanding: Enabled users to communicate effectively across language barriers, fostering greater understanding and collaboration in diverse environments. Empowered individuals with hearing impairments to participate in conversations by providing real-time text and audio translations.</p>
          <p>Intuitive Interaction and Accessibility Features: Designed an intuitive user interface with minimal learning curve, allowing users to quickly adapt to the functionality of the glasses. Incorporated accessibility features such as customizable font sizes and color schemes to accommodate users with varying visual preferences and needs.</p>
          <p>Pioneering the Future of Wearable Technology: Positioned the HUD Glasses as a trailblazer in the field of wearable AI technology, setting a new standard for innovation and usability. Sparked interest and excitement among users and industry professionals alike, paving the way for further advancements in the wearable technology landscape.</p>
        </>
      ),
      imageUrl: 'image3_url.jpg',
      imageAlt: 'Image 3 Description',
    },
    {
      title: 'Reflection',
      description: 'The HUD Glasses project represents a culmination of collaborative effort, technical expertise, and a shared vision for leveraging technology to improve lives. As we reflect on our journey, we are proud of the strides we have made in pushing the boundaries of what is possible with wearable devices. Moving forward, we remain committed to refining and expanding upon our innovations, with a steadfast dedication to enhancing user experiences and fostering inclusivity through technology.',
    },
    {
      title: 'Skills and Technologies Used',
      description: (
        <ul className="list-disc list-inside text-gray-800">
          <li className="hover:text-blue-500 transition duration-300">Python programming: Leveraged Python for rapid prototyping and development of the AI-driven functionalities of the HUD Glasses.</li>
          <li className="hover:text-blue-500 transition duration-300">OpenCV: Employed OpenCV for facial recognition and image processing tasks, ensuring accurate and reliable performance in real-world scenarios.</li>
          <li className="hover:text-blue-500 transition duration-300">Deep Translator: Integrated Deep Translator to provide seamless language translation capabilities, enabling cross-lingual communication in real-time.</li>
          <li className="hover:text-blue-500 transition duration-300">SpeechRecognition: Utilized SpeechRecognition for converting spoken language into text, facilitating natural and intuitive user interactions.</li>
          <li className="hover:text-blue-500 transition duration-300">gTTS: Integrated gTTS for generating spoken audio from translated text, delivering clear and natural-sounding output to the user.</li>
          <li className="hover:text-blue-500 transition duration-300">Raspberry Pi Zero 2: Utilized the Raspberry Pi Zero 2 as the hardware platform for running the AI software and driving the functionality of the HUD Glasses.</li>
          <li className="hover:text-blue-500 transition duration-300">Pi Camera: Integrated a Pi Camera for capturing images and video, enhancing the facial recognition capabilities of the glasses.</li>
          <li className="hover:text-blue-500 transition duration-300">3D Printed Frame: Designed and printed a custom 3D frame to house the hardware components, ensuring a comfortable and ergonomic fit for the user.</li>
          <li className="hover:text-blue-500 transition duration-300">Debian OS: Deployed the Debian operating system to provide a stable and reliable platform for running the software stack of the HUD Glasses.</li>
        </ul>
      ),
    },
  ];
  

const projectTitle = 'Project Title';
const projectDescription = 'Short Project Description';

const ProjectPage = () => {
  return <ProjectTemplate sections={sections} projectTitle={projectTitle}/>;
};

export default ProjectPage;
