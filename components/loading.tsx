// components/Loading.tsx

import { motion } from "framer-motion";
import React, { useEffect, useState } from 'react';

export default function Loading({ func }: { func: JSX.Element }) {
const [loadingComplete, setLoadingComplete] = useState(false);
const [isClient, setIsClient] = useState(false);

// Perform loading operations and set loading state
useEffect(() => {
const load = async () => {
    // Simulate loading operation
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Simulate loading the main content
    setLoadingComplete(true);
};

load();
}, []);

useEffect(() => {
setIsClient(true);
import('ldrs').then(({ quantum }) => {
    quantum.register();
});
}, []);

if (!isClient) {
return null;
}

if (loadingComplete) {
return func;
}

return (
<div className="trans_body w-screen h-screen flex justify-center items-center ">
    <motion.div
    className="animate-pulse animate-ease-in-out"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    >
    <l-quantum
        size="125"
        speed="1.75"
        color="white"
    ></l-quantum>
    </motion.div>
</div>
);
}
