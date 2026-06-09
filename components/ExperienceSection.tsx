"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Briefcase, Calendar, ArrowRight } from "lucide-react"

const experiences = [
  {
    id: 1,
    company: "Bank Central Asia (BCA)",
    division: "HRIS Division",
    role: "Business Analyst Intern",
    period: "2024 - Present",
    icon: "🏦",
    highlights: [
      "Designed and implemented bulk-update mechanism for HR systems",
      "Conducted stakeholder requirements gathering and analysis",
      "Prepared Business Requirements Documents (BRDs) for enterprise features",
      "Managed UAT (User Acceptance Testing) across 2,000+ employees",
      "Reduced HR processing time by 65.3% through process optimization",
    ],
  },
  {
    id: 2,
    company: "ARCN (Arcane)",
    role: "Founder & Business Director",
    division: "Premium Fragrance Brand",
    period: "2023 - Present",
    icon: "🧴",
    highlights: [
      "Founded and scaled premium fragrance brand from concept to market",
      "Developed comprehensive brand strategy and identity",
      "Managed e-commerce operations and customer relationships",
      "Achieved 40% YoY revenue and partnership growth",
      "Built strategic partnerships with luxury retail channels",
    ],
  },
  {
    id: 3,
    company: "Allianz Indonesia",
    role: "Sales & Advisory Associate",
    division: "Financial Services",
    period: "2023 - 2024",
    icon: "💼",
    highlights: [
      "Conducted financial needs analysis for client portfolio",
      "Managed CRM tracking and customer relationship workflows",
      "Achieved consistent sales targets and client satisfaction metrics",
      "Provided advisory services on insurance and investment products",
      "Developed client retention strategies",
    ],
  },
  {
    id: 4,
    company: "Freelance Web Development",
    role: "Full-Stack Developer",
    division: "Independent Consultant",
    period: "2022 - Present",
    icon: "💻",
    highlights: [
      "Delivered full lifecycle web development projects for clients",
      "Managed client communication and project requirements",
      "Built responsive frontends with modern React technologies",
      "Implemented backend solutions with Python, Java, and Node.js",
      "Maintained portfolio of 5+ production applications",
    ],
  },
]

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState(0)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  }

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-slate-900/30 to-background"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-foreground/60">
            Hands-on experience across enterprise, startups, and independent consulting
          </p>
        </motion.div>

        {/* Tabs and Content */}
        <div className="grid md:grid-cols-4 gap-6">
          {/* Tab Buttons */}
          <motion.div
            className="md:col-span-1 flex md:flex-col gap-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {experiences.map((exp, index) => (
              <motion.button
                key={exp.id}
                variants={itemVariants}
                onClick={() => setActiveTab(index)}
                className={`w-full px-4 py-3 text-left text-sm font-medium rounded-lg transition-all duration-300 ${
                  activeTab === index
                    ? "bg-primary/20 border border-primary/50 text-primary"
                    : "border border-slate-700 text-foreground/60 hover:border-primary/30 hover:text-foreground"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">{exp.icon}</span>
                  <span className="hidden sm:inline text-xs truncate">
                    {exp.company}
                  </span>
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Content */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            key={activeTab}
          >
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-8 hover:border-primary/30 transition-colors">
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {experiences[activeTab].role}
                    </h3>
                    <p className="text-primary font-medium">
                      {experiences[activeTab].company} •{" "}
                      {experiences[activeTab].division}
                    </p>
                  </div>
                  <Briefcase className="w-6 h-6 text-secondary" />
                </div>

                {/* Period */}
                <div className="flex items-center gap-2 text-foreground/60">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{experiences[activeTab].period}</span>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-3">
                {experiences[activeTab].highlights.map((highlight, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <ArrowRight className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
                    <p className="text-foreground/80">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
