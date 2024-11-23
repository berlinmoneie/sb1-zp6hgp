import React from 'react';
import { motion } from 'framer-motion';
import { Triangle } from 'lucide-react';

export function BuyButton() {
  return (
    <div className="text-center">
      <motion.button
        className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 text-black font-bold text-xl md:text-2xl py-6 px-12 rounded-full inline-flex items-center gap-3 shadow-lg shadow-yellow-500/20"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <Triangle className="animate-spin" />
        BUY $TRIANGLE NOW OR YOUR MOM GETS IT
        <Triangle className="animate-spin" />
      </motion.button>
    </div>
  );
}