'use client';

import { motion } from 'framer-motion';

export default function AnimatedHero() {
  return (
    <>
      <motion.h1 
        className="text-6xl md:text-7xl font-bold text-white drop-shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Super
      </motion.h1>
      <motion.p 
        className="text-2xl md:text-3xl font-medium text-white drop-shadow-md"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        Jigjiga&apos;s Coolest Spot
      </motion.p>
    </>
  );
}
