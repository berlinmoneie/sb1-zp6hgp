import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Rocket, Moon } from 'lucide-react';

export function PriceChart() {
  return (
    <motion.div 
      className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-3xl font-bold flex items-center gap-3">
          <TrendingUp className="text-green-400" />
          Price Chart
        </h3>
        <div className="flex gap-3">
          <Rocket className="text-yellow-400 animate-bounce" />
          <Moon className="text-yellow-400 animate-pulse" />
        </div>
      </div>

      <motion.div 
        className="h-64 relative overflow-hidden rounded-xl bg-black/20"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="absolute bottom-0 left-0 w-full h-full"
          style={{
            background: "linear-gradient(135deg, #22c55e 0%, #eab308 50%, #ef4444 100%)",
            clipPath: "polygon(0 100%, 20% 80%, 40% 90%, 60% 20%, 80% 40%, 100% 0%, 100% 100%)"
          }}
          animate={{
            opacity: [1, 0.8, 1],
            scale: [1, 1.02, 1]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </motion.div>

      <div className="mt-6 text-center">
        <motion.p 
          className="text-xl font-bold text-yellow-400"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Number of Moms Protected vs Price Action 📈
        </motion.p>
        <p className="text-white/60 mt-2">Trust me bro, it only goes up! 🚀</p>
      </div>
    </motion.div>
  );
}