import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Triangle } from 'lucide-react';

export function Hero() {
  useEffect(() => {
    const iframe = document.createElement('iframe');
    iframe.width = "100%";
    iframe.height = "300";
    iframe.scrolling = "no";
    iframe.frameBorder = "no";
    iframe.allow = "autoplay";
    iframe.src = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/105446259&color=%23ff5500&auto_play=true&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true";
    
    const audioContainer = document.getElementById('audio-container');
    if (audioContainer) {
      audioContainer.appendChild(iframe);
    }
  }, []);

  return (
    <motion.div 
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", bounce: 0.6 }}
      className="text-center mb-16"
    >
      <div id="audio-container" className="fixed top-0 left-0 w-0 h-0 overflow-hidden" />
      
      <motion.div
        className="flex items-center justify-center gap-4 mb-6"
        animate={{ 
          rotateZ: [0, 10, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Triangle className="text-yellow-400" size={48} />
        <h1 className="text-4xl md:text-7xl font-bold text-white">$TRIANGLE FACE</h1>
        <Triangle className="text-yellow-400" size={48} />
      </motion.div>

      <motion.div className="relative inline-block">
        <motion.img 
          src="https://media.textadventures.co.uk/coverart/c01c8041-4fda-4953-abfa-b7f2c336fc58%20cover.jpg"
          alt="Triangle Face Man"
          className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full border-8 border-yellow-400 shadow-2xl object-cover"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -inset-2 rounded-full"
          animate={{
            boxShadow: [
              "0 0 20px rgba(250, 204, 21, 0.4)",
              "0 0 60px rgba(250, 204, 21, 0.8), 0 0 30px rgba(250, 204, 21, 0.6)",
              "0 0 20px rgba(250, 204, 21, 0.4)"
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </motion.div>
  );
}