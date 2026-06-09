"use client"

import { motion } from "framer-motion"
import { Code, Zap, Target } from "lucide-react"

const skillCategories = [
  {
    id: 1,
    title: "Languages & Databases",
    icon: Code,
    color: "primary",
    skills: ["Java", "Python", "SQL/MySQL", "HTML/CSS/JavaScript", "PHP"],
  },
  {
    id: 2,
    title: "Tools & Platforms",
    icon: Zap,
    color: "secondary",
    skills: [
      "Figma",
      "Power BI",
      "Tableau",
      "Excel",
      "n8n",
      "Supabase",
      "Git",
      "Power Automate",
      "Lucidchart",
      "SPSS",
    ],
  },
  {
    id: 3,
    title: "Frameworks & Methods",
    icon: Code,
    color: "primary",
    skills: [
      "Agile/Scrum",
      "SDLC",
      "QA/UAT",
      "UX Research",
      "Journey Mapping",
      "BPM",
      "Design Thinking",
    ],
  },
  {
    id: 4,
    title: "Business Strategy",
    icon: Target,
    color: "secondary",
    skills: [
      "Brand Strategy",
      "Data Visualization",
      "Stakeholder Communication",
      "Market Analysis",
    ],
  },
]

export default function SkillsSection() {
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

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  }

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-slate-900/20 to-background"
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
            Technical & Strategic Stack
          </h2>
          <p className="text-lg text-foreground/60">
            Comprehensive skillset spanning technical development, enterprise
            tools, and business strategy
          </p>
        </motion.div>

        {/* Skills Categories Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <motion.div key={category.id} variants={itemVariants}>
                <div className="glass-card rounded-xl p-8 transition-colors group">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 glass-card rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Badges */}
                  <motion.div
                    className="flex flex-wrap gap-3"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {category.skills.map((skill, index) => (
                      <motion.span
                        key={index}
                        variants={skillVariants}
                        className="px-4 py-2 glass-card text-sm rounded-full text-foreground/80 hover:text-primary transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>


                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
