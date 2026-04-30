/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function About() {
  const services = [
    {
      title: "Frontend Development",
      description: "Clean code, interactive UI, aur fast loading speeds meri priority hain.",
    },
    {
      title: "UI/UX Design",
      description: "Figma ka use karke user-friendly aur visual-heavy designs create karna.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white/5 border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h4 className="text-blue-500 font-bold mb-4 uppercase tracking-tighter">Services</h4>
          <p className="text-2xl font-bold">Main kya provide karta hoon?</p>
        </motion.div>
        
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-400">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <h5 className="text-white font-bold mb-2 underline decoration-blue-500 underline-offset-8 decoration-2">
                {service.title}
              </h5>
              <p className="leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
