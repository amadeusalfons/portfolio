"use client"

import { motion } from "framer-motion"
import { BookOpen, Award, CheckCircle } from "lucide-react"

export default function CredentialsSection() {
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
            Education & Credentials
          </h2>
          <p className="text-lg text-foreground/60">
            Verified qualifications and continuing professional development
          </p>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Education */}
          <motion.div variants={itemVariants}>
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-8 hover:border-primary/30 transition-colors group h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Education</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    Double Degree Program
                  </h4>
                  <p className="text-primary font-medium mb-3">
                    Binus University, Malang
                  </p>
                  <div className="space-y-2 text-foreground/70 text-sm">
                    <p>
                      <span className="font-medium">Majors:</span> Digital
                      Business Innovation & Information Systems
                    </p>
                    <p>
                      <span className="font-medium">GPA:</span> 3.93 / 4.00
                    </p>
                    <p>
                      <span className="font-medium">Expected Graduation:</span>{" "}
                      2026
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="mt-6 pt-6 border-t border-slate-700 h-1 bg-gradient-to-r from-primary/50 to-transparent rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={itemVariants}>
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-8 hover:border-secondary/30 transition-colors group h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                  <Award className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold">Certifications</h3>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: "Microsoft Certified: Azure AI Fundamentals",
                    status: "Verified",
                  },
                  {
                    title: "Rapid Developer Certification",
                    status: "Mendix",
                  },
                  {
                    title: "AWS Certified Solutions Architect",
                    status: "In Progress",
                  },
                  {
                    title: "McKinsey Forward Program",
                    status: "In Progress",
                  },
                ].map((cert, index) => (
                  <div
                    key={index}
                    className="flex gap-3 items-start pb-4 border-b border-slate-700 last:border-b-0 last:pb-0"
                  >
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">{cert.title}</p>
                      <p className="text-sm text-foreground/60">{cert.status}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom accent */}
              <div className="mt-6 h-1 bg-gradient-to-r from-secondary/50 to-transparent rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
