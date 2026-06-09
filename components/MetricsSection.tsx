"use client"

import { motion } from "framer-motion"
import { BarChart3, Users, TrendingUp, Award, Code } from "lucide-react"

const metrics = [
  {
    icon: TrendingUp,
    value: "65.3%",
    label: "HR Processing Time Reduction",
    description: "BCA HRIS - 2,000+ employees",
    color: "from-primary to-cyan-400",
  },
  {
    icon: Award,
    value: "3.93 / 4.00",
    label: "Cumulative GPA",
    description: "Binus University - Double Degree",
    color: "from-secondary to-amber-300",
  },
  {
    icon: Users,
    value: "2,500+",
    label: "Event Participants Managed",
    description: "Himpreneur - Head of Relations",
    color: "from-emerald-400 to-teal-400",
  },
  {
    icon: BarChart3,
    value: "40% YoY",
    label: "Organizational Growth",
    description: "Revenue & Partnership Growth",
    color: "from-blue-400 to-indigo-400",
  },
  {
    icon: Code,
    value: "7+",
    label: "Technical Credentials",
    description: "Verified Skills & Certifications",
    color: "from-purple-400 to-pink-400",
  },
]

export default function MetricsSection() {
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background/50">
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
            Measurable Impact
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Proven track record of delivering enterprise solutions that drive
            real business results
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {metrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                {/* Card Background with gradient border */}
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur group-hover:blur-xl -z-10" />

                {/* Card */}
                <div className="relative p-6 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl hover:border-primary/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20 h-full">
                  {/* Icon Container */}
                  <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Value */}
                  <p className="text-3xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {metric.value}
                  </p>

                  {/* Label */}
                  <p className="font-semibold text-foreground mb-1">
                    {metric.label}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-foreground/60">
                    {metric.description}
                  </p>

                  {/* Hover accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl" />
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
