"use client"

import { motion } from "framer-motion"
import { Github, Mail, Heart, ArrowRight } from "lucide-react"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        className="max-w-4xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-6"
        >
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
            <span className="text-sm text-primary font-medium">
              ✨ Enterprise Solutions & Digital Innovation
            </span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-center mb-6 leading-tight"
        >
          Bridging the Gap Between
          <span className="block gradient-text">Complex Systems</span>
          and Business Profitability
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-foreground/70 text-center mb-8 max-w-2xl mx-auto"
        >
          Final-year Information Systems student with hands-on BA and client
          delivery experience in enterprise environments.
        </motion.p>

        {/* Key Metric */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-12"
        >
          <div className="px-6 py-4 bg-secondary/10 border border-secondary/30 rounded-lg text-center">
            <p className="text-3xl font-bold text-secondary">65.3%</p>
            <p className="text-sm text-foreground/60 mt-2">
              HR Processing Time Reduction across 2,000+ employees
            </p>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <button className="px-8 py-4 bg-primary text-background font-semibold rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group">
            View Case Studies
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 border border-primary/50 text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors">
            Let&apos;s Connect
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 text-primary transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="mailto:contact@example.com"
            className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 text-primary transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 text-primary transition-colors"
          >
            <Heart className="w-6 h-6" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
