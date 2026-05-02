/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-48 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          y: [0, -10, 0] 
        }}
        transition={{ 
          opacity: { duration: 1.5, ease: "easeOut" },
          scale: { duration: 1.5, ease: "easeOut" },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
        className="relative w-72 h-72 md:w-96 md:h-96 mb-12 flex items-center justify-center pointer-events-none"
      >
        <div className="absolute inset-0 rounded-full border border-blue-500/20 animate-[spin_20s_linear_infinite]" />
        <div className="absolute inset-4 rounded-full border border-purple-500/10 animate-[spin_15s_linear_infinite_reverse]" />
        <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full" />
        
        <div className="relative z-10 w-full h-full rounded-full overflow-hidden border border-white/10">
          <img 
            src="https://i.pinimg.com/736x/37/01/d1/3701d16606a8908bcc92bdf78d7fc52f.jpg" 
            alt="Profile" 
            className="w-full h-full object-cover object-top rounded-full scale-110"
            referrerPolicy="no-referrer"
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[10px] md:text-xs font-bold px-4 py-2 rounded-full flex items-center gap-2 shadow-[0_0_20px_rgba(220,38,38,0.3)] z-20 whitespace-nowrap"
        >
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          AVAILABLE FOR FREELANCE
        </motion.div>
      </motion.div>

      <div className="text-center relative z-10">
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
          className="text-gray-400 text-lg md:text-xl text-center max-w-2xl leading-relaxed mx-auto"
        >
          I'm a Full-stack Web Developer and Designer creating fast, 
          beautiful, and modern digital experiences with performance at the core.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 mb-32 flex flex-col md:flex-row justify-center gap-4"
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
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-px h-16 bg-gradient-to-b from-blue-500 to-transparent" />
        <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Scroll to Explore</span>
      </motion.div>
    </section>
  );
}
