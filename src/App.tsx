/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Expertise from "./components/Expertise";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div className="relative">
      <div className="fixed inset-0 hero-gradient -z-10" id="global-bg" />
      <Navbar />
      <main id="home">
        <Hero />
        <Work />
        <Expertise />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
