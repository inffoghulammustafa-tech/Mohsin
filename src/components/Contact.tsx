/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { FormEvent } from "react";
import { Phone } from "lucide-react";

export default function Contact({ onAccessGranted }: { onAccessGranted?: () => void }) {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In a real app, you'd save this to a database
    if (onAccessGranted) {
      onAccessGranted();
    }
  };

  return (
    <section id="contact" className="min-h-screen py-24 px-6 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-4 uppercase">
          Identity <span className="text-blue-500">Check</span>
        </h1>
        <p className="text-[12px] tracking-[0.4em] text-blue-400 font-bold uppercase opacity-80">
          Secure Transmission to Mohsin's Intelligence Hub
        </p>
      </motion.div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Sidebar Cards */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-[24px] border border-white/10"
          >
            <p className="text-[10px] tracking-[0.2em] text-blue-500 font-black uppercase mb-4">Verification Status</p>
            <h3 className="text-3xl font-bold text-white tracking-tight">Awaiting Submission</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass p-8 rounded-[24px] border border-white/10"
          >
            <p className="text-[10px] tracking-[0.2em] text-red-500 font-black uppercase mb-4">Encryption Level</p>
            <h3 className="text-3xl font-bold text-white tracking-tight">256-bit AES</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass p-8 rounded-[24px] border border-white/10"
          >
            <p className="text-[10px] tracking-[0.2em] text-green-500 font-black uppercase mb-4 flex items-center gap-2">
              <Phone size={12} /> Direct Contact
            </p>
            <h3 className="text-3xl font-bold text-white tracking-tight">03057615767</h3>
          </motion.div>
        </div>

        {/* Main Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 glass p-10 rounded-[40px] border border-white/10 relative overflow-hidden"
        >
          {/* Decorative Glowing Pulse in form corner */}
          <div className="absolute top-8 right-8 w-3 h-3 rounded-full bg-blue-500 animate-pulse shadow-[0_0_15px_rgba(37,99,235,1)]" />
          <div className="absolute top-8 right-16 w-3 h-3 rounded-full border border-blue-500/50" />

          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] tracking-[0.1em] text-gray-500 font-bold uppercase">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full bg-black/40 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-colors"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] tracking-[0.1em] text-gray-500 font-bold uppercase">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full bg-black/40 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] tracking-[0.1em] text-gray-500 font-bold uppercase">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="+92 XXX XXXXXXX" 
                  className="w-full bg-black/40 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-colors"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] tracking-[0.1em] text-gray-500 font-bold uppercase">Residential Address</label>
                <input 
                  type="text" 
                  placeholder="City, Area, Street" 
                  className="w-full bg-black/40 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] tracking-[0.1em] text-gray-500 font-bold uppercase">Verification Details</label>
              <textarea 
                rows={5}
                placeholder="Provide any additional information for identity verification..." 
                className="w-full bg-black/40 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
              />
            </div>

            <button className="w-full bg-white text-black font-black py-6 rounded-2xl uppercase tracking-widest text-sm hover:bg-gray-200 transition-colors shadow-[0_10px_30px_rgba(255,255,255,0.1)] active:scale-[0.98]">
              Submit Identity Check
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
