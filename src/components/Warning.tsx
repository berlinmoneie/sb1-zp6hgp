import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

export function Warning() {
  return (
    <motion.div 
      className="my-20 text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <motion.div 
        className="flex items-center justify-center gap-4 text-4xl md:text-6xl font-bold text-yellow-300 mb-8"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
        }}
      >
        <AlertTriangle size={48} />
        <span>WARNING</span>
        <AlertTriangle size={48} />
      </motion.div>
      <motion.p 
        className="text-2xl md:text-4xl font-bold leading-relaxed mb-8 text-white"
        animate={{
          color: ["#ffffff", "#fef08a", "#ffffff"]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        WHAT WOULD YOU DO IF THIS MAN
        <br />
        APPEARED IN YOUR MOM'S BEDROOM? 😱
      </motion.p>
    </motion.div>
  );
}