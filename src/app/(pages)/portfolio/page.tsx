"use client"

import React from "react";
import AnimatedCursor from "react-animated-cursor";
import GitStatic from "@/app/assets/git_static.png";
import { ProjectCards } from "../../../components/components/cards-screen";
import AnimCursor from "../../../components/components/anim_cursor";

// Array of project objects containing data about each project
const projects: any = [
    {
        data: {
            title: 'Indoor Air Quality Relay (AQR)',
            description: 'AI-enhanced air quality and security monitoring system using Raspberry Pi and Flask.',
            imageUrl: GitStatic,
            link: '/portfolio/projects/AIMouse',
            tags: ['AI', 'Automation', 'Full Stack Development']
        }
    },
    {
        data: {
            title: 'Autonomous Greenhouse',
            description: 'Smart greenhouse system with automated environmental control and Flask-based monitoring.',
            imageUrl: GitStatic,
            link: '/portfolio/projects/AutoGreenhouse',
            tags: ['Automation', 'IoT', 'Full Stack Development']
        }
    },
    {
        data: {
            title: 'Lego 3D Printer',
            description: 'Functional 3D printer built from Tetrix and LEGO elements with precise motor control.',
            imageUrl: GitStatic,
            link: '/portfolio/projects/LegoPrinter',
            tags: ['3D Printing', 'Mechanical Engineering']
        }
    },
    {
        data: {
            title: 'Hand Gesture Controlled Mouse',
            description: 'Innovative hand gesture controlled mouse using OpenCV for real-time tracking.',
            imageUrl: GitStatic,
            link: '/portfolio/projects/AIMouse',
            tags: ['Computer Vision', 'Accessibility']
        }
    },
    {
        data: {
            title: 'Smart HUD Glasses',
            description: 'Wearable glasses with AI-powered facial recognition and real-time language translation.',
            imageUrl: GitStatic,
            link: './portfolio/projects/SmartGlasses',
            tags: ['AI', 'Wearable Technology', 'Full Stack Development']
        }
    },
    // {
    //     data: {
    //         title: "...More on it's way!",
    //         description: 'Stay tuned for more project development information',
    //         imageUrl: GitStatic,
    //         link: '#',
    //         tags: ['']
    //     }
    // }
];

// Main page component
export default function Portfolio() {
    return (
    <div className="trans_body flex items-center justify-center w-screen h-screen light">
    <AnimCursor />
    <ProjectCards projects={projects} />
    </div>
);
}