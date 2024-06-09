"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef, Component } from "react";
import { motion as m, AnimatePresence } from "framer-motion"


const titleText: { data: { format?: string, text: any, customDelay?: number, anim?: string }[], delayChildren?: number, parent: string } = {
    data: [
        { format: 'items-center justify-center grid grid-cols-2', text: "Hi.", anim: "animate-fade animate-once animate-duration-[2500ms]", customDelay: 1000 },
        { text: "I'm Zain", anim: "animate-fade animate-once animate-duration-[1000ms] animate-ease-in", customDelay: 500 },
        { format: 'items-center justify-center grid grid-cols-1', text: "2A Mechatronics Engineer at the University of Waterloo", anim: "animate-fade animate-once animate-duration-[800ms] animate-ease-in" },
        { format: 'items-start justify-items-center flex-row', text: "AI Innovator", anim: "animate-jump-in animate-once animate-ease-out animate-delay" },
        { text: "Full Stack Architect", anim: "animate-jump-in animate-once animate-ease-out animate-delay" },
        { text: "PCB Design Expert", anim: "animate-jump-in animate-once animate-ease-out animate-delay" },
        { text: "Precision Machinist", anim: "animate-jump-in animate-once animate-ease-out animate-delay" },
        { text: "CAD Specialist", anim: "animate-jump-in animate-once animate-ease-out animate-delay" },
        { text: "Python Developer", anim: "animate-jump-in animate-once animate-ease-out animate-delay" },
        { format: 'items-center justify-center flex-row', text: "You Name It.", anim: "animate-jump-in animate-once animate-ease-out animate-delay" },
    ],
    delayChildren: 500,
    parent: 'grid grid-rows-4 roboto-slab absolute top-20 text-4xl text-center',
    };

interface AnimatableTextProps {
    data: { format?: string, text: string, customDelay?: number, anim?: string }[];
    delayChildren?: number;
    parent: string;
}

// Define the AnimatableText component
export default function AnimatableText(props: AnimatableTextProps) {
// Set default delay to 500 milliseconds if not provided in props
const defaultDelay = props.delayChildren ?? 500;

// State to keep track of elapsed time
const [currentTime, setCurrentTime] = useState(0);

// State to store the components to render
const [componentsToRender, setComponentsToRender] = useState<JSX.Element[]>([]);

// Effect to update current time at regular intervals
useEffect(() => {
    const updateTime = () => {
    // Update currentTime by adding the defaultDelay
    setCurrentTime((prevTime) => prevTime + defaultDelay);
    };

    // Set interval to update time based on defaultDelay
    const interval = setInterval(updateTime, defaultDelay);
    return () => clearInterval(interval); // Clear interval on component unmount
}, [defaultDelay]);

// Effect to render components based on current time and data
useEffect(() => {
    const newComponents: JSX.Element[] = [];
    let currentFormat: string = props.data[0]?.format ?? '';
    let currentAnim: string = props.data[0]?.anim ?? '';

    for (let i = 0; i < props.data.length; i++) {
    // Check if the currentTime is greater than or equal to the required delay for each component
    if (currentTime >= (defaultDelay * i) + (props.data[i].customDelay ?? 0)) {



        // If the format or anim has changed, update currentFormat and/or currentAnim and push new component with format and anim classes
        if (props.data[i].format && props.data[i].format !== currentFormat) {
        currentFormat = props.data[i].format!;
        }

        if (props.data[i].anim && props.data[i].anim !== currentAnim) {
        currentAnim = props.data[i].anim!;
        }

        newComponents.push(
        <div key={`format-${i}`} className={currentFormat}>
            <div key={`anim-${i}`} className={currentAnim}>
            {props.data[i].text}
            </div>
        </div>
        );
    }
    }

    // Update componentsToRender with new components
    setComponentsToRender(newComponents);
}, [currentTime, defaultDelay, props.data]);

// Render the components stored in componentsToRender
return (
    <div className={props.parent} style={{ fontFamily: 'Roboto Slab' }}>
    {componentsToRender}
    </div>
);
}