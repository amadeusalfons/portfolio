"use client"

import { motion } from "framer-motion"
import { Crown, Users, Globe, Star } from "lucide-react"

const achievements = [
  {
    icon: Crown,
    title: "Diplomatic Representative",
    description:
      "National representative selected for diplomatic dialogue with the French President",
    color: "from-yellow-400 to-amber-400",
  },
  {
    icon: Users,
    title: "Head of Relations & Business Development",
    company: "Himpreneur",
    stats: [
      "40% YoY partnership growth",
      "2,500+ event participants managed",
      "Best Coordinator Award",
    ],
    color: "from-blue-400 to-cyan-400",
  },
  {
    icon: Globe,
    title: "International Community Development",
    description:
      "2nd Place nationally for SME digitalization initiative in Labuan Bajo",
    stats: ["National recognition", "Digital transformation focus"],
    color: "from-emerald-400 to-teal-400",
  },
  {
    icon: Star,
    title: "Strategic Leadership",
    description: "Driving organizational growth and innovation across multiple domains",
    stats: [
      "Cross-functional team leadership",
      "Stakeholder management",
      "Strategic planning & execution",
    ],
    color: "from-purple-400 to-pink-400",
  },
]

export default function LeadershipSection() {
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-slate-900/30 to-background">
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
            Leadership & Recognition
          </h2>
          <p className="text-lg text-foreground/60">
            Achievements in leadership, community development, and strategic initiatives
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <motion.div key={index} variants={itemVariants}>
                <div className="relative group h-full">
                  {/* Card */}
                  <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-8 hover:border-primary/30 transition-all duration-300 h-full hover:shadow-lg hover:shadow-primary/10">
                    {/* Icon Container */}
                    <div className="mb-6 inline-block p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {achievement.title}
                    </h3>

                    {/* Company if exists */}
                    {achievement.company && (
                      <p className="text-secondary font-medium mb-4">
                        {achievement.company}
                      </p>
                    )}

                    {/* Description */}
                    {achievement.description && (
                      <p className="text-foreground/70 mb-4 text-sm">
                        {achievement.description}
                      </p>
                    )}

                    {/* Stats/Highlights */}
                    {achievement.stats && (
                      <div className="space-y-2">
                        {achievement.stats.map((stat, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-foreground/70">
                            <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full" />
                            {stat}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
