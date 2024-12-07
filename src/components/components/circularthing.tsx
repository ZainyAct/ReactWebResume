'use client';

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
import Link from "next/link";

import Wait1 from "@/app/assets/ZainGifs/waiting1.gif";
import Wait2 from "@/app/assets/ZainGifs/waiting2.gif";
import Look from "@/app/assets/ZainGifs/lookingaround.gif";
import EyeOpen from "@/app/assets/ZainGifs/waiting1.gif";
import Aware from "@/app/assets/ZainGifs/aware.gif";

const images = [
    { link: "https://github.com/ZainyAct", vis: { static: GitStatic, gif: GitGif } },
    { link: "https://www.linkedin.com/in/zainmahmoud/", vis: { static: LinkInStatic, gif: LinkInGif } },
    { link: "/resume", vis: { static: ResStatic, gif: ResGif } },
    { link: "/resumes/Portfolio.pdf", vis: { static: PortStatic, gif: PortGif } },
    { link: "/contact", vis: { static: ContStatic, gif: ContGif } },
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

export default function CircularThing() {
    const itemsInCircle = [];
    const count = images.length;
    const radius = 200;
    const [speed, setSpeed] = useState(25);
    const [angleOffset, setAngleOffset] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const [circleVisible, setCircleVisible] = useState(false);

    useEffect(() => {
        const maxAngle = Math.PI * 8;
        if (angleOffset < maxAngle) {
            const decayRate = 0.99;
            let newSpeed = speed * decayRate;

            if (newSpeed < 1) {
                newSpeed = 0;
            }

            setTimeout(() => {
                setAngleOffset((prev) => prev + 0.01 * newSpeed);
                setSpeed(newSpeed);
            }, 1000 / 30);
        }
    }, [angleOffset, speed]);

    useEffect(() => {
        setCircleVisible(true);
    }, []);

    for (let i = 0; i < count; i++) {
        const angleRadians = (i / count) * Math.PI * 2 + angleOffset;
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
                <Link href={images[i].link} target="_blank" rel="noopener noreferrer">
                    <div className="relative w-full h-full rounded-full hover:animate-jump">
                        <Image
                            src={images[i].vis.static}
                            alt=""
                            width={120}
                            height={120}
                        />
                        <Image
                            src={images[i].vis.gif}
                            alt=""
                            width={120}
                            height={120}
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                opacity: 0,
                                transition: "opacity 0.5s ease-in-out",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0")}
                        />
                    </div>
                </Link>
            </div>
        );
    }



    const [zainGif, setZainGif] = useState(zainGifs[0].gif);
    const zainGifImageRef = useRef(null);

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
        <div className="flex items-center justify-center">
            <div
                style={{ width: radius * 2, height: radius * 2 }}
                className="relative flex items-center justify-center"
            >
                {circleVisible && itemsInCircle}

                <div className=" w-[150px] h-[150px] flex items-center justify-center">
                    <a href={"./about-me"} target="_blank" rel="noopener noreferrer">
                        <Image
                            src={zainGif}
                            alt=""
                            ref={zainGifImageRef}
                            width={200}
                            height={200}
                            style={{ transform: "scale(2)" }}
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}