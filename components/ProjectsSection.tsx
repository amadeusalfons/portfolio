"use client"

import { motion } from "framer-motion"
import ProjectCard from "./ProjectCard"

const projects = [
  {
    title: "Netflix Dashboard",
    description:
      "Advanced analytics dashboard for content strategy and regional market analysis. Track performance metrics, optimize regional dominance, and make data-driven content decisions.",
    tags: ["MySQL", "Data Visualization", "Analytics", "Strategy"],
    icon: "mdi:chart-line",
    link: "https://canva.link/xay0j3uuwb686c4",
  },
  {
    title: "Classic Models Dashboard",
    description:
      "Executive-level sales analytics platform tracking $9.6M in sales. Provides 360-degree sales performance visibility with KPIs, trends, and actionable insights.",
    tags: ["MySQL", "Power BI", "Analytics", "Executive KPIs"],
    icon: "mdi:trending-up",
    link: "https://canva.link/xay0j3uuwb686c4",
  },
  {
    title: "Fotoyuk Virtual Photo Booth",
    description:
      "Browser-based virtual photobooth powered by Google AI Studio. Real-time frame capture, custom layouts, and instant sharing capabilities for events.",
    tags: ["Google AI Studio", "ReactJS", "UX Design", "Real-time"],
    icon: "mdi:image-frame",
    link: "https://canva.link/xay0j3uuwb686c4",
  },
  {
    title: "Full-Stack Delivery Portfolio",
    description:
      "Comprehensive suite of web and software solutions including ARCN Website, Charactra Landing, cGroovy Platform, Telegram Bot, and Cafe POS System.",
    tags: ["Java", "ReactJS", "Python", "SQL", "Full-Stack"],
    icon: "mdi:wrench",
    link: "https://canva.link/xay0j3uuwb686c4",
  },
  {
    title: "UI/UX & Graphic Designs",
    description:
      "Professional brand strategy execution and creative visual assets. Comprehensive design systems, marketing collateral, and brand identity development.",
    tags: ["Figma", "Brand Strategy", "UI/UX", "Asset Design"],
    icon: "mdi:palette",
    link: "https://canva.link/xay0j3uuwb686c4",
  },
]

export default function ProjectsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background/50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            A selection of enterprise solutions and custom applications built
            with precision and delivered with excellence
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
