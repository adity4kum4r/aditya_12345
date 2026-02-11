"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Fitness Advisor Chatbot",
      description:
        "An intelligent chatbot providing fitness, diet, weight gain & weight loss recommendations using AI.",
      tech: ["Python", "Gemini API", "AI", "Chatbot"],
      github: "https://github.com/adity4kum4r",
      live: "",
      color: "from-blue-500 to-cyan-500",
      emoji: "💪",
    },
    {
      id: 2,
      title: "Hospital ER Patient Management System",
      description:
        "CLI-based real-time ER system prioritizing patients using DSA concepts like Heap, Linked List & Binary Search.",
      tech: [
        "C++",
        "Priority Queue (Heap)",
        "Linked List",
        "Binary Search",
        "File I/O",
      ],
      github: "https://github.com/adity4kum4r",
      live: "",
      color: "from-green-500 to-emerald-500",
      emoji: "🏥",
    },
    {
      id: 3,
      title: "Excel Data Dashboard",
      description:
        "Professional Excel dashboard built on 10,000+ rows using pivots, slicers, charts & automation.",
      tech: ["MS Excel", "Pivot Tables", "Charts", "Data Analysis"],
      github: "",
      live:
        "https://www.linkedin.com/posts/aditya-kumar-3b2ba9290_dataanalytics-exceldashboard-esportsanalytics-activity-7317975201181286400-3KBx",
      color: "from-orange-500 to-yellow-500",
      emoji: "📊",
    },
    {
      id: 4,
      title: "Blogging Platform (MERN)",
      description:
        "Full-stack blogging platform with authentication, posts, comments, likes & admin panel.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/adity4kum4r",
      live: "",
      color: "from-violet-500 to-purple-500",
      emoji: "📝",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Projects built during internships, training and self-learning
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="rounded-2xl glass-effect border border-white/10 p-6"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 mb-4 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center text-2xl`}
              >
                {project.emoji}
              </div>

              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4">
                {project.description}
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full bg-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-sm"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
