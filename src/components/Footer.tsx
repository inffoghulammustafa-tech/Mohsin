/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-10 text-center text-gray-600 text-xs border-t border-white/5 bg-black/20"
    >
      <p>© {currentYear} Crafted with Love and React. Built by Your Name.</p>
    </motion.footer>
  );
}
