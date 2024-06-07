"use client"

import React from "react";
import AnimatedCursor from "react-animated-cursor";
import Image from "next/image";
import ReactPDF from "@react-pdf/renderer";

import GitStatic from "@/app/assets/git_static.png";
import { ProjectCards, ParticlesContainer } from "../components/cards-screen";
import Particles from 'react-tsparticles';

const resume: any = [
    {
        data: {
            title: 'Mechatronics Resume',
            description: 'Showcasing projects and skills in mechanical engineering, electronics, and computer science.',
            imageUrl: GitStatic,  // Replace with the actual path to your image
            link: './resume/mechRes',  // Replace with the actual link to your resume
            tags: ['Mechatronics', 'Mechanical Engineering', 'Electronics']
        }
    },
    {
        data: {
            title: 'Software Resume',
            description: 'Highlighting software development projects and expertise in various programming languages.',
            imageUrl: GitStatic,  // Replace with the actual path to your image
            link: './resume/softRes',  // Replace with the actual link to your resume
            tags: ['Software Development', 'Programming', 'Full Stack Development']
        }
    }
];



// Main page component
export default function Resume() {
    return (
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
    );
}

