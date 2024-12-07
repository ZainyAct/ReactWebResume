"use client"

import React from "react";
import AnimatedCursor from "react-animated-cursor";
import Image from "next/image";
import ReactPDF from "@react-pdf/renderer";
import {motion as m} from "framer-motion"
import Loading from '../../../components/components/loading';

const GitStatic = "/assets/git_static.png";
import { ProjectCards } from "../../../components/components/cards-screen";
import Particles from 'react-tsparticles';

const resume: any = [
    {
        data: {
            title: 'Mechatronics Resume',
            description: 'Showcasing projects and skills in mechanical engineering, electronics, and computer science.',
            imageUrl: '/resumes/mech.gif',  // Replace with the actual path to your image
            link: '/resumes/MechatronicsResume.pdf',  // Direct link to the PDF in the public folder
            tags: ['Mechatronics', 'Mechanical Engineering', 'Electronics']
        }
    },
    {
        data: {
            title: 'Software Resume',
            description: 'Highlighting software development projects and expertise in various programming languages.',
            imageUrl: '/resumes/coding.gif',  // Replace with the actual path to your image
            link: '/resumes/SoftwareResume.pdf',  // Direct link to the PDF in the public folder
            tags: ['Software Development', 'Programming', 'Full Stack Development']
        }
    }
];




// Main page component
export default function Resume() {
    return (
        <div className="gradient relative w-screen h-screen flex flex-col items-center justify-center">
            <div className="flex items-center justify-center w-screen h-screen light">
                {/* <Particles id="light"/> */}
                <AnimatedCursor
                    innerSize={8}
                    outerSize={35}
                    innerScale={1}
                    outerScale={2}
                    outerAlpha={0}
                    innerStyle={{
                        backgroundColor: 'var(--cursor-color)'
                    }}
                    outerStyle={{
                        border: '3px solid var(--cursor-color)'
                    }}
                />
                
                <ProjectCards projects={resume} />
            </div>
        </div>
    );
}

