/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function Contact() {
  const socialLinks = [
    { label: "GitHub", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Dribbble", href: "#" },
  ];

  return (
    <section id="contact" className="max-w-4xl mx-auto py-32 px-6 text-center">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-bold mb-8 italic tracking-tight"
      >
        Let's create something <br /> <span className="text-blue-500">iconic</span> together.
      </motion.h2>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <a 
          href="mailto:hello@yoursite.com" 
          className="text-2xl md:text-4xl font-light text-gray-400 hover:text-white transition-colors break-all"
        >
          hello@yoursite.com
        </a>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-16 flex justify-center gap-10 text-gray-500 font-medium"
      >
        {socialLinks.map((link) => (
          <a 
            key={link.label}
            href={link.href} 
            className="hover:text-white transition-colors relative group"
          >
            {link.label}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-500 transition-all group-hover:w-full" />
          </a>
        ))}
      </motion.div>
    </section>
  );
}
