"use client";

import { useRef, useState, useEffect } from "react";
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
import { Link } from "react-router-dom";

import Wait1 from "@/app/assets/ZainGifs/waiting1.gif";
import Wait2 from "@/app/assets/ZainGifs/waiting2.gif";
import Look from "@/app/assets/ZainGifs/lookingaround.gif";
import EyeOpen from "@/app/assets/ZainGifs/waiting1.gif";
import Aware from "@/app/assets/ZainGifs/aware.gif";

const images = [
    { link: "https://github.com/ZainyAct", vis: { static: GitStatic, gif: GitGif } },
    { link: "https://www.linkedin.com/in/zainmahmoud/", vis: { static: LinkInStatic, gif: LinkInGif } },
    { link: "./resume", vis: { static: ResStatic, gif: ResGif } },
    { link: "./portfolio", vis: { static: PortStatic, gif: PortGif } },
    { link: "./contact", vis: { static: ContStatic, gif: ContGif } },
];

const zainGifs = [
    { chance: 80, gif: Wait1 },
    { chance: 80, gif: Wait2 },
    { chance: 50, gif: Look },
    { chance: 40, gif: EyeOpen },
    { chance: 35, gif: Aware },
];


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
export default function CircularThing() {
const itemsInCircle = [];
const count = images.length;
const radius = 200;
const [speed, setSpeed] = useState(25)
const [angleOffset, setAngleOffset] = useState(0)
const intervalRef = useRef<NodeJS.Timeout | null>(null);
// const [circleVisible, setCircleVisible] = useState(false)

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

    const [changeScreen, setScreenChanged] = useState(false)
    let loadFunc: string = ''

    // useEffect (() => {
    //   const loadScreen = () => {
    //     setScreenChanged(true)
    //   };
    //   return () => {
    //     <m.div>
    //       <Loading func={loadFunc}/>
    //     </m.div>
    //   }
    // })

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
            <Link to={images[i].link} target="_blank" rel="noopener noreferrer">
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
            </Link>
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

