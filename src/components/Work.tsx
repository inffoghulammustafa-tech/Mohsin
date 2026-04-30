/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  image: string;
  key?: number | string;
}

function ProjectCard({ title, description, tags, gradient, image }: ProjectProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="card-hover glass rounded-[2.5rem] p-4 group"
    >
      <div className={`aspect-video bg-gradient-to-br ${gradient} rounded-[2rem] overflow-hidden mb-6 flex items-center justify-center relative`}>
        <img 
          src={image} 
          alt={title} 
          className="opacity-50 grayscale group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700 w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="px-4 pb-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-2xl font-bold text-white leading-none">{title}</h3>
          <ArrowUpRight className="text-gray-500 group-hover:text-blue-500 transition-colors" size={24} />
        </div>
        <p className="text-gray-400 text-sm mb-6 leading-relaxed">{description}</p>
        <div className="flex gap-3">
          {tags.map((tag) => (
            <span key={tag} className="text-[10px] uppercase tracking-widest px-3 py-1 glass rounded-full text-blue-400">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Work() {
  const projects: ProjectProps[] = [
    {
      title: "Modern SaaS Dashboard",
      description: "Aik complete analytics dashboard jo real-time data visualization provide karta hai.",
      tags: ["React", "Tailwind"],
      gradient: "from-blue-900/20 to-purple-900/20",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "E-Commerce Experience",
      description: "High-performance shopping experience with seamless checkout and animations.",
      tags: ["Next.js", "Stripe"],
      gradient: "from-emerald-900/20 to-teal-900/20",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
    }
  ];

  return (
    <section id="work" className="max-w-6xl mx-auto py-24 px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
        <div>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4"
          >
            Selected Work
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400"
          >
            Wo projects jo maine haal hi mein deliver kiye hain.
          </motion.p>
        </div>
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm font-mono text-gray-500"
        >
          / 2024 - 2026
        </motion.span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index} 
            title={project.title}
            description={project.description}
            tags={project.tags}
            gradient={project.gradient}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
}
