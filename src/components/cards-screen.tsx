import React, {useCallback} from "react";
import AnimatedCursor from "react-animated-cursor";
import Image from "next/image";
import GitStatic from "@/app/assets/git_static.png";
import { loadFull } from 'tsparticles';

// Component to initialize and configure particles
export const ParticlesContainer = (props: {id: any, init: any}) => {
const customInit = useCallback(async (engine: any) => {
// Load all particles bundles
await loadFull(engine);

// Define the "lightdark" preset with specific particle configurations
await engine.addPreset('lightdark', {
    fullScreen: {
    enable: false,
    },
    particles: {
    links: {
        enable: true,
    },
    move: {
        enable: true,
    },
    number: {
        value: 50,
    },
    opacity: {
        value: { min: 0.3, max: 1 },
    },
    shape: {
        type: ['circle', 'square', 'triangle', 'polygon'],
        options: {
        polygon: [
            { sides: 5 },
            { sides: 6 },
            { sides: 8 },
        ],
        },
    },
    size: {
        value: { min: 1, max: 3 },
    },
    },
});

// Load particles with different color options
await engine.load({
    id: 'light',
    options: {
    preset: 'lightdark',
    particles: {
        color: { value: '#191970' },
        links: { color: '#191970' },
    },
    },
});

await engine.load({
    id: 'dark',
    options: {
    preset: 'lightdark',
    particles: {
        color: { value: '#E0FFFF' },
        links: { color: '#E0FFFF' },
    },
    },
});
}, []);
}

// Component to display project cards
export const ProjectCards = (props: { projects: any }) => {
    return (
        
        <div className="w-screen h-screen flex align-center justify-center flex-row">
            <div className="grid grid-cols-3 gap-5 p-20 grid-flow">
                {props.projects.map((project:any, index: any) => (
                    <a key={index} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700" href={project.data.link}>
                        <Image className="hover:animate-wiggle hover:animate-infinite text-justify object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={project.data.imageUrl} alt={project.data.title} />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.data.title}</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.data.description}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

