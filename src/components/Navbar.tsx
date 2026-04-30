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
      <div className="max-w-5xl mx-auto glass rounded-2xl px-4 py-3 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 transition-transform hover:scale-105 active:scale-95">
          <img 
            src="https://t3.ftcdn.net/jpg/04/23/48/64/360_F_423486482_RIrfPyzuCwbuQlPTlTx7GAs81o6OmuE4.jpg" 
            alt="Logo" 
            className="w-10 h-10 rounded-full object-cover border border-white/20 shadow-lg shadow-blue-500/20"
          />
        </a>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <a 
          href="https://wa.me/YOUR_NUMBER" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-2 rounded-xl text-sm font-bold transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-lg shadow-green-500/20"
        >
          <MessageCircle size={18} fill="currentColor" />
          <span className="hidden sm:inline">WhatsApp</span>
          <span className="sm:hidden">Chat</span>
        </a>
      </div>
    </motion.nav>
  );
}
