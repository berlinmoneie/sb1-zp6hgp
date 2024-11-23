import { motion } from 'framer-motion';
import { Skull, Ghost, Moon } from 'lucide-react';

export function Backstory() {
  return (
    <motion.div 
      className="max-w-4xl mx-auto bg-black/30 backdrop-blur-lg rounded-3xl p-8 md:p-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-transparent bg-clip-text">
        The Horrifying Backstory
      </h2>
      
      <div className="space-y-6 text-lg leading-relaxed">
        <motion.div 
          className="flex items-center gap-4"
          whileHover={{ x: 10 }}
        >
          <Skull className="text-red-500 flex-shrink-0" />
          <p>Legend has it that in 1970, a mysterious geometric entity emerged from the depths of the uncanny valley...</p>
        </motion.div>
        
        <motion.div 
          className="flex items-center gap-4"
          whileHover={{ x: 10 }}
        >
          <Ghost className="text-purple-500 flex-shrink-0" />
          <p>Some say he was created by a mad mathematician who tried to divide by zero. Others claim he's what you see when you stare at a triangle for too long at 3 AM...</p>
        </motion.div>
        
        <motion.div 
          className="flex items-center gap-4"
          whileHover={{ x: 10 }}
        >
          <Moon className="text-yellow-500 flex-shrink-0" />
          <p>But one thing is certain: he has an inexplicable attraction to YOUR MOM'S BEDROOM! Buy $TRIANGLE now or risk finding him there tonight! 😱</p>
        </motion.div>
      </div>
      
      <motion.div 
        className="mt-8 text-center text-sm text-gray-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        * This is not financial advice. Triangle Face Man may or may not be real. Your mom's bedroom safety not guaranteed.
      </motion.div>
    </motion.div>
  );
}