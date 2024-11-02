"use client";
import {motion as m} from "framer-motion"
import React, { useEffect, useState } from 'react';

const container = {
    show: {
        transition: {
            staggerChildren: 0.35,
        },
    },
};


export default function Loading(props: {func: JSX.Element}) {

    const [loadingComplete, setLoadingComplete] = useState(false);

  // Perform loading operations and set loading state
    useEffect(() => {
    const load = async () => {
        // Perform all necessary asynchronous operations here
        await new Promise(resolve => setTimeout(resolve, 1000));

        await props.func;
        setLoadingComplete(true);
    };

    load();
    }, []);

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
    setIsClient(true);
    import('ldrs').then(({ quantum }) => {
        quantum.register();
    });
    }, []);

    if (!isClient) {
    return null;
    }

    return (
        <div className="trans_body w-screen h-screen flex justify-center items-center ">
            <div className="animate-pulse animate-ease-in-out">
            {/* <h1 className="text-4xl fw-light text-white m-0 animate-pulse animate-infinite p-10">Loading... </h1> */}
            <l-quantum
                size="125"
                speed="1.75"
                color="white"
            ></l-quantum>
            </div>
        </div>
    );
    }
