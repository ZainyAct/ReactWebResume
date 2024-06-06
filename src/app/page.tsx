"use client";

import Image from "next/image";
import GitStatic from "@/app/assets/git_static.png";
import GitGif from "@/app/assets/git.gif";
import LinkInStatic from "@/app/assets/linkedin_static.png";
import LinkInGif from "@/app/assets/linkedin.gif";
import ResStatic from "@/app/assets/res_static.png";
import ResGif from "@/app/assets/resume.gif";
import PortStatic from "@/app/assets/portfolio_static.png";
import PortGif from "@/app/assets/portfolio.gif";
import ContStatic from "@/app/assets/cont_static.png";
import ContGif from "@/app/assets/contacts.gif";
import Wait1 from "@/app/assets/ZainGifs/waiting1.gif";
import Wait2 from "@/app/assets/ZainGifs/waiting2.gif";
import Look from "@/app/assets/ZainGifs/lookingaround.gif";
import EyeOpen from "@/app/assets/ZainGifs/waiting1.gif";
import Aware from "@/app/assets/ZainGifs/aware.gif";
import Loading from '../components/loading';

import React, { useState, useEffect, useRef, Component } from "react";
import VantaBackground from "./VantaBackground.client";
import { motion, AnimatePresence } from "framer-motion"

// Array of image objects with their links and visual representations (static and GIF)
const images = [
  { link: "https://github.com/ZainyAct", vis: { static: GitStatic, gif: GitGif } },
  { link: "https://www.linkedin.com/in/zainmahmoud/", vis: { static: LinkInStatic, gif: LinkInGif } },
  { link: "./resume", vis: { static: ResStatic, gif: ResGif } },
  { link: "./assets/Documents/Portfolio_May2A-1.pdf", vis: { static: PortStatic, gif: PortGif } },
  { link: "./contact", vis: { static: ContStatic, gif: ContGif } },
];

// Array of GIFs for random display with associated chance of appearance
const zainGifs = [
  { chance: 80, gif: Wait1 },
  { chance: 80, gif: Wait2 },
  { chance: 50, gif: Look },
  { chance: 40, gif: EyeOpen },
  { chance: 35, gif: Aware },
];

// Text data to display with associated formats, animations, and delays
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



// Function to get a random GIF based on the chances specified
function getRandomGif(gifs: any[]) {
  const total = gifs.reduce((sum: number, gif: any) => sum + gif.chance, 0);
  const random = Math.random() * total;
  let accumulated = 0;

  for (let i = 0; i < gifs.length; i++) {
    accumulated += gifs[i].chance;
    if (random < accumulated) {
      console.log(gifs[i].gif)
      return gifs[i].gif;
    }
  }
}

