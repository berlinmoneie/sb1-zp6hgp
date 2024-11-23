import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const images = [
  "https://media.textadventures.co.uk/coverart/c01c8041-4fda-4953-abfa-b7f2c336fc58%20cover.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqhhbFRb1RRBQOtfPf9gh9Q__B1Y-16NMd-g&s",
  "https://pbs.twimg.com/media/BXJXsASCYAAqKnv.jpg"
];

export function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[500px] w-full max-w-3xl mx-auto rounded-2xl overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Triangle Face Man ${currentIndex + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-center">
        <h3 className="text-2xl font-bold mb-2">The Legend Himself</h3>
        <p className="text-lg">Spotted in various mom's bedrooms since 1970</p>
      </div>
    </div>
  );
}