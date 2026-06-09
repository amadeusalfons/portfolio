"use client"

import { motion } from "framer-motion"
import { Mail, Send } from "lucide-react"

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background/50"
    >
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Good solutions usually start with better questions.
          </h2>
          <p className="text-lg text-foreground/70 mb-4">
            My default is to ask &quot;okay, but why does that work that way? Maybe even 5 times&quot; before touching anything. It slows down the first five minutes and saves the last five hours. If you&apos;re looking for someone who thinks before they build, let&apos;s talk.
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          className="glass-card rounded-xl p-12 transition-colors group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <div className="p-4 glass-card rounded-lg">
                <Mail className="w-8 h-8 text-primary" />
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-2 text-foreground">
              Get in Touch
            </h3>
            <p className="text-foreground/70 mb-8">
              Whether you have a project in mind or just want to chat about
              enterprise solutions, feel free to reach out.
            </p>

            <div className="space-y-4 mb-8">
              <a
                href="mailto:amadeusalfons@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-background font-semibold rounded-lg hover:bg-primary/90 transition-colors group/btn"
              >
                Send Email
                <Send className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6 pt-8 border-t border-white/10">
              <a
                href="https://github.com/amadeusalfons/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors font-medium"
                aria-label="GitHub Profile"
              >
                GitHub
              </a>
              <a
                href="https://id.linkedin.com/in/amadeusalfons"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors font-medium"
                aria-label="LinkedIn Profile"
              >
                LinkedIn
              </a>
              <a
                href="https://instagram.com/amadeusalfons"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors font-medium"
                aria-label="Instagram Profile"
              >
                Instagram
              </a>
            </div>
          </div>


        </motion.div>
      </div>
    </section>
  )
}