// Component to render a circular arrangement of items (images with links)
function CircularThing() {
  const itemsInCircle = [];
  const count = images.length;
  const radius = 200;
  const [speed, setSpeed] = useState(25)
  const [angleOffset, setAngleOffset] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [circleVisible, setCircleVisible] = useState(false)

    // Set visibility of the circle after a delay
  useEffect(() => {
  const timeout = setTimeout(() => setCircleVisible(true), 6500);

  return () => {
    clearTimeout(timeout);
  };
  }, []);

    // Update angle offset to create rotation effect
  useEffect(() => {
    const maxAngle = Math.PI * 8;
    if (angleOffset < maxAngle) {
      const decayRate = 0.99; 
      let newSpeed = speed * decayRate; 

      if (newSpeed < 1) {
        newSpeed = 0; 
      }

      setTimeout(() => {
        setAngleOffset(prev => prev + 0.01 * newSpeed);
        setSpeed(newSpeed);
      }, 1000/30); 
    }
  }, [angleOffset, speed]);

  // Calculate positions for each item in the circle
  for (let i = 0; i < count; i++) {
    const angleRadians = i / count * Math.PI * 2 + angleOffset;
    const x = Math.cos(angleRadians) * radius;
    const y = Math.sin(angleRadians) * radius;

    itemsInCircle[i] = (
      <div
        key={i}
        className="absolute w-[6rem] h-[6rem] rounded-full z-10"
        style={{
          left: `50%`,
          top: `50%`,
          transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
        }}
      >
        <a href={images[i].link} target="_blank" rel="noopener noreferrer">
          <div className="relative w-full h-full rounded-full hover:animate-jump">
            <Image
              src={images[i].vis.static}
              alt=""
              className="w-full h-full absolute z-20 hover:opacity-0"
            />
            <Image
              src={images[i].vis.gif}
              alt=""
              className="w-full h-full absolute z-10 transition-opacity duration-500 ease-in-out hover:opacity-100"
            />
          </div>
        </a>
      </div>
    );
  }

  const [zainGif, setZainGif] = useState(zainGifs[0].gif);
  const zainGifImageRef = useRef<HTMLImageElement>(null);

  // Change GIF at regular intervals
  useEffect(() => {
    const timeGif = () => {
      setZainGif(getRandomGif(zainGifs));
    };

    const intervalId = setInterval(timeGif, 10000); 
    intervalRef.current = intervalId;

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current); 
      }
    };
  }, []);

  if (circleVisible){
    return (
      <div className={`relative w-[${radius*2.1}px] h-[${radius*2.1}px] animate-fade animate-duration-1000`}>
        {itemsInCircle}

        <div className="absolute w-[150px] h-[150px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <a href={"./about-me"} target="_blank" rel="noopener noreferrer">
            <Image
              src={zainGif}
              alt=""
              className="w-full h-full"
              ref={zainGifImageRef}
              style={{ transform: "scale(1.5)" }}
            />
          </a>
        </div>
      </div>
    );
  }
}

interface AnimatableTextProps {
  data: { format?: string, text: string, customDelay?: number, anim?: string }[];
  delayChildren?: number;
  parent: string;
}

// Define the AnimatableText component
function AnimatableText(props: AnimatableTextProps) {
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


// Main Home component
export default function Home() {


  return (
    <div className="relative w-screen h-screen flex flex-col items-center justify-center">
      <Loading func={<VantaBackground/>}/>
      <VantaBackground />

      <div className="roboto-slab absolute top-20 text-4xl text-white text-center grid grid-rows- p-2 gap-4" style={{ fontFamily: 'Roboto Slab' }}>
        <div className="grid justify-self-center grid-flow-col gap-2">
          <div className="animate-fade animate-once animate-duration-[2500ms] animate-delay-1000">
            Hi.
          </div>
          <div className="animate-fade animate-once animate-duration-[1000ms] animate-delay-[2000ms] animate-ease-in">
            I'm Zain.
          </div>
        </div>
        <div className="grid justify-self-center grid-flow-col gap-2">
          <div className="animate-fade animate-once animate-duration-[800ms] animate-delay-[3000ms] animate-ease-in">
            2A Mechatronics Engineer at the University of Waterloo
          </div>
        </div>

        <div className="grid grid-cols-6 gap-10">
          <div className="animate-jump-in animate-once animate-ease-out animate-delay-[3500ms]">
            AI Innovator
          </div>
          <div className="animate-jump-in animate-once animate-ease-out animate-delay-[4000ms]">
            Full Stack Architect
          </div>
          <div className="animate-jump-in animate-once animate-ease-out animate-delay-[4500ms]">
            PCB Design Expert
          </div>
          <div className="animate-jump-in animate-once animate-ease-out animate-delay-[5000ms]">
            Precision Machinist
          </div>
          <div className="animate-jump-in animate-once animate-ease-out animate-delay-[5500ms]">
            CAD Specialist
          </div>
          <div className="animate-jump-in animate-once animate-ease-out animate-delay-[6000ms]">
            Python Developer
          </div>
        </div>
      

      {/* <AnimatableText data={titleText.data} delayChildren={titleText.defaultDelay} parent={titleText.parent}/> */}
      <div className="flex justify-center" style={{ marginTop: '300px' }}>
        <CircularThing />
      </div>
    </div>
    </div>
  )}