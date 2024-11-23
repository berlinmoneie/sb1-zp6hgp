import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Lock, Rocket } from 'lucide-react';

export function Tokenomics() {
  const cards = [
    {
      icon: <Flame className="w-12 h-12 text-red-400" />,
      percentage: "69%",
      title: "Burned",
      description: "to Your Mom's Room"
    },
    {
      icon: <Lock className="w-12 h-12 text-blue-400" />,
      percentage: "420%",
      title: "Locked",
      description: "in Triangle Dimension"
    },
    {
      icon: <Rocket className="w-12 h-12 text-yellow-400" />,
      percentage: "80085%",
      title: "Moon Supply",
      description: "Because Math is Hard"
    }
  ];

  return (
    <motion.section 
      className="max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h3 className="text-4xl font-bold mb-12 text-center">Tokenomics</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="mb-4"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              {card.icon}
            </motion.div>
            <h4 className="text-3xl font-bold mb-2">{card.percentage}</h4>
            <p className="text-xl font-semibold mb-1">{card.title}</p>
            <p className="text-white/60">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}