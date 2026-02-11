"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  Award,
} from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      type: "work",
      title: "Web Development Intern",
      company: "Zidio.in",
      period: "Apr 2025 – May 2025",
      location: "Remote",
      description:
        "Worked as a full-stack web development intern building MERN-based applications with real-world features and secure APIs.",
      achievements: [
        "Built MERN stack applications using React, Node.js, Express & MongoDB",
        "Developed an Excel Analytics Platform",
        "Created a Blogging Platform",
        "Implemented REST APIs and authentication",
      ],
      icon: Briefcase,
      color: "from-blue-500 to-cyan-500",
    },
    {
      type: "education",
      title: "Bachelor of Technology (B.Tech)",
      company: "Lovely Professional University",
      period: "Aug 2023 – Present",
      location: "Phagwara, Punjab",
      description:
        "Pursuing B.Tech in Computer Science and Engineering with a focus on web development and DSA.",
      achievements: [
        "CGPA: 6.00",
        "Strong foundation in C++, Java, Python",
        "Built multiple academic projects",
      ],
      icon: GraduationCap,
      color: "from-green-500 to-emerald-500",
    },
    {
      type: "education",
      title: "Intermediate (PCM)",
      company: "Jagat Narayan Lal College",
      period: "Apr 2021 – Mar 2022",
      location: "Khagaul, Bihar",
      description:
        "Completed Intermediate education with Physics, Chemistry and Mathematics.",
      achievements: [
        "Percentage: 60%",
        "Strong analytical and mathematical foundation",
      ],
      icon: GraduationCap,
      color: "from-orange-500 to-yellow-500",
    },
    {
      type: "education",
      title: "Matriculation (10th)",
      company: "School of Creative Learning",
      period: "Apr 2019 – Mar 2020",
      location: "Khagaul, Bihar",
      description:
        "Completed Matriculation with a strong foundation in core subjects.",
      achievements: [
        "Percentage: 60%",
        "Developed discipline and academic consistency",
      ],
      icon: GraduationCap,
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My academic background
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-green-500/20 to-transparent" />

          {experiences
            .filter(exp => exp.type === "education")
            .map((exp, idx) => {
              const Icon = exp.icon;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`relative mb-12 ${
                    idx % 2 === 0
                      ? "pr-12 md:pr-0 md:pl-12 md:ml-auto"
                      : "pl-12 md:pl-0 md:pr-12 md:mr-auto"
                  } md:w-1/2`}
                >
                  {/* Dot */}
                  <div
                    className={`absolute top-6 ${
                      idx % 2 === 0
                        ? "right-[-8px] md:left-[-8px]"
                        : "left-[-8px] md:right-[-8px]"
                    } w-4 h-4 rounded-full bg-gradient-to-r ${exp.color}`}
                  />

                  {/* Card */}
                  <div className="p-6 rounded-2xl glass-effect border border-white/10">
                    <div
                      className={`absolute -top-4 ${
                        idx % 2 === 0 ? "-right-4" : "-left-4"
                      } w-12 h-12 rounded-xl bg-gradient-to-r ${exp.color} flex items-center justify-center`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                    <p className="text-blue-400 mb-2">{exp.company}</p>
                    <p className="text-gray-400 text-sm mb-3">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-3">
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>

                    <ul className="space-y-1">
                      {exp.achievements.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-xs text-gray-400"
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color}`}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
