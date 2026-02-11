"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", paddingTop: "80px" }}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(30, 58, 138, 0.2), transparent, rgba(76, 29, 149, 0.2))" }} />
      
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", textAlign: "center", position: "relative", zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ position: "relative", width: "192px", height: "192px", margin: "0 auto 32px" }}
          >
            {/* Outer animated ring */}
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #3b82f6, #8b5cf6, #06b6d4)", borderRadius: "50%", animation: "spin 20s linear infinite" }} />
            
            {/* Middle dark ring */}
            <div style={{ position: "absolute", inset: "8px", background: "#111827", borderRadius: "50%" }} />
            
            {/* Inner photo container */}
            <div style={{ position: "absolute", inset: "16px", borderRadius: "50%", overflow: "hidden" }}>
              <img 
                src="/profile.jpg" 
                alt="Aditya Kumar"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ fontSize: "48px", fontWeight: "bold", marginBottom: "16px", lineHeight: "1.2" }}
          >
            <span className="gradient-text">Aditya Kumar</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{ fontSize: "24px", color: "#d1d5db", marginBottom: "24px", height: "48px" }}
          >
            Full Stack Developer
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{ fontSize: "20px", color: "#9ca3af", marginBottom: "32px", maxWidth: "600px", margin: "0 auto 32px" }}
          >
            Building modern, scalable web applications with cutting-edge technologies
            and innovative solutions.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            style={{ display: "flex", flexDirection: "column", gap: "16px", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              download
              style={{ position: "relative", padding: "12px 32px", borderRadius: "9999px", background: "linear-gradient(to right, #2563eb, #7c3aed)", color: "white", fontWeight: "600", display: "flex", alignItems: "center", gap: "8px", overflow: "hidden", textDecoration: "none" }}
            >
              <span>View Resume</span>
              <Download style={{ width: "16px", height: "16px" }} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="glass-effect"
              style={{ padding: "12px 32px", borderRadius: "9999px", color: "white", fontWeight: "600", display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}
            >
              <span>Let's Connect</span>
              <ArrowRight style={{ width: "16px", height: "16px" }} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
