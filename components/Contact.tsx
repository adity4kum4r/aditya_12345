"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "adityashahyt@gmail.com",
      link: "mailto:adityashahyt@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9693720545",
      link: "tel:+919693720545",
      color: "from-violet-500 to-purple-500",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Phagwara, Punjab",
      link: "#",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/aditya-kumar-3b2ba9290/",
      color: "hover:bg-blue-500/20 hover:text-blue-400",
    },
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/adity4kum4r",
      color: "hover:bg-gray-500/20 hover:text-gray-300",
    },
    {
      icon: Mail,
      label: "Email",
      url: "mailto:adityashahyt@gmail.com",
      color: "hover:bg-red-500/20 hover:text-red-400",
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out via email, phone, or social platforms.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((info, idx) => (
              <motion.a
                key={idx}
                href={info.link}
                whileHover={{ x: 8 }}
                className="flex items-center gap-4 p-5 rounded-xl glass-effect hover:bg-white/5 transition-all group"
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${info.color} flex items-center justify-center`}
                >
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">{info.title}</div>
                  <div className="font-medium group-hover:gradient-text transition-all">
                    {info.value}
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Social Links */}
            <div className="pt-8 text-center">
              <h3 className="text-lg font-semibold mb-4">Connect with me</h3>
              <div className="flex justify-center flex-wrap gap-3">
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5 }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full glass-effect ${social.color} transition-all`}
                  >
                    <social.icon className="w-4 h-4" />
                    <span className="text-sm">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="p-6 rounded-2xl glass-effect text-center mt-10">
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-green-400 font-medium">
                  Available for work
                </span>
              </div>
              <p className="text-sm text-gray-400">
                Open to internships, freelance projects, and full-time roles.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
