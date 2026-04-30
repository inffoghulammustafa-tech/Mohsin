/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed w-full z-50 top-6 px-4"
    >
      <div className="max-w-5xl mx-auto glass rounded-2xl px-6 py-4 flex items-center shadow-2xl">
        <div className="flex-1 flex justify-start">
          <a href="#home" className="flex items-center gap-2 transition-transform hover:scale-110 active:scale-95">
            <img 
              src="https://t3.ftcdn.net/jpg/04/23/48/64/360_F_423486482_RIrfPyzuCwbuQlPTlTx7GAs81o6OmuE4.jpg" 
              alt="Logo" 
              className="w-14 h-14 rounded-full object-cover border-2 border-white/20 shadow-xl shadow-blue-500/20"
            />
          </a>
        </div>

        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400 items-center justify-center">
          <a href="#home" className="hover:text-white transition-colors relative group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-500 transition-all group-hover:w-full" />
          </a>
          <a href="#work" className="hover:text-white transition-colors relative group">
            Work
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-500 transition-all group-hover:w-full" />
          </a>
          <a href="#about" className="hover:text-white transition-colors relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-500 transition-all group-hover:w-full" />
          </a>
          <a href="#contact" className="hover:text-white transition-colors relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-500 transition-all group-hover:w-full" />
          </a>
        </div>

        <div className="flex-1 flex justify-end" /> 
      </div>
    </motion.nav>
  );
}
