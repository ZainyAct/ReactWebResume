import { motion } from "framer-motion";
import React, { useEffect, useState } from 'react';

export default function Loading({ func }: { func: JSX.Element }) {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const load = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
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
    <div className="w-screen h-screen flex justify-center items-center">
      <motion.div
        className="animate-pulse"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <l-quantum size="125" speed="1.75" color="white"></l-quantum>
      </motion.div>
    </div>
  );
}
