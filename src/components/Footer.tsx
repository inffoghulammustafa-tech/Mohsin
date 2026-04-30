/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Github, Linkedin, Twitter, Menu, Phone, Clock, MapPin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative pt-20 pb-10 px-6 bg-black/40 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: About */}
          <div className="space-y-6">
            <div className="w-16 h-16 rounded-xl glass p-2 flex items-center justify-center border border-white/10 shadow-2xl">
              <img 
                src="https://t3.ftcdn.net/jpg/04/23/48/64/360_F_423486482_RIrfPyzuCwbuQlPTlTx7GAs81o6OmuE4.jpg" 
                alt="Logo" 
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed font-medium max-w-xs">
              We don't just build websites. We craft digital experiences that define brands and drive growth.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Github size={18} />, href: "#", label: "GI" },
                { icon: <Linkedin size={18} />, href: "#", label: "LI" },
                { icon: <Twitter size={18} />, href: "#", label: "TW" }
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href} 
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-500 hover:text-white hover:border-white/30 transition-all text-[10px] font-bold"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Explore */}
          <div className="relative">
            <div className="absolute -top-6 left-6 z-10">
               <div className="w-12 h-12 rounded-xl glass border border-white/10 flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.2)] text-blue-500">
                  <Menu size={20} />
               </div>
            </div>
            <div className="glass rounded-2xl p-8 border border-white/5 h-full pt-12 relative">
              <h3 className="text-white font-bold tracking-widest text-xs uppercase mb-6">Explore</h3>
              <ul className="space-y-4">
                {['Home', 'About', 'Work', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 group-hover:bg-blue-500 transition-colors" />
                      {item === 'Work' ? 'Projects' : item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Contact */}
          <div className="relative">
             <div className="absolute -top-6 left-6 z-10">
               <div className="w-12 h-12 rounded-xl glass border border-white/10 flex items-center justify-center shadow-[0_0_15px_rgba(239,68,68,0.2)] text-red-500">
                  <Phone size={20} />
               </div>
            </div>
            <div className="glass rounded-2xl p-8 border border-white/5 h-full pt-12 relative text-left">
              <h3 className="text-white font-bold tracking-widest text-xs uppercase mb-6">Contact</h3>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-gray-500 font-bold block mb-1">Location</span>
                    <p className="text-white text-xs font-bold leading-tight">Afridi Chowk Millat Road Faisalabad</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-gray-500 font-bold block mb-1">Email</span>
                    <p className="text-white text-xs font-bold break-all">inffo.ghulammustafa@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Status */}
          <div className="relative">
             <div className="absolute -top-6 left-6 z-10">
               <div className="w-12 h-12 rounded-xl glass border border-white/10 flex items-center justify-center shadow-[0_0_15px_rgba(34,197,94,0.2)] text-green-500">
                  <Clock size={20} />
               </div>
            </div>
            <div className="glass rounded-2xl p-8 border border-white/5 h-full pt-12 relative">
              <h3 className="text-white font-bold tracking-widest text-xs uppercase mb-6">Status</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-gray-500 text-xs">Availability</span>
                  <span className="text-green-500 text-xs font-bold">Open</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-gray-500 text-xs">Response Time</span>
                  <span className="text-white text-xs font-bold">&lt; 24h</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-500 text-xs">Timezone</span>
                  <span className="text-white text-xs font-bold uppercase">UTC+5</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">© {currentYear} Mustafa. All rights reserved.</p>
          <div className="flex gap-8 text-[10px] text-gray-600 font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
