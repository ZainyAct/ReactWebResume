import React from 'react';
import { motion } from 'framer-motion';

interface Image {
  url: string;
  alt: string;
}

interface ImageGridProps {
  images: Image[];
}

const wiggle = {
  hover: {
    scale: 1.1,
    rotate: [0, -2, 2, -2, 2, 0],
    transition: {
      duration: 0.3,
      yoyo: 1,
    },
  },
  initial: {
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  return (
    <section className="mb-12 flex flex-col items-center">
      <motion.div
        className="text-center text-3xl font-semibold text-white mb-4 hover:text-white"
        initial="initial"
        whileHover="hover"
        animate="initial"
        variants={wiggle}
      >
        Images
      </motion.div>
      <div className="p-6 bg-white bg-opacity-75 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="relative group">
              <motion.img
                src={image.url}
                alt={image.alt}
                className="w-full h-auto transform transition-transform duration-300 hover:scale-105 rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
              />
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
              >
                {image.alt}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGrid;
