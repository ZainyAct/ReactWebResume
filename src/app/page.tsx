"use client";

import Loading from '../components/components/loading';
import React, { Suspense } from 'react';
import VantaBackground from "./VantaBackground.client";
import { motion as m } from "framer-motion";
import CircularThing from '../components/components/circularthing';

const item = {
  hiddenCirc: { opacity: 0 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeIn",
      duration: 1.6,
    },
  },
  showCirc: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeIn",
      duration: 1.6,
      delay: 5.5,
    },
  },
  exit: {
    opacity: 0,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 2,
    },
  },
  showLoad: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.1, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exitLoad: {
    opacity: 0,
    y: 0,
    transition: {
      ease: "easeIn",
      duration: 2,
    },
  },
};

// Main Home component
export default function Home() {
  return (
    <Suspense fallback={<Loading func={<VantaBackground />} />}>
      <div className="relative w-screen h-screen flex flex-col items-center justify-center">
        <m.div animate={item.show} initial={item.exit}>
          <VantaBackground />
        </m.div>
        
        <m.div animate={item.exitLoad} initial={item.showLoad}>
          <Loading func={<VantaBackground />} />
        </m.div>

        <div className="roboto-slab absolute top-20 text-4xl text-white text-center grid grid-rows- p-2 gap-4" style={{ fontFamily: 'Roboto Slab' }}>
          <div className="grid justify-self-center grid-flow-col gap-2">
            <div className="animate-fade animate-once animate-duration-[2500ms] animate-delay-1000">Hi.</div>
            <div className="animate-fade animate-once animate-duration-[1000ms] animate-delay-[2000ms] animate-ease-in">
              I&#39;m Zain.
            </div>
          </div>
          <div className="grid justify-self-center grid-flow-col gap-2">
            <div className="animate-fade animate-once animate-duration-[800ms] animate-delay-[3000ms] animate-ease-in">
              2B Mechatronics Engineer at the University of Waterloo
            </div>
          </div>

          <div className="grid grid-cols-6 gap-10">
            <div className="animate-jump-in animate-once animate-ease-out animate-delay-[3500ms]">AI Enthusiast</div>
            <div className="animate-jump-in animate-once animate-ease-out animate-delay-[4000ms]">Full Stack Developer</div>
            <div className="animate-jump-in animate-once animate-ease-out animate-delay-[4500ms]">Python Developer</div>
            <div className="animate-jump-in animate-once animate-ease-out animate-delay-[5000ms]">Trained Machinist</div>
            <div className="animate-jump-in animate-once animate-ease-out animate-delay-[5500ms]">CAD Specialist</div>
            <div className="animate-jump-in animate-once animate-ease-out animate-delay-[6000ms]">Mechanical Designer</div>
          </div>

          <m.div animate={item.showCirc} initial={item.hiddenCirc} className="flex justify-center" style={{ marginTop: '100px' }}>
            <CircularThing />
          </m.div>
        </div>
      </div>
    </Suspense>
  );
}