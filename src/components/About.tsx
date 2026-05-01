/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef } from "react";
import { Plus, Zap } from "lucide-react";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);

  useEffect(() => {
    const controls = animate(count, target, {
      duration: 2,
      ease: "easeOut",
    });
    return controls.stop;
  }, [target, count]);

  return <motion.span>{rounded}</motion.span>;
}

export default function About() {
  const stats = [
    { number: "50+", label: "PROJECTS COMPLETED" },
    { number: "35+", label: "HAPPY CLIENTS" },
    { number: "12", label: "AWARDS WON" },
    { number: "4+", label: "YEARS EXPERIENCE" },
  ];

  const skills = [
    { name: "HTML", percent: 98, color: "blue" },
    { name: "Web Development", percent: 92, color: "blue" },
    { name: "Graphic Design", percent: 88, color: "blue" },
    { name: "CSS", percent: 95, color: "red" },
    { name: "Canva", percent: 90, color: "red" },
    { name: "Photoshop", percent: 94, color: "red" },
  ];

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-blue-600 rounded-tl-3xl z-10" />
            <div className="glass p-2 rounded-[2.5rem] relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800" 
                alt="Workspace" 
                className="w-full h-full object-cover rounded-[2rem]"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-red-600 rounded-br-3xl z-10" />
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <span className="text-xs uppercase tracking-[0.5em] text-gray-500 font-bold block">Discovery</span>
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              Design thinking meets <span className="text-blue-500 border-b-4 border-blue-500">Engineering</span>.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              I build immersive digital experiences that combine cutting-edge technology with stunning aesthetics. Specializing in high-performance web applications with a focus on animation and user experience.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full flex items-center justify-center border border-blue-500 text-blue-500 glass">
                  <Plus size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold">Creative Directing</h4>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">Conceptualizing unique digital identities</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full flex items-center justify-center border border-red-500 text-red-500 glass">
                  <Zap size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold">App Development</h4>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">High-performance production apps</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-32">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-10 rounded-3xl border border-white/5 text-center transition-all hover:border-white/10"
            >
              <div className="text-4xl font-bold text-white mb-2">
                <Counter target={parseInt(stat.number)} />
                {stat.number.replace(/\d+/g, '')}
              </div>
              <div className="text-[10px] tracking-[0.2em] text-gray-500 font-black uppercase">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Technical Arsenal Section */}
        <div className="space-y-16">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center uppercase tracking-widest"
          >
            Technical Arsenal
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-4">
                <div className="flex justify-between items-end">
                  <span className="text-sm font-bold uppercase tracking-widest">{skill.name}</span>
                  <span className="text-xs text-gray-500 font-bold">{skill.percent}%</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className={`h-full rounded-full relative ${
                      skill.color === 'blue' 
                        ? 'bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.5)]' 
                        : 'bg-red-600 shadow-[0_0_15px_rgba(239,68,68,0.5)]'
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
