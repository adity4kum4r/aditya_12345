"use client";

import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-violet-500 rounded-lg" />
              <span className="text-xl font-bold gradient-text">
                Aditya Kumar
              </span>
            </div>
            <p className="text-gray-400 text-sm max-w-md">
              Building the future of web, one line of code at a time.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-400 hover:text-white hover:gradient-text transition-colors text-sm"
              >
                {item}
              </a>
            ))}
          </motion.div>

          {/* Back to Top */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            className="p-3 rounded-full glass-effect hover:bg-white/10 transition-colors"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-gray-500">
            <span>© {new Date().getFullYear()} All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Aditya Kumar
            </span>
            <span className="hidden sm:inline">•</span>
            <span>Made with Next.js, Tailwind & Framer Motion</span>
          </div>
          
          <div className="mt-4 text-xs text-gray-600">
            <p>This portfolio is open source. Feel free to customize it for your own use!</p>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute -top-10 left-1/4 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 right-1/4 w-40 h-40 bg-violet-500/5 rounded-full blur-3xl" />
      </div>
    </footer>
  );
};

export default Footer;
