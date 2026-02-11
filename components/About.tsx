"use client";

import { motion } from "framer-motion";
import { Code, Palette, Rocket, Users } from "lucide-react";

const About = () => {
  const skills = [
    { icon: Code, label: "Full Stack", color: "from-blue-500 to-cyan-500" },
    { icon: Palette, label: "UI/UX", color: "from-violet-500 to-pink-500" },
    { icon: Rocket, label: "MERN Stack", color: "from-orange-500 to-red-500" },
    { icon: Users, label: "Team Player", color: "from-green-500 to-emerald-500" },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>

            <div className="space-y-4 text-gray-300">
              <p>
                I am a Computer Science Engineering undergraduate with a strong
                interest in full-stack web development and problem-solving.
                I enjoy building real-world applications using modern technologies.
              </p>

              <p>
                I have hands-on experience as a Web Development Intern, where I worked
                on MERN stack projects including blogging platforms and data-driven
                web applications with authentication and REST APIs.
              </p>

              <p>
                My learning journey focuses on clean code, scalability, and continuous
                improvement through projects, internships, and self-practice.
              </p>
            </div>

            {/* Skills Icons */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group p-4 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 text-center cursor-pointer"
                >
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${skill.color} mx-auto mb-3 flex items-center justify-center`}
                  >
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-medium">{skill.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative p-8 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
                What I Do
              </h3>

              <div className="space-y-6">
                {[
                  {
                    title: "Web Development",
                    desc: "Developing responsive and interactive web applications with a focus on performance and usability.",
                    tech: "React, Next.js, Tailwind CSS",
                  },
                  {
                    title: "Backend Development",
                    desc: "Building secure REST APIs and handling authentication, databases, and server-side logic.",
                    tech: "Node.js, Express, MongoDB",
                  },
                  {
                    title: "Problem Solving & DSA",
                    desc: "Strengthening logical thinking and coding skills through data structures and algorithms.",
                    tech: "C++, Java, DSA",
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
                  >
                    <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                    <p className="text-gray-400 text-sm mb-2">{item.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tech.split(", ").map((t) => (
                        <span
                          key={t}
                          className="px-2 py-1 text-xs rounded-md bg-blue-500/10 text-blue-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
