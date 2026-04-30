/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-20 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-semibold text-blue-400 mb-8"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
        </span>
        Available for Freelance
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-5xl md:text-8xl font-extrabold text-center tracking-tight mb-8"
      >
        Crafting Digital <br /> <span className="text-blue-500">Masterpieces.</span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-gray-400 text-lg md:text-xl text-center max-w-2xl leading-relaxed"
      >
        I'm a Full-stack Web Developer and Designer creating fast, 
        beautiful, and modern digital experiences with performance at the core.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-12 flex flex-col md:flex-row gap-4"
      >
        <a 
          href="#work" 
          className="bg-white text-black px-10 py-4 rounded-2xl font-bold hover:scale-105 transition-transform text-center"
        >
          Check My Work
        </a>
        <a 
          href="#about" 
          className="glass px-10 py-4 rounded-2xl font-bold hover:bg-white/5 transition-colors text-center"
        >
          More About Me
        </a>
      </motion.div>
    </section>
  );
}
