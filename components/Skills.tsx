"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Palette,
  Smartphone,
  Server,
  GitBranch,
  Shield,
} from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    {
      name: "HTML, CSS & JavaScript",
      level: 85,
      icon: Code2,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "React & Next.js",
      level: 80,
      icon: Code2,
      color: "from-blue-600 to-blue-400",
    },
    {
      name: "Node.js & Express",
      level: 75,
      icon: Server,
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Tailwind CSS",
      level: 85,
      icon: Palette,
      color: "from-teal-500 to-cyan-500",
    },
    {
      name: "MongoDB",
      level: 70,
      icon: Database,
      color: "from-green-600 to-lime-500",
    },
    {
      name: "C++ & Java",
      level: 75,
      icon: Code2,
      color: "from-orange-500 to-red-500",
    },
    {
      name: "Python (Basics)",
      level: 65,
      icon: Code2,
      color: "from-yellow-500 to-orange-400",
    },
    {
      name: "REST APIs",
      level: 70,
      icon: GitBranch,
      color: "from-violet-500 to-purple-500",
    },
  ];

  const softSkills = [
    "Problem Solving",
    "Team Collaboration",
    "Communication",
    "Time Management",
    "Adaptability",
    "Logical Thinking",
    "Quick Learner",
    "Attention to Detail",
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and skills I use to build real-world web applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <Code2 className="w-6 h-6 text-blue-500" />
              <span>Technical Skills</span>
            </h3>

            <div className="space-y-6">
              {technicalSkills.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center`}
                      >
                        <skill.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-medium group-hover:gradient-text transition-all">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-sm text-gray-400">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: idx * 0.1 }}
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Soft Skills & Tools */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <Shield className="w-6 h-6 text-violet-500" />
              <span>Soft Skills & Tools</span>
            </h3>

            {/* Soft Skills */}
            <div className="mb-12">
              <h4 className="text-lg font-semibold mb-4 text-gray-300">
                Soft Skills
              </h4>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, idx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    whileHover={{ y: -2 }}
                    className="px-4 py-2 rounded-full glass-effect text-sm hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-300">
                Tools & Platforms
              </h4>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                {[
                  "Git",
                  "GitHub",
                  "VS Code",
                  "Postman",
                  "MongoDB Atlas",
                  "Vercel",
                  "Netlify",
                  "Figma",
                ].map((tool, idx) => (
                  <motion.div
                    key={tool}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="p-3 rounded-xl bg-white/5 border border-white/10 text-center text-xs font-medium"
                  >
                    {tool}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Learning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 p-6 rounded-2xl glass-effect"
            >
              <h4 className="text-lg font-semibold mb-3 gradient-text">
                Currently Learning
              </h4>
              <p className="text-sm text-gray-400">
                Enhancing my skills in advanced React patterns, backend
                optimization, and data structures while building real-world
                projects.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
