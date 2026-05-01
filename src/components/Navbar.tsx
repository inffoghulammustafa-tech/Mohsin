/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { Settings } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed w-full z-50 top-6 px-4"
    >
      <div className="max-w-5xl mx-auto glass rounded-2xl px-6 py-4 flex items-center shadow-2xl">
        <div className="flex-1 flex justify-start">
          <Link to="/" className="flex items-center gap-2 transition-transform hover:scale-110 active:scale-95">
            <img 
              src="https://t3.ftcdn.net/jpg/04/23/48/64/360_F_423486482_RIrfPyzuCwbuQlPTlTx7GAs81o6OmuE4.jpg" 
              alt="Logo" 
              className="w-14 h-14 rounded-full object-cover border-2 border-white/20 shadow-xl shadow-blue-500/20"
            />
          </Link>
        </div>

        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400 items-center justify-center">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className={`hover:text-white transition-colors relative group ${location.pathname === link.path ? 'text-white' : ''}`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-px bg-blue-500 transition-all group-hover:w-full ${location.pathname === link.path ? 'w-full' : 'w-0'}`} />
            </Link>
          ))}
        </div>

        <div className="flex-1 flex justify-end">
          <Link 
            to="/admin" 
            className={`hover:text-white transition-colors relative group text-sm font-medium ${location.pathname === '/admin' ? 'text-white' : 'text-gray-400'}`}
          >
            Admin
            <span className={`absolute -bottom-1 left-0 h-px bg-blue-500 transition-all group-hover:w-full ${location.pathname === '/admin' ? 'w-full' : 'w-0'}`} />
          </Link>
        </div> 
      </div>
    </motion.nav>
  );
}
