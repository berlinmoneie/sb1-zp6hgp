import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export function SocialLinks() {
  return (
    <div className="flex justify-center my-12">
      <motion.a
        href="https://t.me/trianglefacenig"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 p-4 rounded-full hover:bg-blue-600 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle size={32} className="text-white" />
      </motion.a>
    </div>
  );
}