"use client"

import { motion } from "framer-motion"
import { Code, Mail, Briefcase, ArrowRight } from "lucide-react"
import Image from "next/image"

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
      transition: { duration: 0.8 },
    },
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        className="max-w-5xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Photo & Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          {/* Left: Profile Photo */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center md:justify-start"
          >
            <div className="relative w-64 h-72 md:w-72 md:h-80">
              {/* Glassmorphic border frame */}
              <div className="absolute inset-0 glass-card rounded-2xl" />
              {/* Profile image */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Studio%20Photo-wC8QAjbVJAnAcHcnb8gcG29NHUE9vq.png"
                  alt="Amadeus Alfons"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <div>
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="inline-block px-4 py-2 glass-card rounded-full">
                <span className="text-sm text-primary font-medium">
                  Enterprise Solutions & Digital Innovation
                </span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-5xl font-bold mb-4 leading-tight"
            >
              Bridging the Gap Between
              <span className="block gradient-text">Complex Systems</span>
              and Business Profitability
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-base sm:text-lg text-foreground/70 mb-6"
            >
              Final-year Information Systems student with hands-on BA and client
              delivery experience in enterprise environments.
            </motion.p>

            {/* Key Metric */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="px-6 py-4 glass-card rounded-lg">
                <p className="text-3xl font-bold text-secondary">65.3%</p>
                <p className="text-sm text-foreground/60 mt-2">
                  HR Processing Time Reduction across 2,000+ employees
                </p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <a
                href="#metrics"
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.getElementById('metrics')
                  element?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-8 py-3 bg-primary text-background font-semibold rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group cursor-pointer"
              >
                View Case Studies
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="px-8 py-3 glass-card text-primary font-semibold rounded-lg hover:bg-primary/20 transition-colors">
                Let&apos;s Connect
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex gap-4"
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card rounded-full hover:bg-primary/20 text-primary transition-colors"
                aria-label="GitHub"
              >
                <Code className="w-5 h-5" />
              </a>
              <a
                href="mailto:amadeusalfons@gmail.com"
                className="p-3 glass-card rounded-full hover:bg-primary/20 text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card rounded-full hover:bg-primary/20 text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Briefcase className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
